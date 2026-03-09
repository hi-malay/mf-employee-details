# mf-employee-details

Employee detail view micro frontend — renders at `/employees/:id`. Part of the [microfrontend demo](https://mf.malaymishra.com).

![Angular](https://img.shields.io/badge/Angular-17-dd0031?logo=angular&logoColor=white)
![single-spa](https://img.shields.io/badge/single--spa--angular-v9.2-blueviolet)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178c6?logo=typescript&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-custom--builder-8dd6f9?logo=webpack&logoColor=black)

**Live:** [employee-details.malaymishra.com](https://employee-details.malaymishra.com)

## Quick Start

```bash
npm install
npm start        # dev server on port 4200
npm run build    # production build
```

## Architecture

Angular 17 standalone component wrapped via single-spa-angular's NgModule bridge pattern. The root-config at [mf.malaymishra.com](https://mf.malaymishra.com) registers this app and activates it on the `/employees/:id` route.

**Zone.js** is loaded globally by the root-config from CDN — it is **not** bundled here. The custom-webpack builder handles the single-spa entry point and excludes Zone.js from the build.

## License

MIT
