//@ts-ignore `Bare` maybe not exist.
const rtiBare = globalThis?.Bare;
//@ts-ignore `Bun` maybe not exist.
const rtiBun = globalThis?.Bun;
//@ts-ignore `Deno` maybe not exist.
const rtiDeno = globalThis?.Deno?.build;
//@ts-ignore `navigator` maybe not exist.
const rtiNavigator = globalThis?.navigator;
//@ts-ignore `process` maybe not exist.
const rtiProcess = globalThis?.process;
//@ts-ignore `tjs` maybe not exist.
const rtiTxikiJS = globalThis?.tjs?.engine;
/**
 * Architecture.
 */
export type Architecture =
	| "arm"
	| "arm64"
	| "loong64"
	| "mips"
	| "mipsel"
	| "ppc"
	| "ppc64"
	| "riscv32"
	| "riscv64"
	| "s390"
	| "s390x"
	| "x64"
	| "x86";
function getRuntimeArch(): Architecture | null {
	switch (rtiBare?.arch as string) {
		case "arm":
			return "arm";
		case "arm64":
			return "arm64";
		case "ia32":
			return "x86";
		case "mips":
			return "mips";
		case "mipsel":
			return "mipsel";
		case "riscv32":
			return "riscv32";
		case "riscv64":
			return "riscv64";
		case "x64":
			return "x64";
		default:
			break;
	}
	switch (rtiDeno?.arch as string) {
		case "aarch64":
			return "arm64";
		case "x86_64":
			return "x64";
		default:
			break;
	}
	switch (rtiProcess?.arch as string) {
		case "arm":
			return "arm";
		case "arm64":
			return "arm64";
		case "ia32":
		case "x32":
			return "x86";
		case "loong64":
			return "loong64";
		case "mips":
			return "mips";
		case "mipsel":
			return "mipsel";
		case "ppc":
			return "ppc";
		case "ppc64":
			return "ppc64";
		case "riscv64":
			return "riscv64";
		case "s390":
			return "s390x";
		case "s390x":
			return "s390x";
		case "x64":
			return "x64";
		default:
			break;
	}
	return null;
}
/**
 * Architecture of the runtime; `null` if unknown.
 */
export const runtimeArch: Architecture | null = getRuntimeArch();
/**
 * Endianness.
 */
export type Endian =
	| "BE"
	| "LE";
function getRuntimeEndian(): Endian {
	const buffer: ArrayBuffer = new ArrayBuffer(2);
	const view: DataView = new DataView(buffer);
	view.setInt16(0, 256, true);
	return ((new Int16Array(buffer)[0] === 256) ? "LE" : "BE");
}
/**
 * Endian of the runtime.
 * 
 * This does not rely on NodeJS API `os.endianness()`.
 */
export const runtimeEndian: Endian = getRuntimeEndian();
/**
 * Name of the runtime.
 */
export type RuntimeName =
	| "bare"
	| "browser"
	| "bun"
	| "cloudflare-workers"
	| "deno"
	| "ende"
	| "kaluma"
	| "nodejs"
	| "txikijs";
function getRuntimeName(): RuntimeName | null {
	if (rtiNavigator.userAgent === "Cloudflare-Workers") {
		return "cloudflare-workers";
	}
	if (typeof rtiBare !== "undefined") {
		return "bare";
	}
	if (typeof rtiBun !== "undefined") {
		return "bun";
	}
	if (typeof rtiDeno !== "undefined") {
		return "deno";
	}
	if (typeof rtiProcess !== "undefined") {
		//@ts-ignore `binding` and `builtin_modules` are exclusive in Kaluma, not exist in others.
		if (typeof rtiProcess.binding !== "undefined" && typeof rtiProcess.builtin_modules !== "undefined") {
			return "kaluma";
		}
		return "nodejs";
	}
	if (typeof rtiTxikiJS !== "undefined") {
		return "txikijs";
	}
	if (
		rtiNavigator?.userAgentData?.brands.some(({ brand }: NavigatorUABrandVersion): boolean => {
			return (brand === "Ende");
		}) ||
		rtiNavigator?.userAgent.startsWith("Ende/")
	) {
		return "ende";
	}
	if (rtiNavigator?.userAgentData?.brands.some(({ brand }: NavigatorUABrandVersion): boolean => {
		return (
			brand === "Android System WebView" ||
			brand === "Chrome" ||
			brand === "Chromium" ||
			brand === "Edge" ||
			brand === "Firefox" ||
			brand === "Google Chrome" ||
			brand === "Microsoft Edge" ||
			brand === "Mozilla Firefox" ||
			brand === "Opera" ||
			brand === "Safari" ||
			brand === "Samsung Internet" ||
			brand === "WebView" ||
			brand?.endsWith(" WebView")
		);
	})) {
		return "browser";
	}
	return null;
}
/**
 * Name of the runtime; `null` if unknown.
 */
