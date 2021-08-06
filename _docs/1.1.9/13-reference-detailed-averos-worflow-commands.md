---
title: "Reference"
permalink: /docs/reference-detailed-averos-worflow-commands/
excerpt: "Reference - detailed averos workflows commands"
toc: false
classes: wide
---

## **Detailed Averos Workflows Commands**

------------

|  **Workflow** | **Alias** |  **Command** | **Actions** |
| ------------ | ------------ | ------------ | ------------ |
| **ng-add** | - |  `ng add @wiforge/averos` |adds Averos support to your angular project | 
| **averos-entity**  | **ae**  | `ng g @wiforge/averos:ae`  | 1. creates a new averos entity <br/>2. creates a new angular averos driven service named `[--sname]` (default=MyEntityNameService) related to the newly created entity `[--name]` <br/>3. creates a default entity view layout for the newly created entity<br/> 4. register the newly created entity `[--name]` in the averos framework|
| **add-composite-member**  | **acm**  | `ng g @wiforge/averos:aem`  | Adds a new averos composite member to a given averos entity and updates the view layout accordingly |
| **add-simple-member**  | **asm**  | `ng g @wiforge/averos:asm`  | Adds a new averos simple member to a given averos entity and updates the view layout accordingly |
| **service-entity**  | **as**  | `ng g @wiforge/averos:as`  | creates a new entity Service related to the entity `[--ename]` under `$projectRoot/src/app/service`  |
| **create-entity-uc**  | ucc  |  `ng g @wiforge/averos:ucc` |  1. creates an `AVEROS CREATE ENTITY` use case related to the entity `[--ename]` <br/> 2. register the default route `myentity/create` to the main application route module (app-routing.modue.ts) |
| **search-entity-uc**  | **ucs**  | `ng g @wiforge/averos:ucs`  | 1. creates an `AVEROS SEARCH ENTITY` use case related to the entity `[--ename]` <br/> 2. creates an `AVEROS ENTITY` DETAILS use case related to the entity `[--ename]` <br/> 3. register the default route 'myentity/search' to the main application route module (`app-routing.modue.ts`) <br/> 4. register the default route `myentity/view/:id` to the main application route module (app-routing.modue.ts) <br/> 5. register the default route `myentity/edit/:id` to the main application route module (`app-routing.modue.ts`)  |
|  **advanced-crud** | **acrud**  | `ng g @wiforge/averos:acrud`  |  1. creates a new averos entity class <br/> 2. creates a new angular averos driven service named `[--sname]` (default=MyEntityNameService) related to the newly created entity `[--ename]` <br/> 3. register the newly created entity `[--ename]` in the averos framework <br/> 4. creates an `AVEROS CREATE ENTITY` use case related to the entity `[--ename]` <br/> 5. register the default route `myentity/create` to the main application route module (`app-routing.modue.ts`) <br/> 6. creates an `AVEROS SEARCH ENTITY` use case related to the entity `[--ename]` <br/> 7. creates an `AVEROS ENTITY DETAILS` use case related to the entity `[--ename]` <br/> 8. register the route 'myentity/search' in the main application route module (`app-routing.modue.ts`) <br/> 9. register the route `myentity/view/:id` in the main application route module (app-routing.modue.ts) <br/> 10. register the route `myentity/edit/:id` in the main application route module (`app-routing.modue.ts`) |
| **add-language**  | **alang**  | `ng g @wiforge/averos:alang`  | adds a new language translation support  |
| **add-translation-entry**  | **ate**  | `ng g @wiforge/averos:ate`  | adds a new translation key to a given language  |
| **create-page**  | **cp**  | `ng g @wiforge/averos:cp`  |  Create a new raw averos page as long as a route and a default menu entry. Depending on the command parameters, the new page could either be available in `public` space or in `logged`. The menu link could be added to the `side` menu, the `top` menu or to `both`. |
