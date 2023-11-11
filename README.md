# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: Current Web Application
- `ui`: A component library used by `web`.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `jestconfig`: `jest` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `tailwindconfig`: `tailwind.config.js` used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Jest](https://jestjs.io/) for testing
- [TailwindCSS](https://tailwindcss.com/) for styling
- [FlowbiteUI](https://flowbite.com/) for UI components
- [Storybook](https://storybook.js.org/) for component development
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) for state management

### Build

To build all apps and packages, run the following command:

```
npm run build
```

**Note: Building the app will also run `npm build storybook`**

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

**Note: Developing the app will also run `npm run storybook`**

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd <path-to-your-turborepo>
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

---

# Setting Up a New Dependency in TurboRepo Monorepo

This guide outlines the steps to add and configure a new dependency within a TurboRepo monorepo.

## Steps

### 1. **Install the NPM Package in the Monorepo Root**

```bash
npm install <package-name>
```

### 2. **Create a Config Folder**

If the dependency requires a config file, create a new folder within `/packages` following the convention `<package-name>config`. For instance, `jestconfig`.

### 3. **Configure the Package**

#### Create `package.json` for the Config

Inside the config folder (`<package-name>config`), create a `package.json` file with the following template:

```json
{
  "name": "<package-name>config",
  "version": "0.0.0",
  "main": "./index.ts",
  "license": "MIT"
}
```

#### Create `index.ts` and Config File

In the same config folder, create an `index.ts` file. Add the configuration code in this file, for example, `jest.config.js`.

### 4. **Update Workspace Config Files**

In each workspace where you want to use the config, create a config file (e.g., `jest.config.js`) and import the config file from the config package:

```javascript
module.exports = require("jestconfig");
```

### 5. **Add Scripts to Workspace Package.json**

In the `package.json` of each workspace, add necessary scripts, for example:

```json
"scripts": {
  "test": "jest"
}
```

### 6. **Add Dependency in Workspace Package.json**

In the `/packages/ui/package.json` and `/packages/web/package.json`, add the dependency for the config package:

```json
"dependencies": {
  "jestconfig": "*"
}
```

### 7. **Finalize Installation**

Run the following command in the root of the monorepo:

```bash
npm install
```

### Important Notes

For better understanding, refer to specific files within the workspace (e.g., `/packages/web`):

- `package.json`
- `tsconfig.json`
- `next.config.js`
- `eslintrc.js`

These files demonstrate how to import the config files into the workspace's config files.

---

This guide helps integrate a new dependency into a TurboRepo monorepo, providing a streamlined approach to configuring and utilizing dependencies across multiple workspaces. Adjust these steps based on specific project needs and configurations.

---

Feel free to adjust or expand upon this guide for your project's requirements!

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
