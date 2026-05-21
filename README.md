# Runtime Info (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[DistBoard @hugoalh](https://hugoalh.github.io/distboard/target/runtime_info_ecmascript)
● [GitHub](https://github.com/hugoalh/runtime-info-es)
● [JSR](https://jsr.io/@hugoalh/runtime-info)
● [NPM](https://www.npmjs.com/package/@hugoalh/runtime-info)

An ECMAScript module for runtime information.

## 🎯 Runtime Targets

Any runtime which support ECMAScript should able to use this; These runtimes are officially supported:

- **[Bun](https://bun.sh/)** >= v1.1.0
- **[Deno](https://deno.land/)** >= v2.1.0
- **[NodeJS](https://nodejs.org/)** >= v20.9.0

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources & Entrypoints

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/runtime-info-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/runtime-info[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/runtime-info[@{Tag}]
  ```

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

> [!NOTE]
> - Different runtimes have vary support for the sources and entrypoints, visit the runtime documentation for more information.
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## 🧩 APIs

- ```ts
  const runtimeArch: RuntimeArch | null;
  ```
- ```ts
  const runtimeName: RuntimeName | null;
  ```
- ```ts
  const runtimeIsCompatibleNode: boolean;
  ```
- ```ts
  const runtimeIsCompatibleTypeScript: TypeScriptCompatibleStatus;
  ```
- ```ts
  const systemName: SystemName | null;
  ```
- ```ts
  type RuntimeArch =
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
  ```
- ```ts
  type RuntimeName =
    | "browser"
    | "bun"
    | "cloudflare-workers"
    | "deno"
    | "nodejs";
  ```
- ```ts
  type SystemName =
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
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
>   - [JSR](https://jsr.io/@hugoalh/runtime-info)
