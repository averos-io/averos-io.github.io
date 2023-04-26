---
title: "Detailed Averos Workflow Commands"
permalink: /averos/documentation/reference-detailed-averos-worflow-commands/
excerpt: "Detailed Averos Workflow Commands"
toc: false
classes: wide
---

## **Detailed Averos Workflows Commands**

------------

|  **Workflow** |  **Command** | **Actions** |
| ------------ | ------------ | ------------ | ------------ |
| [**ng-add**]({{"/averos/documentation/core-module-description" | relative_url}} "Averos core module description") |  `ng add @wiforge/averos` |adds Averos support to your angular project including averos core modules and an authentication provider if requested. |

| [**averos-entity**]({{"/averos/documentation/averos-entity-workflows/#1-averos-entity" | relative_url}} "Averos Entity")  | `ng g @wiforge/averos:averos-entity`  | 1. creates a new averos entity <br/>2. creates a new angular averos driven service named `[--sname]` (default=MyEntityNameService) related to the newly created entity `[--name]` <br/>3. creates a default entity view layout for the newly created entity<br/> 4. register the newly created entity `[--name]` in the averos framework|

| [**add-composite-member**]({{"/averos/documentation/averos-entity-workflows/#3-add-composite-member" | relative_url}} "Averos Entity")  | `ng g @wiforge/averos:add-composite-member`  | Adds a new averos composite member to a given averos entity and updates the view layout accordingly |

| [**add-simple-member**]({{"/averos/documentation/averos-entity-workflows/#2-add-simple-member" | relative_url}} "Averos Simple Member")  | `ng g @wiforge/averos:add-simple-member`  | Adds a new averos simple member to a given averos entity and updates the view layout accordingly |

| [**averos-service**]({{"/averos/documentation/averos-business-service/#3-workflow-command-averos-service" | relative_url}} "Averos Service")  | `ng g @wiforge/averos:-`  | creates a new entity Service related to the entity `[--ename]` under `$projectRoot/src/app/service`  |

| [**service-configuration**]({{"/averos/documentation/environment-configuration/service-configuration" | relative_url}} "service configuration")    | `ng g @wiforge/averos:averos-config --type=service`  |  Generates a service configuration where services-to-apis lookup details bindings are defined. <br/> `--type=service` is mandatory in this case. |

| [**gateway-configuration**]({{"/averos/documentation/environment-configuration/gateway-configuration" | relative_url}} "gateway configuration")  | `ng g @wiforge/averos:averos-config --id=APIServiceGateway --type=gateway`  |  Generates a gateway configuration where a gateway connexion attributes are defined along with services-to-apis lookup details bindings.<br/> Since only one gateway should exist in an averos application `--id=APIServiceGateway` shall be mandatory in this case. <br/> Since the configuration is of type `gateway` `--type=gateway` shall be mandatory in this case. |

| [**create-entity-uc**]({{"/averos/documentation//generic-usecases/create-entity-usecase/#2-create-entity-uc-command-usage" | relative_url}} "Create Entity Use Case")  |  `ng g @wiforge/averos:create-entity-uc` |  1. creates an `AVEROS CREATE ENTITY` use case related to the entity `[--ename]` <br/> 2. register the default route `myentity/create` to the main application route module (app-routing.modue.ts) |

| [**search-entity-uc**]({{"/averos/documentation/generic-usecases/search-entity-usecase/#2-search-entity-uc-command-usage" | relative_url}} "Search Entity Use Case")  | `ng g @wiforge/averos:search-entity-uc`  | 1. creates an `AVEROS SEARCH ENTITY` use case related to the entity `[--ename]` <br/> 2. creates an `AVEROS ENTITY` DETAILS use case related to the entity `[--ename]` <br/> 3. register the default route 'myentity/search' to the main application route module (`app-routing.modue.ts`) <br/> 4. register the default route `myentity/view/:id` to the main application route module (app-routing.modue.ts) <br/> 5. register the default route `myentity/edit/:id` to the main application route module (`app-routing.modue.ts`)  |

| [**advanced-crud**]({{"/averos/documentation/generic-usecases/averos-crud/#2-advanced-crud-command-usage" | relative_url}} "Advanced Averos CRUD USe Case") | `ng g @wiforge/averos:advanced-crud`  |  1. creates a new averos entity class <br/> 2. creates a new angular averos driven service named `[--sname]` (default=MyEntityNameService) related to the newly created entity `[--ename]` <br/> 3. register the newly created entity `[--ename]` in the averos framework <br/> 4. creates an `AVEROS CREATE ENTITY` use case related to the entity `[--ename]` <br/> 5. register the default route `myentity/create` to the main application route module (`app-routing.modue.ts`) <br/> 6. creates an `AVEROS SEARCH ENTITY` use case related to the entity `[--ename]` <br/> 7. creates an `AVEROS ENTITY DETAILS` use case related to the entity `[--ename]` <br/> 8. register the route 'myentity/search' in the main application route module (`app-routing.modue.ts`) <br/> 9. register the route `myentity/view/:id` in the main application route module (app-routing.modue.ts) <br/> 10. register the route `myentity/edit/:id` in the main application route module (`app-routing.modue.ts`) |

| [**create-page**]({{"/averos/documentation/generic-usecases/averos-create-page/#2-create-page-command-usage" | relative_url}} "Create Page")  |  `ng g @wiforge/averos:create-page`  |  Creates a brand new averos page along with its navigation route and a default menu entry. <br/> Depending on the command parameters, the new page could either be available in `public` space or in `logged`. The menu link could be added to the `side` menu, the `top` menu or to `both`. |

| [**add-language**]({{"/averos/documentation/averos-translation/translation-workflow-commands/#2-add-language-workflow-command" | relative_url}} "Add Language")  | `ng g @wiforge/averos:add-language`  | adds a new language translation support. <br/> Averos supports [**11 languages**]({{"/averos/documentation/averos-translation/description/" | relative_url}} "Supported Languages") out of the box. |

| [**add-translation-entry**]({{"/averos/documentation/averos-translation/translation-workflow-commands/#3-add-translation-entry-workflow-command" | relative_url}} "Add translation entry")  | `ng g @wiforge/averos:add-translation-entry`  | adds a new translation key to a given language  |


