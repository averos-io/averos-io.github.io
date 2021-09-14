---
title: "Customize your application"
permalink: /averos/documentation/customize-your-app-averos-composite-entity-member-workflow/
excerpt: "Customize your application - composite entity Workflow"
toc: true
---

### **V- Entity Composite Relation Use Cases**

We have been so far able to create most of the use cases defined in our ToDo tracking application requirements listed above. <br/>

One special use case worth nevertheless more attention seeing its complexity since its logic depends on the user requirements and thus could not be unified for all use cases.
This special use case concerns all entities relationships. Either it is a simple association, a composition or an aggregation it is obvious that handling such relationships depends on the final user needs. <br/>

Yet, **averos** defines some guidelines to follow when it comes to such use cases. Please refer to [Averos service apis naming conventions]({{ "/averos/documentation/reference-averos-service#averos-service-apis-naming-conventions/" | relative_url }}  "Averos Service APIs Naming Conventions") section and look at COMPOSITE API Logic Type. These are the conventions when dealing with entities relationships. <br/>

>🚩 Notice that in this example averos has already added a `One To One` composite relationship between your business entities and the averos entity `User`.
The relationship is represented by the two class members `createdBy` and `updatedBy` and could be visible in all view use cases. 
{: .notice--warning}


Besides, our two entities, `ToDoArea` and `ToDoTask` are logically related; given that one of our business requirement says that one should be able to assign one or several `ToDoTask` to one specific `ToDoArea`.

From a navigability perspective, a composite relationship can be either `navigable` or `mute`. When a composite relationship is `navigable` the relationship owner (parent) has knowledge of its composite child(s). <br/>
Averos framework defines relationship navigability within the owner entity view layout. <br/> 

📢 More on this topic will be available soon in the ongoing averos documentation.
{: .notice--info}

In our example, `ToDoArea` has knowledge of its `ToDoTask` child collection in the context of a `One To Many` relationship. <br/>
On the other hand, each `ToDoTask` child has knowledge of its `ToDoArea` parent entity.<br/>
Such a case could be seen as a two-way navigability and requires further configuration steps.

In order to satisfy such requirement we will need to: <br/>
1. Reference a `ToDoTask` collection by adding a new member of type `ToDoTask` collection to the `ToDoArea` parent entity
2. Reference the `ToDoArea` parent entity by adding a new member of type `ToDoArea` to the `ToDoTask` child entity
3. Update both `ToDoArea` and `ToDoTask` view layout in order to display the navigability
4. Implement the `COMPOSITE` service APIs accordingly as described in the [Averos Service APIs Naming Conventions]({{ "/averos/documentation/reference-averos-service#averos-service-apis-naming-conventions/" | relative_url }}  "Averos Service APIs Naming Conventions") section


Handling relationships will need further complex implementations and clear design. Not to mention that one should repeat the integration process for every member describing a relationship that should be handled.
Once again, averos fortunately introduced the `add-composite-member` workflow to achieve all the steps above.


>🚩 Note that `add-composite-member` - *alias* `aem` - workflow will update the project in order to support displaying relationships.
Refer to the [**detailed averos workflow commands**]({{ "/averos/documentation/reference-detailed-averos-worflow-commands/" | relative_url}} "Detailed averos workflow commands")  section for further details. <br/>
{: .notice--warning}

Now we have'been saved, let us go ahead and add our two-way navigeable relationship: <br/>

1. `ToDoArea` has knowledge of its `ToDoTasks`. This is a `OneToMany` relationship.
    `ToDoTask` collection is also updatable from its parent entity, `ToDoArea`. This means that the user can add or remove one or several `ToDoTask` from the `ToDoTask` collection related to a given `ToDoArea` instance. Handling such requirement will result in defining a child's update strategy using the flag `--member-update-strategy`.<br/>
   
   ```bash
   ng g @wiforge/averos:aem --ename=ToDoArea --fname=ToDoTask --fieldRelationType=OneToMany --member-update-strategy=multiple
   ```

2. `ToDoTask` has knowledge of the `ToDoArea` to which it belongs: this is a `ManyToOne` relationship:
   
   ```bash
   ng g @wiforge/averos:aem --ename=ToDoTask --fname=ToDoArea --fieldRelationType=ManyToOne
   ```

