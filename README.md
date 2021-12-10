# export-playground

Playground for exporting more complex libraries.

Teated with node 14 and create-react-app (wepback 4).

```
pnpm install
pnpm build
```

Testing with node:
```
cd tests/node
pnpm install
./run-with-node.js
```

Testing with react:
```
cd tests/react-app
pnpm install
pnpm start
```

## Exported paths

```
import { info } from 'export-playground';
import { login } from 'export-playground/auth';
import { commercial } from 'export-playground/deep/ads';
```

## Gotchas

Multiple inputs in rollup:

```
input: {
    'index': 'src/index.js',
    'auth/index': 'src/auth/index.js',
    'deep/ads/index': 'src/deep/ads/index.js',
},
```

Publish dir for symlinks (monorepo):

```
"publishConfig": {
    "dir": "dist"
},
```

CJS (point to a folder):

```
"main": "cjs",
"exports": {
    ".": "./cjs/index.js",
    "./auth": "./cjs/auth/index.js",
    "./deep/ads": "./cjs/deep/ads/index.js"
},
```

ESM (point to the root):

Make sure you also export to the root so the paths are working.

```
"module": "index.js"
```