export const runtimeName: RuntimeName | null = getRuntimeName();
/**
 * Whether the runtime is (most likely) compatible to the NodeJS (`node:`) modules.
 */
export const runtimeIsCompatibleNode: boolean = (
	runtimeName === "bun" ||
	runtimeName === "cloudflare-workers" ||
	runtimeName === "deno" ||
	runtimeName === "nodejs"
);
/**
 * Whether the runtime is compatible to the TypeScript.
 */
export const runtimeIsCompatibleTypeScript: boolean = (
	runtimeName === "bun" ||
	runtimeName === "deno"
);
/**
 * Name of the system.
 */
export type SystemName =
	| "aix"
	| "android"
	| "chromeos"
	| "chromiumos"
	| "cygwin"
	| "freebsd"
	| "haiku"
	| "illumos"
	| "ios"
	| "linux"
	| "macos"
	| "netbsd"
	| "openbsd"
	| "solaris"
	| "windows";
function getSystemName(): SystemName | null {
	switch (rtiBare?.platform as string) {
		case "android":
			return "android";
		case "darwin":
			return "macos";
		case "ios":
			return "ios";
		case "linux":
			return "linux";
		case "win32":
			return "windows";
		default:
			break;
	}
	switch (rtiDeno?.os as string) {
		case "aix":
			return "aix";
		case "android":
			return "android";
		case "darwin":
			return "macos";
		case "freebsd":
			return "freebsd";
		case "illumos":
			return "illumos";
		case "linux":
			return "linux";
		case "netbsd":
			return "netbsd";
		case "solaris":
			return "solaris";
		case "windows":
			return "windows";
		default:
			break;
	}
	switch (rtiProcess?.platform as string) {
		case "aix":
			return "aix";
		case "android":
			return "android";
		case "cygwin":
			return "cygwin";
		case "darwin":
			return "macos";
		case "freebsd":
			return "freebsd";
		case "haiku":
			return "haiku";
		case "linux":
			return "linux";
		case "netbsd":
			return "netbsd";
		case "openbsd":
			return "openbsd";
		case "sunos":
			return "solaris";
		case "win32":
			return "windows";
		default:
			break;
	}
	switch (rtiNavigator?.userAgentData?.platform) {
		case "Android":
			return "android";
		case "Chrome OS":
			return "chromeos";
		case "Chromium OS":
			return "chromiumos";
		case "iOS":
			return "ios";
		case "Linux":
			return "linux";
		case "macOS":
			return "macos";
		case "Windows":
			return "windows";
		default:
			break;
	}
	if (rtiNavigator?.platform === "iPhone") {
		return "ios";
	}
	if (rtiNavigator?.platform?.startsWith("Linux")) {
		return "linux";
	}
	if (
		rtiNavigator?.platform === "MacIntel" ||
		rtiNavigator?.platform?.startsWith("Mac")
	) {
		return "macos";
	}
	if (rtiNavigator?.platform === "Win32") {
		return "windows";
	}
	return null;
}
/**
 * Name of the system; `null` if unknown.
 */
export const systemName: SystemName | null = getSystemName();
/**
 * File extension of the FFI (Foreign Function Interface).
 */
export type FFIExtension =
	| ".dll"
	| ".dylib"
	| ".so";
function getFFIExtension(): FFIExtension | null {
	if (
		runtimeName === null ||
		runtimeName === "browser" ||
		runtimeName === "cloudflare-workers"
	) {
		return null;
	}
	switch (systemName) {
		case "macos":
			return ".dylib";
		case "windows":
			return ".dll";
		default:
			return ".so";
	}
}
/**
 * File extension of the FFI (Foreign Function Interface); `null` if unknown or runtime unsupported.
 */
export const ffiExtension: FFIExtension | null = getFFIExtension();
