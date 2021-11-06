# Aviso

## Projeto inicial

Segue o código fonte do projeto inicial do curso
https://github.com/silvagpe/ustart-web-inicial


# WebclientAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

https://angular.io/cli/generate


## Criar um módigo
```
Module
npx ng g module cliente --routing

#Produto
npx ng g module produtos --routing

npx ng g module clientes --routing

```

## Criar um componente
```
Component
npx ng g c cliente/pages/cliente --module cliente.module --skip-tests
npx ng g c cliente/pages/cad-cliente --module cliente.module --skip-tests

#Produtos
npx ng g c produtos/pages/produtos --module produtos.module --skip-tests
npx ng g c produtos/pages/cad-produto --module produtos.module --skip-tests
npx ng g c produtos/pages/graficos --module produtos.module --skip-tests

#Clientes
npx ng g c clientes/pages/clientes --module clientes.module --skip-tests
npx ng g c clientes/pages/cad-cliente --module clientes.module --skip-tests


```


```
docker build -f Docker/Dockerfile -t webclient-angular:0.1 .
 
```