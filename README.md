# About Application

This is an application made in order to manage coaching classes. To automate all the management tasks that are currently being done manually.

## Technologies Used

1. [Angular](https://angular.io/)
2. [HTML](https://www.wikiwand.com/en/HTML)
3. [SCSS](https://sass-lang.com/)
4. [TypeScript](https://www.typescriptlang.org/)
5. [Angular Material](https://material.angular.io/)

## Working

This software works only when the [tuition management system API](https://github.com/Sam-Varghese/tuitionManagementSoftwareAPI) is active. This software uses that API in order to GET and FETCH data from the database.

## Installing the application

- Firstly fork the repo and then clone it in your machine.
- If this is the first time you're using Angular, then execute the following command
  `npm install -g @angular/cli` to install [Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli)
- Now start the [API](https://github.com/Sam-Varghese/tuitionManagementSoftwareAPI)
- Procedure to start the API is mentioned in the [Readme](https://github.com/Sam-Varghese/tuitionManagementSoftwareAPI/blob/master/README.md)
- Install all the packages used in this project by executing
  `npm i`
- Now that you've activated the API, start the application using the following command
  `ng serve --open`

## Usage guide

- All the [components](https://angular.io/guide/component-overview) are generated using the command `ng generate component <componentName>`
- All the component can be found at [src\app](src\app)
- In the case where there's a need for fetching data, a new [service](https://angular.io/guide/architecture-services) can be created.
- All the services can be found at [src\app\services](src\app\services)
- Routing has also been done in order have a multi page application.
- Routes have been mentioned over [here](src\app\app-routing.module.ts)
- For styling, [Angular material](https://material.angular.io/) has been used.
- Hence kindly use Angular material to contribute to this project.
- Instead of CSS, [Sass](https://sass-lang.com/) has been used in order to get more features and flexibility.
- Angular automatically compiles Sass files to CSS, and renders the component.
- Hence you need not worry about compiling each and every .sass file using `sass --watch input.scss output.css` command