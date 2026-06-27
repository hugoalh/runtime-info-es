//#region Runtime Instance
const rtiES = globalThis?.navigator;
//@ts-ignore `Bun` maybe not exist.
const rtiBun = globalThis?.Bun;
//dnt-shim-ignore
const rtiDeno = globalThis?.Deno?.build;
//@ts-ignore `process` maybe not exist.
const rtiNode = globalThis?.process;
//#endregion
/**
 * Architecture of the runtime.
 */
export type RuntimeArch =
	| "arm"
	| "arm64"
	| "loong64"
	| "mips"
	| "mipsel"
	| "ppc"
	| "ppc64"
	| "riscv64"
	| "s390"
	| "s390x"
	| "x64"
	| "x86";
function getRuntimeArch(): RuntimeArch | null {
	switch (rtiDeno?.arch as string) {
		case "aarch64":
			return "arm64";
		case "x86_64":
			return "x64";
		default:
			break;
	}
	switch (rtiNode?.arch as string) {
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
export const runtimeArch: RuntimeArch | null = getRuntimeArch();
/**
 * Name of the runtime.
 */
export type RuntimeName =
	| "browser"
	| "bun"
	| "cloudflare-workers"
	| "deno"
	| "nodejs";
function getRuntimeName(): RuntimeName | null {
	if (rtiES.userAgent === "Cloudflare-Workers") {
		return "cloudflare-workers";
	}
	if (typeof rtiBun !== "undefined") {
		return "bun";
	}
	if (typeof rtiDeno !== "undefined") {
		return "deno";
	}
	if (typeof rtiNode !== "undefined") {
		return "nodejs";
	}
	if (rtiES?.userAgentData?.brands.some(({ brand }: NavigatorUABrandVersion): boolean => {
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
export type TypeScriptCompatibleStatus = boolean | "lite";
function getTypeScriptCompatibleStatus(): TypeScriptCompatibleStatus {
	if (
		runtimeName === "bun" ||
		runtimeName === "deno"
	) {
		return true;
	}
	if (
		runtimeName === "cloudflare-workers" ||
		runtimeName === "nodejs"
	) {
		switch (rtiNode?.features?.typescript) {
			case false:
				return false;
			case "strip":
				return "lite";
			case "transform":
				return true;
			default:
				break;
		}
	}
	return false;
}
/**
 * Whether the runtime is compatible to the TypeScript.
 */
export const runtimeIsCompatibleTypeScript: TypeScriptCompatibleStatus = getTypeScriptCompatibleStatus();
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
	switch (rtiNode?.platform as string) {
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
	switch (rtiES?.userAgentData?.platform) {
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
	if (rtiES?.platform === "iPhone") {
		return "ios";
	}
	if (rtiES?.platform?.startsWith("Linux")) {
		return "linux";
	}
	if (
		rtiES?.platform === "MacIntel" ||
		rtiES?.platform?.startsWith("Mac")
	) {
		return "macos";
	}
	if (rtiES?.platform === "Win32") {
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
