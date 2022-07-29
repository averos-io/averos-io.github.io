---
title: "Detailed Averos Workflow Commands"
permalink: /averos/documentation/reference-detailed-averos-worflow-commands/
excerpt: "Detailed Averos Workflow Commands"
toc: false
classes: wide
---

## **Detailed Averos Workflows Commands**

------------

|  **Workflow** | **Alias** |  **Command** | **Actions** |
| ------------ | ------------ | ------------ | ------------ |
| **ng-add** | - |  `ng add @wiforge/averos` |adds Averos support to your angular project | 
| **averos-entity**  | **-**  | `ng g @wiforge/averos:averos-entity`  | 1. creates a new averos entity <br/>2. creates a new angular averos driven service named `[--sname]` (default=MyEntityNameService) related to the newly created entity `[--name]` <br/>3. creates a default entity view layout for the newly created entity<br/> 4. register the newly created entity `[--name]` in the averos framework|
| **add-composite-member**  | **-**  | `ng g @wiforge/averos:add-composite-member`  | Adds a new averos composite member to a given averos entity and updates the view layout accordingly |
| **add-simple-member**  | **-**  | `ng g @wiforge/averos:add-simple-member`  | Adds a new averos simple member to a given averos entity and updates the view layout accordingly |
| **averos-service**  | **-**  | `ng g @wiforge/averos:-`  | creates a new entity Service related to the entity `[--ename]` under `$projectRoot/src/app/service`  |
| **create-entity-uc**  | **-**  |  `ng g @wiforge/averos:create-entity-uc` |  1. creates an `AVEROS CREATE ENTITY` use case related to the entity `[--ename]` <br/> 2. register the default route `myentity/create` to the main application route module (app-routing.modue.ts) |
| **search-entity-uc**  | **-**  | `ng g @wiforge/averos:search-entity-uc`  | 1. creates an `AVEROS SEARCH ENTITY` use case related to the entity `[--ename]` <br/> 2. creates an `AVEROS ENTITY` DETAILS use case related to the entity `[--ename]` <br/> 3. register the default route 'myentity/search' to the main application route module (`app-routing.modue.ts`) <br/> 4. register the default route `myentity/view/:id` to the main application route module (app-routing.modue.ts) <br/> 5. register the default route `myentity/edit/:id` to the main application route module (`app-routing.modue.ts`)  |
|  **advanced-crud** | **-**  | `ng g @wiforge/averos:advanced-crud`  |  1. creates a new averos entity class <br/> 2. creates a new angular averos driven service named `[--sname]` (default=MyEntityNameService) related to the newly created entity `[--ename]` <br/> 3. register the newly created entity `[--ename]` in the averos framework <br/> 4. creates an `AVEROS CREATE ENTITY` use case related to the entity `[--ename]` <br/> 5. register the default route `myentity/create` to the main application route module (`app-routing.modue.ts`) <br/> 6. creates an `AVEROS SEARCH ENTITY` use case related to the entity `[--ename]` <br/> 7. creates an `AVEROS ENTITY DETAILS` use case related to the entity `[--ename]` <br/> 8. register the route 'myentity/search' in the main application route module (`app-routing.modue.ts`) <br/> 9. register the route `myentity/view/:id` in the main application route module (app-routing.modue.ts) <br/> 10. register the route `myentity/edit/:id` in the main application route module (`app-routing.modue.ts`) |
| **add-language**  | **-**  | `ng g @wiforge/averos:add-language`  | adds a new language translation support  |
| **add-translation-entry**  | **-**  | `ng g @wiforge/averos:add-translation-entry`  | adds a new translation key to a given language  |
| **create-page**  | **-**  | `ng g @wiforge/averos:create-page`  |  Create a new raw averos page as long as a route and a default menu entry. Depending on the command parameters, the new page could either be available in `public` space or in `logged`. The menu link could be added to the `side` menu, the `top` menu or to `both`. |
