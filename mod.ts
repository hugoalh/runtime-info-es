type NavigatorUserAgentDataPlatform =
	| "Android"
	| "Chrome OS"
	| "Chromium OS"
	| "iOS"
	| "Linux"
	| "macOS"
	| "Windows"
	| "Unknown";
interface NavigatorPolyfill extends Navigator {
	platform?: string;
	userAgentData?: {
		brands?: {
			brand?: string;
		};
		platform?: NavigatorUserAgentDataPlatform;
	};
}
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
/**
 * Name of the runtime.
 */
export type RuntimeName =
	| "browser"
	| "bun"
	| "cloudflare-workers"
	| "deno"
	| "nodejs";
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
const rfES = globalThis?.navigator as NavigatorPolyfill;
//@ts-ignore `Bun` maybe not exist.
const rfBun = globalThis?.Bun;
//dnt-shim-ignore
const rfDeno = globalThis?.Deno?.build;
//@ts-ignore `process` maybe not exist.
const rfNode = globalThis?.process;
function getRuntimeArch(): RuntimeArch | null {
	switch (rfDeno?.arch) {
		case "aarch64":
			return "arm64";
		case "x86_64":
			return "x64";
		default:
			break;
	}
	switch (rfNode?.arch) {
		case "arm":
		case "arm64":
		case "loong64":
		case "mips":
		case "mipsel":
		case "ppc":
		case "ppc64":
		case "riscv64":
		case "s390":
		case "s390x":
		case "x64":
			return rfNode.arch;
		case "ia32":
			return "x86";
		default:
			break;
	}
	return null;
}
function getRuntimeName(): RuntimeName | null {
	if (rfES.userAgent === "Cloudflare-Workers") {
		return "cloudflare-workers";
	}
	if (typeof rfBun !== "undefined") {
		return "bun";
	}
	if (typeof rfDeno !== "undefined") {
		return "deno";
	}
	if (typeof rfNode !== "undefined") {
		return "nodejs";
	}
	if (
		rfES?.userAgentData?.brands?.brand === "Android System WebView" ||
		rfES?.userAgentData?.brands?.brand === "Chrome" ||
		rfES?.userAgentData?.brands?.brand === "Chromium" ||
		rfES?.userAgentData?.brands?.brand === "Edge" ||
		rfES?.userAgentData?.brands?.brand === "Firefox" ||
		rfES?.userAgentData?.brands?.brand === "Google Chrome" ||
		rfES?.userAgentData?.brands?.brand === "Microsoft Edge" ||
		rfES?.userAgentData?.brands?.brand === "Mozilla Firefox" ||
		rfES?.userAgentData?.brands?.brand === "Opera" ||
		rfES?.userAgentData?.brands?.brand === "Safari" ||
		rfES?.userAgentData?.brands?.brand === "Samsung Internet" ||
		rfES?.userAgentData?.brands?.brand === "WebView" ||
		rfES?.userAgentData?.brands?.brand?.endsWith(" WebView")
	) {
		return "browser";
	}
	return null;
}
function getSystemName(): SystemName | null {
	switch (rfDeno?.os) {
		case "aix":
		case "android":
		case "freebsd":
		case "illumos":
		case "linux":
		case "netbsd":
		case "solaris":
		case "windows":
			return rfDeno.os;
		case "darwin":
			return "macos";
		default:
			break;
	}
	switch (rfNode?.platform) {
		case "aix":
		case "android":
		case "cygwin":
		case "freebsd":
		case "haiku":
		case "linux":
		case "netbsd":
		case "openbsd":
			return rfNode.platform;
		case "darwin":
			return "macos";
		case "sunos":
			return "solaris";
		case "win32":
			return "windows";
		default:
			break;
	}
	switch (rfES?.userAgentData?.platform) {
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
	if (rfES?.platform === "iPhone") {
		return "ios";
	}
	if (rfES?.platform?.startsWith("Linux")) {
		return "linux";
	}
	if (
		rfES?.platform === "MacIntel" ||
		rfES?.platform?.startsWith("Mac")
	) {
		return "macos";
	}
	if (rfES?.platform === "Win32") {
		return "windows";
	}
	return null;
}
/**
 * Architecture of the runtime, or `null` if unknown.
 */
export const runtimeArch: RuntimeArch | null = getRuntimeArch();
/**
 * Name of the runtime, or `null` if unknown.
 */
export const runtimeName: RuntimeName | null = getRuntimeName();
/**
 * Name of the system, or `null` if unknown.
 */
export const systemName: SystemName | null = getSystemName();
