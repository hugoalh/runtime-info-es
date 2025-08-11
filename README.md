# Runtime Info (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/runtime-info-es](https://img.shields.io/github/v/release/hugoalh/runtime-info-es?label=hugoalh/runtime-info-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/runtime-info-es")](https://github.com/hugoalh/runtime-info-es)
[![JSR: @hugoalh/runtime-info](https://img.shields.io/jsr/v/@hugoalh/runtime-info?label=@hugoalh/runtime-info&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/runtime-info")](https://jsr.io/@hugoalh/runtime-info)
[![NPM: @hugoalh/runtime-info](https://img.shields.io/npm/v/@hugoalh/runtime-info?label=@hugoalh/runtime-info&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/runtime-info")](https://www.npmjs.com/package/@hugoalh/runtime-info)

An ECMAScript (JavaScript & TypeScript) module for runtime information.

## 🔰 Begin

### 🎯 Targets

| **Targets** | **Remote** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

> [!NOTE]
> - It is possible to use this module in other methods/ways which not listed in here, however those methods/ways are not officially supported, and should beware maybe cause security issues.

### #️⃣ Resources Identifier

- **Remote - GitHub Raw:**
  ```
  https://raw.githubusercontent.com/hugoalh/runtime-info-es/{Tag}/mod.ts
  ```
- **JSR:**
  ```
  [jsr:]@hugoalh/runtime-info[@{Tag}]
  ```
- **NPM:**
  ```
  [npm:]@hugoalh/runtime-info[@{Tag}]
  ```

> [!NOTE]
> - For usage of remote resources, it is recommended to import the entire module with the main path `mod.ts`, however it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `_bar`, `_foo`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - For usage of JSR or NPM resources, it is recommended to import the entire module with the main entrypoint, however it is also able to import part of the module with sub entrypoint if available, please visit the [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub entrypoints.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Runtime Permissions

*This module does not request any runtime permission.*

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
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/documentation_generator/)
>   - [JSR](https://jsr.io/@hugoalh/runtime-info)
