---
title: "Reference"
permalink: /docs/reference-averos-service/
excerpt: "Reference -  averos service"
toc: false
classes: wide
---

## **Averos Service**

Averos service is an angular service that is intended to manage a given averos entity in an averos application.
Averos service is thus in charge of either modifying a given entity characteristics or retrieving the so called entity based on search criterias. 

### **Averos Service API conventions**

averos framework puts in place api conventions in order to unify entities management depending on different use cases. These conventions are related to:
- api data structure
- naming and functional conventions


### **API data structure** 
Data structure and data flow should be json compliant. 


#### **Naming and functional conventions**

Given an entity of type T, api services entity should follow the naming conventions below. The user should implement the related apis logic depending on his own business requirement.

>🚩 Note that averos automatically generates the target entity service, when requested via one of its code generation workflow.
Those services logic could be updated with your business logic accordingly. 
Keep in mind that function names should remains as is as they follow averos naming conventions listed below.
{: .notice--warning}

#### **Averos Service APIs Naming Conventions**

Below are the averos compliant APIs descriptions with respect to averos framework design.


|  **Name & Signature** | **URI** |  **HTTP Method** | **API Logic Type** | **API Description** |
| :------------: | :------------: | :------------: | :------------: |:------------: |
| `updateEntity(id: string, entityTopdate: T \| Partial<T>): Observable<T>` | /entityNames/:id | PATCH | SIMPLE | Updates an averos entity of type T |
| `createEntity(value: T): Observable<T>` | /entityNames | POST | SIMPLE | Creates an averos entity of type T |
| `deleteEntity(id: T): Observable<T>` | /entityNames/:id | DELETE | SIMPLE | Removes an averos entity of type T |
| `getAllEntities(): Observable<T[]>` | /entityNames | GET | SIMPLE | Retrieves a list of all entities instances of type T |
| `getEntityById(id: string): Observable<T>` | /entityNames/:id | GET | SIMPLE | Retrieves the averos entity instance of type T having the requested id |
| `getEntitiesByIds(ids: string[]): Observable<T[]>` | /entityNames | GET | SIMPLE | Retrieves a list of averos entities instances of type T according to their list of ids |
| `getEntitiesByCriteria(criteria: SearchInputCriteria): Observable<T[]>` | /entityNames | GET | SIMPLE | Retrieves a list of averos entities instances of type T that meets the given criteria. <br/> Note that **criteria** is of type **SearchInputCriteria** which is an averos type defining the criteria in a search use case. <br> Search use cases are composite averos use cases that are build as a composition of atomic averos components. Each component accepts a search input entry of type string, and outputs an averos criteria type. <br/> **SearchInputCriteria** is thus the aggregation of all averos criteria resulted in the aggregation of averos atomic components. <br/> More on this topic will be available soon in the ongoing averos documentation. |
| `deleteRelationCollection(parentId: any, relationName: string, cids: {id: string}[]): Observable<T>` | Not fixed. <br/> Depends on the custom logic | Not fixed. <br/> Depends on the custom logic | COMPOSITE | Deletes one or several composite entity child that belongs to a one to many relationship. <br/> Returns the parent entity (relashionship owner) |
| `addRelationCollection(parentId: string, relationName: string, cids: {id: string}[]): Observable<T>` | Not fixed. <br/> Depends on the custom logic | Not fixed. <br/> Depends on the custom logic | COMPOSITE | Adds one or several composite averos entity child(s) that are/is part of a one to many relationship. <br/> Returns the parent entity (relashionship owner) |

