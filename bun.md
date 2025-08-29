# Bun

[Bun](https://bun.com/) is an all-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.

- Fast Runtime: Unlike Node.js and Deno, which use Google's V8 engine, Bun leverages WebKit's JavaScriptCore engine for its JavaScript execution, contributing to its faster startup and execution times.
- Bun is written in [Zig](https://ziglang.org/), a low-level programming language known for its performance and memory efficiency.
- Node.js Compatibility: Bun aims for high compatibility with Node.js, implementing many of its core APIs and module resolution algorithms, making it easier to migrate existing Node.js projects to Bun.
- TypeScript and JSX Support: Bun provides native support for running TypeScript and JSX files without requiring explicit transpilation steps.

## Console commands

- `bun init` - Init project
- `bun add @elysiajs/swagger` - Add a dependency to package.json
- `bun remove elysia` - Remove a dependency from package.json
- `bun install` - Install dependencies for a package.json
- `bun run index.ts` - 
- `bun upgrade` - Upgrade to latest version of Bun
