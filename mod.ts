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
export type RuntimeName =
	| "browser"
	| "bun"
	| "cloudflare-workers"
	| "deno"
	| "nodejs";
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
const esNavigator = globalThis?.navigator as NavigatorPolyfill;
//@ts-ignore `Bun` maybe not exist.
const rfBun = globalThis?.Bun;
//dnt-shim-ignore
const rfDenoBuild = globalThis?.Deno?.build;
//@ts-ignore `process` maybe not exist.
const rfNodeProcess = globalThis?.process;
function getRuntimeArch(): RuntimeArch | null {
	switch (rfDenoBuild?.arch) {
		case "aarch64":
			return "arm64";
		case "x86_64":
			return "x64";
		default:
			break;
	}
	switch (rfNodeProcess?.arch) {
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
			return rfNodeProcess.arch;
		case "ia32":
			return "x86";
		default:
			break;
	}
	return null;
}
function getRuntimeName(): RuntimeName | null {
	if (esNavigator.userAgent === "Cloudflare-Workers") {
		return "cloudflare-workers";
	}
	if (typeof rfBun !== "undefined") {
		return "bun";
	}
	if (typeof rfDenoBuild !== "undefined") {
		return "deno";
	}
	if (typeof rfNodeProcess !== "undefined") {
		return "nodejs";
	}
	if (
		esNavigator?.userAgentData?.brands?.brand === "Android System WebView" ||
		esNavigator?.userAgentData?.brands?.brand === "Chrome" ||
		esNavigator?.userAgentData?.brands?.brand === "Chromium" ||
		esNavigator?.userAgentData?.brands?.brand === "Edge" ||
		esNavigator?.userAgentData?.brands?.brand === "Firefox" ||
		esNavigator?.userAgentData?.brands?.brand === "Google Chrome" ||
		esNavigator?.userAgentData?.brands?.brand === "Microsoft Edge" ||
		esNavigator?.userAgentData?.brands?.brand === "Mozilla Firefox" ||
		esNavigator?.userAgentData?.brands?.brand === "Opera" ||
		esNavigator?.userAgentData?.brands?.brand === "Safari" ||
		esNavigator?.userAgentData?.brands?.brand === "Samsung Internet" ||
		esNavigator?.userAgentData?.brands?.brand === "WebView"
	) {
		return "browser";
	}
	return null;
}
function getSystemName(): SystemName | null {
	switch (rfDenoBuild?.os) {
		case "aix":
		case "android":
		case "freebsd":
		case "illumos":
		case "linux":
		case "netbsd":
		case "solaris":
		case "windows":
			return rfDenoBuild.os;
		case "darwin":
			return "macos";
		default:
			break;
	}
	switch (rfNodeProcess?.platform) {
		case "aix":
		case "android":
		case "cygwin":
		case "freebsd":
		case "haiku":
		case "linux":
		case "netbsd":
		case "openbsd":
			return rfNodeProcess.platform;
		case "darwin":
			return "macos";
		case "sunos":
			return "solaris";
		case "win32":
			return "windows";
		default:
			break;
	}
	switch (esNavigator?.userAgentData?.platform) {
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
	if (esNavigator?.platform === "iPhone") {
		return "ios";
	}
	if (esNavigator?.platform?.startsWith("Linux")) {
		return "linux";
	}
	if (
		esNavigator?.platform === "MacIntel" ||
		esNavigator?.platform?.startsWith("Mac")
	) {
		return "macos";
	}
	if (esNavigator?.platform === "Win32") {
		return "windows";
	}
	return null;
}
export const runtimeArch: RuntimeArch | null = getRuntimeArch();
export const runtimeName: RuntimeName | null = getRuntimeName();
export const systemName: SystemName | null = getSystemName();