>🚩 Note that after running these two commands and deploying your application, you will be able to view the newly added relations. Further user specific business implementation could be achieved in order to customize your entity management workflow. Some of these aspects were described further below.
{: .notice--info}


#### **V.1- Displaying Relationship of type Collection in View, Edit and Create Use Cases**

There are a couple of thing to bear in mind when dealing with composite entity relationship in a context of **Create**, **View** or **Edit** entity.

`edit` and `view` entity use cases uses the mandatory auto-generated api `getEntityById(id: string)` located in the auto-generated averos service related to the entity subject to the action. So if you would like to display a `OneToMany` relationship by showing the collection of child items in a seperate tab then in `create`, `view` or `edit` parent mode your api should return, aside from your parent entity, a collection of child items IDs to display. Those child items ids will be therefore used by the auto-generated entity Child service api `getEntitiesByIds(ids: string[]): Observable<any>` in order to retrieve the related Child collection. 


So, given a parent entity, if you are willing to display child items within a `create`, an `edit` or a `view` entity use case you need to adapt you backend api so that : <br/>
- Within the Parent service, `getEntityById(id: string)` should return aside from the parent entity the list Child ids collection
- Decide which strategy you will follow when updating/creating a One to Many relationships: Update happens in a `single` transaction (one api call: one call to the parent api- delete, create or update- will handle the childs items) or `multiple` transactions (multiple api call: call child's api then parent api). Either way, you should mind these aspects when designing your API logic. Please refer to [averos entity update strategy]({{"/averos/documentation/reference-averos-entity/#a--single-transaction-strategy" | relative_url }} "Averos Entity Update Strategy") to learn more about update strategies that come with averos.


>🚩 Note that relationship update strategy is available in the `add-composite-member` by setting the flag `--member-update-strategy` to either `single` or `multiple`. The related methods implementation will be automatically generated by the workflow.
{: .notice--success}


These aspects should be taken into consideration when designing your backend apis.
{: .notice--danger}


If you are using the [Averos Backend Mock](https://github.com/averos-io/averos-backend-mock "Averos Backend Mock") then you probably want to include some manual updates in order to support **json-server** apis criteria parameters and force retrieving One-To-One and One-To-Many relationships entities using the query key words: `_embed` and `_expand`.
Two updates are thus required:

1- **Update `to-do-task.service`:** 

  - update the method **getEntitiesByCriteria()** in order to support **json-server** apis criteria parameters and force retrieving ToDoArea when getting a ToDoTask by using `_expand` in the http query:
	
**replace**:
		

   ```typescript
      query = criteria.toHttpQuery('REGULAR');
   ``` 

**By**:


   ```typescript
      query = criteria.toHttpQuery('JSON-SERVER');
      query = query==='' ? '_expand=toDoArea' : `${query}&_expand=toDoArea`;
   ```

2- **Update `to-do-area.service`:**

   - update the method **getEntityById()** in order to retrieve all Childs elements (ToDoTasks) when getting a parent entity (ToDoArea), by including the `_embed` key word in the http query.
		

**replace**:

 ```typescript
      return this.httpClient.get<any>(`${this.toDoAreaAPI}/${id}`);
   ```		
		
**By**:
		
   ```typescript
      return this.httpClient.get<any>(`${this.toDoAreaAPI}/${id}?_embed=toDoTasks`);
   ```		
		
   - update the method **getEntitiesByCriteria()** likewise, in order to retrieve all Childs elements (ToDoTasks) when getting a parent entity (ToDoArea), by including the `_embed` key word in the http query.


**replace**:
		
   ```typescript
      query = criteria.toHttpQuery('REGULAR');
      const opts =  {
               params: new HttpParams({fromString: query})
               };
   ```	

**By**:


```typescript
query = criteria.toHttpQuery('JSON-SERVER');
const opts =  
    {
   	params: new HttpParams({fromString: query+'&_embed=toDoTasks'})
	 };
```	


Please refer to the [averos-io-starter](https://github.com/averos-io/averos-io-starter "averos-io starter kit") kit for further implementation details.
{: .notice--info}
