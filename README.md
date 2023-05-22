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

// Because we are treeshaking, static init the component library
import { initialise } from '@icatalyst/react-ui-components';

initialise();

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

## Key Concepts

### Modules

With the intent to keep the cognitive burden low when working within each aspect of the application, a modular approach has been taken. A module encapsulates all of the function of a specific area within the application itself. Modules can also contain sub modules which encourages thinking about reuse when developing.

Within the react ui library a module contains everything that would be typically required to render and manage access to components and paths. This includes:

- title - the name that should be displayed when rendering a module for example in the navigation menu. This will be derived from the name if no title is provided.
- icon - the icon used when referring to the module
- path - the route that this module is located at. This will also be prepended to any submodules
- auth - the role that is required to access this module. If none is provided then anyone can access the module
- component - the component to display when the route matches. This makes use of react-router-dom and Outlets to allow sub modules to be rendered inside components if required
- modules - any submodules that can be accessed through this module.
- routes - any routes that are also available to the module, they will be prepended by the module path

An example of a module could be a Dashboard Module as follows:

```typescript
import { _ } from '@icatalyst/js-core';
import { ReactModuleConfig } from '@icatalyst/react-ui-components';
import { lazy } from 'react';

const Dashboard = lazy(() => import('./components/Dashboard'));

export type DashboardModuleProps = ReactModuleConfig;

const moduleDefaults: DashboardModuleProps = {
  name: 'dashboardModule',
  title: 'Dashboard',
  enabled: true,
  icon: 'view_quilt',
  path: 'dashboard',
  navigation: true,
  component: Dashboard,
  modules: [
    createUserReportModule({
      path: 'users',
      auth: 'admin',
    }),
    createActivityLogModule(),
  ],
};

function createDashboardModule(
  overrides?: Partial<DashboardModuleProps>,
): DashboardModuleProps {
  const config = _.merge({}, moduleDefaults, overrides) as DashboardModuleProps;

  return config;
}

export default createDashboardModule;
```

In the above we have defined a function (createDashboardModule) that can then be plugged in to the application modules. Based on the definition above the module would be rendered in the navigation menu and when a user clicks the item in the nav menu would be directed to /dashboard which would render the Dashboard component (which is lazy loaded).
As we can see from the createDashboardModule function, it is possible to override any part of the default configuration if using this module in multiple places.

In the module definition we have also included 2 submodules, which would have been defined in a similar fashion to the DashboardModule. The 2 submodules are;
_createUserReportModule_ which includes overriding the auth so that only administrators would be able to navigate to the /dashboard/users path. _createActivityLogModule_ which would use the defaults as defined in that particular module.

This essentially creates the following route pseudocode

```
<route path="/dashboard" component={Dashboard}/>
<route path="/dashboard/user">
  <guard --if not in admin role redirect to unauthorised-->
  <component --as defined in the createUserReportModule-->
</route>
```

### Repositories

Repositories are an implementation of the repository pattern using rxjs. rxjs simplifies managing complex dataflows and provides observables to allow for more reactive code.

Repositories control the dataflow between the client and the api and should generally be based on the DTO(data transfer objects) that are defined in a common library accessible by both front and back end.

An example of a repository may look as follows:

```typescript
import { DtoType, OmitBig5 } from '@icatalyst/js-core';
import {
  AxiosInstance,
  createModelFields,
  createModelRepository,
} from '@icatalyst/react-ui-components';
import { ApplicationRepositories } from '../../../repositories';
import { DeviceDto } from '@meacora/libs';

export default function registerDevicesRepository() {
  ApplicationRepositories.registerRepository(
    'deviceDefinition',
    (baseURL: string, axios: AxiosInstance) => {
      return createModelRepository<OmitBig5<DeviceDto> & DtoType>({
        baseURL,
        dtoPath: 'v1/api/devices',
        axios: axios,
        model: {
          name: 'domains',
          identityField: 'guid',
          icon: 'web',
          fields: createModelFields<OmitBig5<DeviceDto>>({
            guid: {
              type: 'string',
              readonly: true,
            },
            name: {
              type: 'string',
            },
            deviceTypeID: {
              label: 'Device Type',
              type: 'string',
            },
            status: {
              type: 'string',
            },
          }),
          layout: [['name'], ['deviceTypeID']],
          listLayout: ['name', 'deviceTypeID'],
        },
      });
    },
  );
}
```

In this case we get a typesafe repository which is able to conduct CRUD operations against the specified dto path.
