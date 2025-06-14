# MarketplaceFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, run:

```bash
npm test
```

## Environment configuration

The base URL for the microservices backend is set in `src/environments/environment.ts`.
Adjust the `apiUrl` value to match your backend server.

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

--------------- Arquitectura del Frontend – Marketplace de Servicios -----------------------


src/app/
│
├── core/               # Servicios generales y utilidades (interceptores, auth, guards)
│   ├── auth/           # Manejo de autenticación y token
│   ├── services/       # Servicios globales (API, geolocalización, etc.)
│   ├── models/         # Interfaces y enums (Usuario, Servicio, etc.)
│   └── interceptors/   # Interceptor para JWT
│
├── shared/             # Componentes reutilizables (navbar, footer, botones, etc.)
│
├── features/           
│   ├── search/         # Módulo de búsqueda de servicios (ya iniciado)
│   ├── auth/           # Login, registro
│   ├── dashboard/      # Página principal para proveedores/clientes
│   ├── profile/        # Perfil de usuario
│   └── bookings/       # Reservas (para clientes y proveedores)
│
├── pages/              # Componentes de páginas de alto nivel (LandingPage, Home, NotFound)
│
├── app.component.ts    # Componente raíz
├── app.config.ts       # Configuración de rutas
└── app.module.ts       # Módulo principals
