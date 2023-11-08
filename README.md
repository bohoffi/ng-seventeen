# NgSeventeen

## esbuild

- before: `@angular-devkit/build-angular:browser`
  - including `"main": "src/main.ts"` option
- now: `@angular-devkit/build-angular:application`
  - including `"browser": "src/main.ts"` option

### Builder comparison

- fresh Angular workspace created using `ng new`using `@angular/cli@17.0.0-rc.5`

| Builder                                     | Buildtime                                       |
| ------------------------------------------- | ----------------------------------------------- |
| `@angular-devkit/build-angular:browser`     | 1. `18.670ms`<br>2. `18.284ms`<br>3. `18.120ms` |
| `@angular-devkit/build-angular:application` | 1. `10.879ms`<br>2. `11.057ms`<br>3. `11.143ms` |

## Template Control Flow

### @for

- `track` (former `trackBy`)
  - is now **required**
  - > when in doubt, using `track $index` is a good default

### @if

- `if`/`else` can now be written in one block without any `<ng-container />` nesting
- adds `else if`

### View Transition API

- get smooth animations when changing routes
