# react-webpack-template

Simple starter for chrome extensions.

## Template Contains:

- TypeScript
- WebPack
- React
- Eslint
- Prettier
- Husky
- Jest
- Scss Modules

## To install:

```bash
npx degit github:xSyki/chrome-extension-template my-extension
cd my-app
npm i
```

## To run:

```bash
npm start
```

## Better way to use in dev is:

```bash
npm run build-dev
```

## To add this extension to chrome:
Go to extensions, turn on developer mode and load upacked file(build).

## To check is everything okay:
This template should:
- Change every image to my logo
- Change Syki to xSyki 😎
- On new page click context menu and it should console log message

## Other scripts

### Tests:

```bash
npm run test
```

### Prettier

```bash
npm run format
```

### Eslint

```bash
npm run lint
npm run lint-fix
```

## To build:

```bash
npm run build
```

Build will be in build folder.
