<br />
<div align="center">
  <a href="https://singularity.com" target="blank">
    <img src="../../../../public/static/images/logos/vertical-mid.png?raw=true" width="101" height="128" alt="ICatalyst Logo" />
  </a>
  
  <h3 align="center">@icatalyst/react-ui-components</h3>

  <p align="center">
    React UI Library
    <br />
    <a href="https://github.com/ICatalyst-Pte-Ltd/com.icatalyst.singularity.api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://api-dev.singularity.icatalyst.com/openapi">OpenAPI Docs</a>
    ·
    <a href="https://dev-docs.icatalyst.com/dev/libs/react/storybook/index.html">Storybook</a>
    ·
    <a href="https://github.com/ICatalyst-Pte-Ltd/com.icatalyst.singularity.api/issues">Report Bug</a>
    ·
    <a href="https://github.com/ICatalyst-Pte-Ltd/com.icatalyst.singularity.api/issues">Request Feature</a>
  </p>
</div>
<br />

# React UI Components

This libraries contains atomic components as well as standardised boilerplate to allow a developer to focus on building their app, not their UI.

This library contains components that implement standard patterns and wraps components from the MUI library in order to standardise styling across all aspects of a UI.

# Developing

## Creating an Application

The Application Component has been created to allow easy modularisation of the responsibilities of the application.

The application entry point is usually `index.tsx`, and will usually have the following content:

```typescript
import * as ReactDOM from 'react-dom/client';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<App />);
```

Where the 'App' component is the configured Application.

A typical App component might look as follow:

```typescript
import { createApp, CreateAppProps } from '@icatalyst/react-ui-components';
import { MyClientAuthProvider, useMyAuthContext } from '@myApp/auth_library';
import modules from '../modules';
import ApplicationRepositories from '../repositories';
import { appSettings, store, themes } from '../settings';
import { axios } from '@icatalyst/react-ui-components';

const customSettings = {
  authProvider: appSettings.authProvider,
  myApp: appSettings.myApp,
};

type MyAppCustomSettings = typeof customSettings;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const appConfiguration: CreateAppProps<any, MyAppCustomSettings> = {
  config: {
    name: appSettings.name,
    logo: appSettings.logo,
    featureImage: appSettings.featureImage,
    author: {
      name: appSettings.company_name,
      logo: appSettings.company_logo,
      url: appSettings.company_url,
    },
    environment: appSettings.environment,
  },
  store: store,
  themes: themes,
  modules: modules,
  custom: {
    authProvider: appSettings.authProvider,
    myApp: appSettings.myApp,
  },
  AuthProvider: MyClientAuthProvider,
  authProviderProps: {
    paths: {
      login: `${appSettings.myApp.apiRoot}/v1/auth/login`,
      logout: `${appSettings.myApp.apiRoot}/v1/auth/logout`,
    },
  },
  getAuthContext: useMyAuthContext,
  createRepositories(config, custom) {
    return {
      application: new ApplicationRepositories({
        baseURL: custom.myApp.apiRoot,
        axios,
      }),
      // ... Additional Repositories as required
    };
  },
};

export const App = createApp<MyAppCustomSettings>(appConfiguration);

/**
 * Allows the creation of apps in storybook for easy testing
 * of roles and UI interactions
 * */
export function createTestApp(
  overrideConfig?: (config: typeof appConfiguration) => typeof appConfiguration,
) {
  return createApp<MyAppCustomSettings>(
    overrideConfig ? overrideConfig(appConfiguration) : appConfiguration,
  );
}
```

A few important concepts with the above example.
The application is intended to be fully configurable while providing acceptable defaults out of the box.

Within the configuration of the application there are a few properties of note:

- **config** - This sets properties that are available through the AppContext
- **store** - Defines the redux store
- **themes** - Defines the named themes that are available to the application, theme variants (light/dark) are also generated from these themes.
- **modules** - The [modules](./MODULES.md) that are available to the application. This also helps to keep the application responsibilites segregated and sets simple boundaries for code splitting
- **custom** - Optional settings that are made available through the AppContext and the repository configuration
- **AuthProvider** - The Provider for RBAC components and Route Guards
- **authProviderProps** - Overrides for the AuthProvider being used
- **getAuthContext** - The function provided by the Auth Provider to retrieve information about the user and user identity
- **createRepositories** - a function to create the data repositories for API based operations from the app.
