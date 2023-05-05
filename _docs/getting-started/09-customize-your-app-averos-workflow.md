---
title: "Customize your application"
permalink: /averos/getting-started/customize-your-app-averos-workflow/
excerpt: "Customize your application - Leveraging Averos Workflow"
toc: true
---

### **III- Leveraging Averos Code Generation Workflow**

We have so far defined the application business requirement as well as the target application design.
Now it is high time we implement all of these aspects and create our application within only seconds! <br>
But how can we achieve such a feat ? <br> 
Well, it turns out that one of the averos generic workflow will actually enable the creation of almost all the use cases in a jiffy.

The averos command dedicated to this type of use case is :

```bash
ng g @wiforge/averos:advanced-crud
```

Running this command will result in the creation of a bunch of components that will interact with each other seamlessly in order to fullfill almost all of the application business requirements listed above including common controls and notification messages for a better user experience.

But before diving deep into use cases we need to create our managed entities beforehand; those entities that we defined earlier in the class diagram.

### **1- Generate the Business Entities**

So far we have designed two business entities with a set of members or fields of different types as described in the the class diagram below:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/arch/tutorial/to-do-uml-diagram.png">
    <img src="{{ site.baseurl }}/assets/arch/tutorial/to-do-uml-diagram.png" alt="ToDo Tracking application UML Diagram">
      <figcaption>MyApplication UML Diagram</figcaption>
  </a>
</figure>

There are Two entities, `ToDoArea` and `ToDoTask`, along with two related services, `ToDoAreaService` and `ToDoTaskSerice`.
Creating entities in `averos` possible using the `averos workflow` command `averos-entity` which will result in the creation of the target entity along with it's service.
The full command line will look like this:

```bash
  ng g @wiforge/averos:averos-entity --name=ToDoArea
```

This will result in the creation of an entity called `ToDoArea` and a service called `ToDoAreaService`.

The entity service name could also be customized through the parameter `--sname` as described below:

```bash
  ng g @wiforge/averos:averos-entity --name=ToDoArea --sname=AreaService
```

This will result in the creation of an entity called `ToDoArea` and a service called `ToDoAreaService`.

>🚩 **Note** that `averos framework`, when calling `averos-entity` will create by default the following entity members:
   - **id**: annotated by the averos @ID() decorator in order to tell the framework that it should handle this field as an identifier
   - **name**: a string member describing the name of the entity
   - **description**: a string member related to the entity description
   - **createdBy**: of type User (**averos User type** by default) related to the user who created the entity
   - **updatedBy**: of type User (**averos User type** by default) related to the user who updated the entity
   - **createdAt**: of type `date` related to the entity creation date
   - **updatedAt**: of type `date` related to the entity update date
{: .notice--info}

>`Averos` will also create the related **entity service** having the following default api URL `/api/entityNames`.
   Therefore, the `ToDoArea` service api url will be `/api/todoareas`. 
{: .notice--info}

After generating our entities we will need to create our `CRUD` use cases described in the use case diagram we made earlier.
`Averos framework` provide two main workflow for a full `CRUD` support. These workflows are:
- `create-entity-uc`: which will result in the creation of a `create entity` use case
- `search-entity-uc`: which will result in the creation of `search entity`, `edit entity`, `view entity` and `delete entity` use cases.

>🚩 Please note that since `crud` operation are seen as the basic use cases of any application, and seeing as creating such use cases will result in a set of repetitive actions that are achieved on every managed entity, `averos framework` has made a workflow, called `advanced-crud`, available for such use cases. 
{: .notice--warning}

### **2- Generate your CRUD Use Cases**

`advanced-crud` is the averos workflow that is dedicated to creating fully blown `crud` use cases in oneshot. It will create the entity along with its default members and sevice. Then it will proceed by creating and configuring the related crud use cases.

Let's go ahead and execute this command in order to initiate `crud` use cases for both `ToDoArea` and `ToDoTask`:

```bash
ng g @wiforge/averos:advanced-crud --ename=ToDoArea

ng g @wiforge/averos:advanced-crud --ename=ToDoTask
```

>🚩 Note that **advanced-crud** workflow will generate all specific CRUD component use cases based on the entity name defined in the command parameter `--ename`.
Refer to the [**detailed averos workflow commands**]({{ "/averos/documentation/reference-detailed-averos-worflow-commands/" | relative_url }} "detailed averos workflow commands") section for further details.
{: .notice--info}


As a brief description of the actions performed by this command; averos will create for each requested entity : <br/>
  - **an entity class** type having five extendable default members: 
    - **id**: annotated by the averos @ID() decorator in order to tell the framework that it should handle this field as an identifier
    - **name**: a string member describing the name of the entity
    - **description**: a string member related to the entity description
    - **createdBy**: of type User (**averos User type** by default) related to the user who created the entity
    - **updatedBy**: of type User (**averos User type** by default) related to the user who updated the entity
    - **createdAt**: of type `date` related to the entity creation date
    - **updatedAt**: of type `date` related to the entity update date	

>🚩 These class members are generated by the averos crud creation  workflow and could obviously be updated by other members, modified or deleted at you convenience. Please refer to [**averos entity**]({{ "/averos/documentation/references-and-conventions/reference-averos-entity/" | relative_url }} "Averos Entity") section for further details.
{: .notice--warning}

 
  - **An entity service** having the default api URL : 
    `http://localhost:3333/api/entityNames` 
    
    `http://localhost:3333/api/(todoareas | todotasks)` in our case). 

    Please refer to the [**averos service**]({{ "/averos/documentation/references-and-conventions/reference-averos-service/" | relative_url }} "Averos Service") section for further details.
    {: .notice--info}
  
  - **a default menu** showcasing the different autogenerated use cases
  
>🚩 Notice that averos have created as many menu entries as generated use cases; and grouped them by entity.
Those menu links could be easely modified through a simple configuration. Some of the menu configuration items are: <br/>
>-  **icon**: defines the menu icon to display in the menu link/group/submenugroup. Menu icons are specified based on their names as they are defined in the angular material icon specifications 
>- **route**: defines the target use case route
>- **disabled**: wether the menu item should be disabled or not
>- **children**: a list of sub menu items
>More on averos specifications is available in the [detailed averos documentation]({{ "/averos/documentation/generic-usecases/averos-crud/" | relative_url}}).
{: .notice--danger}

At the end of the **advanced-crud** workflow execution almost all use cases mentioned above will be available and ready for use without any additional line of code.


**🎉🎉🎉 Congratulations! Averos has spared you months of coding and environment useless configurations allowing you to focus on what really matters the most! You are ready to grow your business 🎉🎉🎉**
{: .notice--info}
