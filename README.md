**Note:** This repository is a fork from [SoftwareAteliers/asp-net-core-vue-starter](https://github.com/SoftwareAteliers/asp-net-core-vue-starter) and has only light modifications to suit my own needs.

# ASP.NET Core Vue Starter

The repository contains an ASP.&#8203;NET Core + Vue.js starter template. The template runs on ASP.NET Core 3.0 and is created by Vue CLI 4.0 with a new plugin based architecture allowing developers to interactively scaffold a new project with just a one command.

Original article how to create the starter template is available [here](https://medium.com/software-ateliers/asp-net-core-vue-template-with-custom-configuration-using-cli-3-0-8288e18ae80b).

[![Nuget](https://img.shields.io/nuget/v/SoftwareAteliers.AspNetCoreVueStarter.svg?style=flat&color=2196f3)](https://www.nuget.org/packages/SoftwareAteliers.AspNetCoreVueStarter/)

> For ASP.NET Core 2.2 template use [release v1.1.0](https://github.com/SoftwareAteliers/asp-net-core-vue-starter/releases/tag/1.1.0)

---

## Table of Contents

* [Features](#features)
* [Used Technology Stack](#used-technology-stack)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)

## Features

* Hot module replacement
* Code-splitting
* Tree-shaking
* ES2017 transpilation
* Long term caching and so on

## Used Technology Stack

**ASP.NET Core 3.0:**

* Web.API
* Vue CLI and JavaScript Services middlewares to integrate with client app

**Vue.js with CLI 4.0 supporting optional integrations:**

* TypeScript
* Progressive Web App
* Vue Router & Vuex (State Store)
* Linting, unit testing, E2E testing
* 3rd party component frameworks (Vuetify, Vue Bootstrap etc.)
* publish your personal/enterprise plugin and so on...

*For a full feature list, I suggest you to read the [official CLI release statement](https://medium.com/the-vue-point/vue-cli-3-0-is-here-c42bebe28fbb) by Evan You.*

## Prerequisites

* [.NET Core](https://www.microsoft.com/net/download/windows) >= 3.0
* [NodeJS](https://nodejs.org/) >= 8.9
* [Vue CLI](https://cli.vuejs.org/) >= 4.0
* Your favourite editor (I prefer [VS Code](https://code.visualstudio.com/) and VS 2019)

---

## Getting started

There are two ways how to set up the project: one for people who want to create their own template and choose custom integrations and the other for developers who want to start with no configuration.

## Clone the starter with default configuration

* Clone this repository `git clone https://github.com/didii/asp-net-core-vue-starter`

## (Optional) Scaffold Vue.js app with custom configuration

If you prefer to overwrite default Vue client app with custom settings, take the following steps:

* **Remove all the contents** of the folder /ClientApp
* Create a new Vue project by using Vue CLI: `vue create client-app` OR by using CLI graphical interface running `vue ui`

> Unfortunately Vue CLI does not allow us to set a project name by C# standards using Upper Camel Case (Pascal Case) naming convention, so let's initiate app inside of client-app folder and then move the content to ClientApp.

* **Move all the contents from the new folder /client-app to /ClientApp.**

Now application is ready to run.

## Run the application

First time setup:
Run `npm install` in the `ClientApp` folder.

Then:
* Run the Vue app using `npm run serve` from the `ClientApp` folder
* Run the .NET application using `dotnet run` in the root folder or hit `F5` or `Ctrl`+`F5` in Visual Studio

Browse to [http://localhost:65025](http://localhost:65025) for ASP.&#8203;NET Core + Vue app or browse to [http://localhost:8080](http://localhost:8080) for Vue app only.

---

## Debugging in Visual Studio Code + Chrome

This has been setup for you with Chrome. What you will need to install yourself:

* Visual Studio Code, obviously
  * Extension: [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

Then follow the following steps:

1. Run both the vue app and asp.net core app
2. Press `F5` in Visual Studio Code and select the Launch profile

For improved debugging experience I advice you to always start chrome with a debugger port open. This way you can attach Visual Studio Code whenever necessary instead of needing to rebuild your entire application state from scratch again.

1. Run both the vue app and ASP.NET core app
2. Open Chrome using the shortcut
   * This simply runs `chrome.exe --remote-debugging-port=9222 http://localhost:65025`
3. In Visual Studio Code, choose the attach profile for debugging
4. Press `F5` and it should immediately attach to the existing window

---

## Issues and Contribution

Want to file a bug, contribute some code, or improve documentation? Excellent! Please make sure to check existing issues before opening a new one.

---

## Contributors

Special thanks to everyone who helped and contributed to this project!

* [@jdebarochez](https://github.com/jdebarochez)
* [@arisliang](https://github.com/arisliang)
* [@dotnetshadow](https://github.com/dotnetshadow)
* [@NickStees](https://github.com/NickStees)

---

## License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://mit-license.org/)

Copyright &copy; 2018 - 2019 [Software Ateliers](https://github.com/SoftwareAteliers)

## Where to find me

Medium: [Software Ateliers](https://medium.com/software-ateliers) | Twitter: [@SAteliers](https://twitter.com/SAteliers)