# Barnie

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/75uQQHEwKw)

## Run tasks

To run tasks with Nx use:

```sh
npx nx <target> <project-name>
```

For example:

```sh
npx nx build myproject
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

To install a new plugin you can use the `nx add` command. Here's an example of adding the React plugin:

```sh
npx nx add @nx/react
```

Use the plugin's generator to create new projects. For example, to create a new React app or library:

```sh
# Genenerate an app
npx nx g @nx/react:app demo

# Generate a library
npx nx g @nx/react:lib some-lib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/intro#learn-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Process to receate

Node version 20

#### Init mono repository with NX:

```
npx create-nx-workspace@latest <PROJECT_NAME>
```

#### Install generators

```
npm install --save-dev @nx/node @nx/react @nx/next @nx/js
```

#### Create APIS

```
npx nx g @nx/node:application <API_NAME> --directory=apps --framework=express --e2eTestRunner=none

npx nx g @nx/node:application <API_NAME> --directory=apps --framework=fastify --e2eTestRunner=none
```

#### Create Frontends

```
npx nx g @nx/react:application <APP_NAME> --directory=apps --bundler=vite --skipFormat --linter=eslint --e2eTestRunner=none --unitTestRunner=vitest

npx nx g @nx/next:application <APP_NAME> --directory=apps --bundler=vite --skipFormat --linter=eslint  --e2eTestRunner=none
```

#### Create Utils

```
npx nx g @nx/js:library <LIB_NAME> --directory=libs --bundler=vite --unitTestRunner=vitest --linter=eslint

npx nx g @nx/react:library <LIB_NAME> --directory=libs --bundler=vite --unitTestRunner=vitest --linter=eslint --skipFormat

npx nx g @nx/react:storybook-configuration <TARGET_LIB> --directory=libs --bundler=vite
```

### Running apps locally

Running development server:

```
nx serve <APP_NAME> (react and express)
nx start <APP_NAME> (nextjs)
```

Running test:

```
nx test <APP_NAME>
nx test <APP_NAME> --watch
```

Running build process:

```
nx build <APP_NAME>
```

Running lint:

```
nx lint <APP_NAME>
nx format:write <APP_NAME>
nx format:check <APP_NAME>
```

See dependencies:

```
nx dep-graph
```

Para correr estos comando en las aplicacioens afectadas:

```
nx affected:<COMMAND>
```

Lanzar storybook y construirlo:

```
nx storybook <COMPONENTS_LIB>
nx build-storybook <COMPONENTS_LIB>
```

### Build Docker images

Running from root directory:

```
docker build -t api-core -f apps/api-core/Dockerfile .
```

#### Install Husky

```
brew install bash
```

```
npm install husky --save-dev
npx husky install
```

### Add a pre-commmit

```
echo "npx prettier --check ." > .husky/pre-commit
```

## Building images:

```
docker build -t api-core -f ./apps/api-core/Dockerfile ./
```

## List projects

```
nx show projects
```

# Docker Images

Build Docker image from root directory:

```
docker build -t <IMAGE-NAME> -f apps/api-auth/Dockerfile .
```

Build container:

```
docker run -d -p 3000:3000 --name <CONTAINER_NAME> <IMAGE_NAME> --env-file .env

```
