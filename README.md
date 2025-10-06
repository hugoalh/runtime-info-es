# Runtime Info (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/runtime-info-es](https://img.shields.io/github/v/release/hugoalh/runtime-info-es?label=hugoalh/runtime-info-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/runtime-info-es")](https://github.com/hugoalh/runtime-info-es)
[![JSR: @hugoalh/runtime-info](https://img.shields.io/jsr/v/@hugoalh/runtime-info?label=@hugoalh/runtime-info&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/runtime-info")](https://jsr.io/@hugoalh/runtime-info)
[![NPM: @hugoalh/runtime-info](https://img.shields.io/npm/v/@hugoalh/runtime-info?label=@hugoalh/runtime-info&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/runtime-info")](https://www.npmjs.com/package/@hugoalh/runtime-info)

An ECMAScript module for runtime information.

## 🎯 Targets

| **Runtime \\ Source** | **GitHub Raw** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources

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

> [!NOTE]
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## ⤵️ Entrypoints

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

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
  const runtimeIsCompatibleTypeScriptFull: boolean;
  ```
- ```ts
  const runtimeIsCompatibleTypeScriptLite: boolean;
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
