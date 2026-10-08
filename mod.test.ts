import {
	runtimeArch,
	runtimeEndian,
	runtimeName,
	systemName
} from "./mod.ts";
Deno.test("Runtime Arch", { permissions: "none" }, () => {
	console.log(runtimeArch);
});
Deno.test("Runtime Endian", { permissions: "none" }, () => {
	console.log(runtimeEndian);
});
Deno.test("Runtime Name", { permissions: "none" }, () => {
	console.log(runtimeName);
});
Deno.test("System Name", { permissions: "none" }, () => {
	console.log(systemName);
});
