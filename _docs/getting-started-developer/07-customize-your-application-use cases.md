---
title: "Customize your application - Generate Use Cases"
permalink: /averos/getting-started-developer/customize-your-application-use-cases/
excerpt: "Customize your application - Generate Use Cases"
toc: true
---

### **I. Introduction**

You have so far defined the application business requirement as well as the target application design then generated a first version of your `ToDoApplication` with **authentication** and **user management** capabilities. <br/>
Then, you have used `averos workflow commands` to generate your business entities along with their members and their relationships. <br/>
You have also generated the entity managing services and bound them to their `APIs backend services` using `averos configuration workflow command`.<br/>
Finally, you have re-built and redeployed a new version of your application then singned into it.<br/>

Much to your surprise, your new application version is just the same as the first version. <br/> Or is it not ? <br/>

Well, your new application is not exactly the same as your first version, since now you have additional implementations and configurations that occured under the hood.<br/>

However, the user interface is still the same since no use case has been introduced into the application yet. <br/>

Remember those business requirements you defined in the design step ?<br/>
Well it is high time you generate all of them into your application within minutes! <br>

In this chapter we are going to use `averos framework` to implement our use cases and start to experience them through our application.<br/>

### **II- Generate Use Cases**

Let's step back for a moment and recall the use cases we designed earlier.<br/>

<figure align="center">
	<a href="{{ site.baseurl }}/assets/arch/tutorial/to-do-area- use-case-diagram.png">
    <img src="{{ site.baseurl }}/assets/arch/tutorial/to-do-area- use-case-diagram.png" alt="ToDoArea Use Case Diagram">
      <figcaption>ToDoArea Use Case Diagram</figcaption>
  </a>
</figure>


<figure align="center">
	<a href="{{ site.baseurl }}/assets/arch/tutorial/to-do-task-use-case-diagram.png">
    <img src="{{ site.baseurl }}/assets/arch/tutorial/to-do-task-use-case-diagram.png" alt="ToDoTask Use Case Diagram">
      <figcaption>ToDoTask Use Case Diagram</figcaption>
  </a>
</figure>

According to our design, each business entity that is managed by an **averos service**, is subject to one or more use cases. <br/>

Let's check them out one by one.

#### **1. `ToDoArea` Use Cases**

Our `ToDoArea` entity is subject to the following actions:
   >
  - [x] **Create**
  - [x] **Search** (based on criteria filter)
  - [x] **Export** (to Excel format)
  - [x] **Update/Modify**  
  - [x] **Delete**
  - [x] **Assign** `ToDo Tasks` (a user can assign one or several tasks to a specific area of interest)
  - [x] **Unassign** `ToDo Tasks` (a user can unassign one or several tasks from a specific area of interest)

So as a result if you are willing to implement all of these use cases you might want to go ahead and create simple angular components for each one, then add your use case logic by designing your user interfaces, adding input validations and error messages and implementing the appropriate actions along with the right UI workflows. <br/>
Not to mention that you should build use cases that drive good user experience.<br/>
A tough work ahead I must say!<br/>

Fortunately, `averos framework` comes with a set of `workflow commands` that generates use cases that meet all the requirements mentioned above.<br/>

>🚩 Please note that at this point, `averos framework` a set of wokflow commands that meets basic use cases requirements such as **`crud`**. <br/>
Those command are:
> - **`create-entity-uc`**: which will result in the creation of a `create entity` use case
> - **`search-entity-uc`**: which will result in the creation of `search entity`, `edit entity`, `view entity` and `delete entity` use cases.
>  - **`advanced-crud`**   : which combine the first two use cases in one shot.<br/>
>
> These commands will generate the following layouts:
> - **View Layout** : the entity subject to this layout is displayed in **read-only mode**
> - **Edit Layout** : the entity subject to this layout is displayed in **write mod**e
> - **Search Layout**: Is a composite layout, composed of a **Search Input Layout** and a **Search Result Layout** 
>   - **Search Input Layout**: A simple **Edit Layout** with a default **search** action button
>   - **Search Result Layout**: A table that depicts the searched entities with the following use case actions:
>     - **`table header actions`**: `create`, `reload`, `export`, `select all` use case actions
>     - **`table row actions`**: `view`, `edit`, `delete`, `select` use case actions
>     - **`customizable table row actions`**: any specific action. An entity described in a row is subject to this action (ex. `close ticket`, `validate`...).
> 
> Since the vast majority of use cases UI are essentially derived from one of these layouts; `averos use case workflow command` could thus be used to create any type of use case.<br/>
> 
>ℹ️ Please note that `averos use case` comes with default actions. Additional use case actions have not been introduced to the framework so far. So at this point, if you are willing to add more actions to your use cases you will need to manually add them.<br/>
In this case you need to have solid experience working with **typescript** in the context of web development. <br/>
Nevertheless, work is in progress towards adding `Use case actions workflow command`, so expect new updates in this line anytime soon.<br/>
{: .notice--info}

<br/>
Now let's identify the workflow commands that we are going to use:

 >- [x] **Create** &rarr; `create ToDoArea use case` &rarr; `create-entity-uc`
 >- [x] **Search** (based on criteria filter) &rarr; `search ToDoArea use case` &rarr; `search-entity-uc`
 >- [x] **Export** (to Excel format) &rarr; `export ToDoAreas use case` &rarr; `advanced-crud`
 >- [x] **Update/Modify** &rarr; `edit use case` &rarr; `advanced-crud`
 >- [x] **Delete** &rarr; `delete use case` &rarr; `advanced-crud`
 >- [x] **Assign** `ToDo Tasks` (a user can assign one or several tasks to a specific area of interest) &rarr; `add ToDoTask to ToDoAreas use case` &rarr; `edit ToDoArea use case` &rarr; `advanced-crud`
 >- [x] **Unassign** `ToDo Tasks` (a user can unassign one or several tasks from a specific area of interest) &rarr; `remove ToDoTask from ToDoAreas use case` &rarr; `edit ToDoArea use case` / `select ToDoTask use case` &rarr; `advanced-crud`
 >

➡️ This brings us to conclude that `advanced-crud` could meet our `ToDoArea` use case requirements.


Go ahead and execute the following workflow command in order to trigger use case creation workflow and generate your use cases:

>ℹ️ **Please make sure you execute averos workflow commands UNDER YOUR PROJECT HOME FOLDER!**
{: .notice--danger}

```bash
ng g @wiforge/averos:advanced-crud --ename=ToDoArea --defaults 
```
<br/>

The output of the command should look like the following:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/12-todoarea-crud-output.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/12-todoarea-crud-output.png" alt="ToDoArea CRUD Command Output">
      <figcaption>ToDoArea CRUD Command Output</figcaption>
  </a>
</figure>

Now how about getting a glimpse on what have changed in our application after adding `ToDoArea` use cases ?
Sounds great ?<br/>
Then go ahead and re-build/re-deploy your application by following these steps:<br/>
   >  **1.** shutdown the running server `http-server`<br/>
      **2.** build and deploy `ToDoApplication` by running the following command: <br/>  
   >
   ```bash
   ng build ToDoApplication && http-server -p 8081 -c-1 dist/to-do-application
   ```

Once **ToDoApplication** is up and running, go ahead navigate to [http://localhost:8081](http://localhost:8081) <br/>

Here is what your application looks like:<br/>

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/13-todoapplication-after-todoarea-crud-generated.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/13-todoapplication-after-todoarea-crud-generated.png" alt="ToDoApplication - After Generating ToDoArea Use Cases">
      <figcaption>ToDoApplication - After Generating ToDoArea Use Cases</figcaption>
  </a>
</figure>

Did you spot the new menu group item that was added to your application menu ?<br/>

Well, this menu group called `To Do Area`, was actually generated by the previous **averos workflow command** `advanced-crud`. <br/>

Let's go ahead and click on that item to unveil the items it hides.<br/>

Your **ToDoApplication** should look like the following:


<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/14-todoapplication-todoarea-menu.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/14-todoapplication-todoarea-menu.png" alt="ToDoApplication - ToDoArea Use Cases menu">
      <figcaption>ToDoApplication - ToDoArea Use Cases menu</figcaption>
  </a>
</figure>

>ℹ️ `averos use cases workflow commands` automatically generates default menu items for each use case.
By default, these menu items stand as routes to different use case components but can be customized at your will (grouping, translation, layout, visibility, target component...).<br/>
These menu items could be easely modified through a simple configuration. <br/>
Some of the menu configuration items are: <br/>
>-  **icon**: defines the menu icon to display in the menu link/group/submenugroup. Menu icons are specified based on their names as they are defined in the angular material icon specifications 
>- **route**: defines the target use case route
>- **disabled**: wether the menu item should be disabled or not
>- **children**: a list of sub menu items
>More on averos specifications is available in the [detailed averos documentation]({{ "/averos/documentation/generic-usecases/averos-crud/" | relative_url}}).
{: .notice--info}

>🚩 Notice that averos have created as many menu entries as generated use cases; and grouped them by entity.

{: .notice--danger}

Two main menu items could be identified at this point, each implements a number of use cases:
  - **Add To Do Area**
    - &rarr; `create use case`
    - &rarr; `edit use case`
    - &rarr; `assign use case`
    - &rarr; `unassign use case`
    
  - **Search To Do Area**
    - &rarr; `search use case`
    - &rarr; `delete use case`
    - &rarr; `update use case`
    - &rarr; `edit use case`
    - &rarr; `view use case`
    - &rarr; `create use case`
    - &rarr; `export use case`
    - &rarr; `assign use case`
    - &rarr; `unassign use case`
   

Let's try **Add To Do Area** use case!<br/>

Go ahead and click on the menu link then try to create a new Task Domain.
Here is what the UI looks like:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/15-create-todoarea.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/15-create-todoarea.png" alt="Create ToDo Area">
      <figcaption>Create ToDo Area</figcaption>
  </a>
</figure>

Now hit the save button to store your new record into the database.<br/>

Once your record is saved, a successfull message will pop up and the layout will switch to **View Layout**.<br/>
Here is what you might see:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/16-saved-todoarea.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/16-saved-todoarea.png" alt="ToDo Area View Layout">
      <figcaption>ToDo Area - View Layout</figcaption>
  </a>
</figure>

>ℹ️ The fields displayed on either **Edit** or **View** layout could be customizable.<br/>
This means that you can decide what entity members you want to display and what entity members you want to hide in these views through **View Layout Configuration**.<br/>
Also, `averos framework` allows you to configure additional field validations in `Edit` use cases (email validation, password, dependency with other field...) using **Averos Validators**.<br/>
Besides, `averos framework` gives the possibility to link value domains to fields through **Averos Domain Controllers Configuration**.<br/>
For the sake of simplicity, we will not delve into these topics.<br/>
Please refer to the averos documentation for further details about these features.
{: .notice--info}


Note that relationship with `ToDoTask` is depicted by the tab named `To Do Tasks`. There you can `assign`/`unassign` `ToDoTasks` to/from a given `ToDoArea`.<br/>

Go ahead an click on that tab. You should see the following layout:
<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/17-todoarea-todotasks.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/17-todoarea-todotasks.png" alt="ToDo Area - ToDo Tasks">
      <figcaption>ToDo Area - ToDo Tasks</figcaption>
  </a>
</figure>

The list of `ToDoTasks` is empty for the moment, but we will be able to assign tasks very soon.<br/>

Now let's have a look at **Search To Do Area** use case.<br/>

Go ahead and hit the `Search To Do Area` menu link; you shall see the following search filter screen:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/18-search-todoarea.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/18-search-todoarea.png" alt="Search ToDo Area">
      <figcaption>Search ToDo Area</figcaption>
  </a>
</figure>

>ℹ️ Note that `averos framework` has created a default `Search Input Layout` screen for you.</br> 
This screen is composed of search input filters defined by the reserved members `name`, `description` and  `createdAt`.<br/>
This is the default layout, but you might customize your search input screen by adding more criteria members from the list of available entity members using the **View Layout Configuration**. However, for the sake of this tutorial we won't delve further into this advanced features.<br/>
{: .notice--info}

Go ahead and perform a search action. You shall see the following result:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/19-execute-search-todoarea.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/19-execute-search-todoarea.png" alt="Execute Search ToDo Area">
      <figcaption>Execute Search ToDo Area</figcaption>
  </a>
</figure>

Remember we spoke about search result table actions earlier ? <br/>

Well, those are the actions buttons located in the last column of the table.<br/>
The upper left three actions are **`create`**, **`reload`** and **`export`**. <br/>
Those are default table header actions and are applied to the whole search result entities.<br/>

On the other hand, default row actions are located on each row in the last column. Those three actions are **`view`**, **`edit`** and **`delete`** and they are applied to each related entity.<br/>

So as you have already figured it out, in addition to **Averos Create Use Case**, **Averos Search Use Case** allows entity creation as well. This comes handy from user experience perspective.<br/>

Now let's try another thing! shall we ?<br/>

Earlier we spoke about **`export`** use case but we've never seen it.<br/>
From the **Search Result** screen, hit the **`export`** button located at the table header actions area.<br/>
You should see the following screen:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/20-export-todoarea.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/20-export-todoarea.png" alt="Export ToDo Area">
      <figcaption>Export ToDo Area</figcaption>
  </a>
</figure>

Click on `Export To Excel`. All the available search result entities will be exported to an excel file which will be downloaded to your internal disk.<br/>

>ℹ️ Note that the current `averos framework` version provides only excel format.<br/>
Other export formats will be available in future versions.<br/>
{: .notice--info}


At this point you might try all the available use cases just to make sure everything is as expected.<br/>


#### **2. `ToDoTask` Use Cases**

According to the design we made earlier, our `ToDoTask` entity is subject to the following actions:

>
  - [x] **Create**
  - [x] **Search** (based on criteria filter)
  - [x] **Export** (to Excel format)
  - [x] **Update/Modify**  
  - [x] **Delete**
  - [x] **Activate** a `ToDo Task` 
  - [x] **Close** a `ToDo Task`


As we did for `ToDoArea` entity, let's identify the workflow commands that we are going to use for `ToDoTask` use case:

 >- [x] **Create** &rarr; `create ToDoTask use case` &rarr; `create-entity-uc`
 >- [x] **Search** (based on criteria filter) &rarr; `search ToDoArea use case` &rarr; `search-entity-uc`
 >- [x] **Export** (to Excel format) &rarr; `export ToDoTasks use case` &rarr; `search-entity-uc`
 >- [x] **Update/Modify** &rarr; `edit use case` &rarr; `search-entity-uc`
 >- [x] **Delete** &rarr; `delete use case` &rarr; `search-entity-uc`
 >- [x] **Activate** `ToDo Task` (a user might change the status of a ToDoTask to Activated) &rarr; `edit ToDoTask use case` &rarr; `search-entity-uc`
 >- [x] **Close** `ToDo Task` (a user might change the status of a ToDoTask to Closed) &rarr; `edit ToDoTask use case` &rarr; `search-entity-uc`
 >

➡️ This brings us to conclude that both `create-entity-uc` and `search-entity-uc` could meet our `ToDoTask` use cases requirements.

>ℹ️ Note that since we've already seen the workflow command `advanced-crud`, we decided to use `create-entity-uc` and `search-entity-uc` this time since they are also in line with our target use cases requirements.<br/>
Also, you may be wondering, why did we choose `search-entity-uc` as the workflow that will generate `edit`, `view` and `delete` use cases.<br/>
Well, the choice is based on the fact that in order to achieve one of those three actions, the user should select one entity beforehand. <br/>
Choosing an entity comes in the context of a search action. That's why `search-entity-uc` is fine for such cases. 
{: .notice--info}

Go ahead and execute the following command to generate a create ToDoTask use case:

```bash
ng g @wiforge/averos:create-entity-uc --name=CreateToDoTask --ename=ToDoTask --defaults 
```
<br/>
You should see something similar to the following output:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/21-create-todotask-uc-output.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/21-create-todotask-uc-output.png" alt="Create ToDoTask UC Command Output">
      <figcaption>Create ToDoTask UC Command Output</figcaption>
  </a>
</figure>

Now let's finish our use case generation and create the final use cases in the list.<br/>
Go ahead and execute the following command:

```bash
&& ng g @wiforge/averos:search-entity-uc --name=SearchToDoTask --ename=ToDoTask --defaults
```
<br/>
The output of this command should look like the following:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/22-search-todotask-uc-output.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/22-search-todotask-uc-output.png" alt="Search ToDoTask UC Command Output">
      <figcaption>Search ToDoTask UC Command Output</figcaption>
  </a>
</figure>


Let's go ahead and re-build/re-deploy your application by following these steps:<br/>
   >  **1.** shutdown the running server `http-server`<br/>
      **2.** build and deploy `ToDoApplication` by running the following command: <br/>  
   >
   ```bash
   ng build ToDoApplication && http-server -p 8081 -c-1 dist/to-do-application
   ```
<br/>

Once **ToDoApplication** is up and running, go ahead navigate to [http://localhost:8081](http://localhost:8081) <br/>

Here is what your application looks like:<br/>

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/23-todoapplication-after-todotask-uc-generated.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/23-todoapplication-after-todotask-uc-generated.png" alt="ToDoApplication - After Generating ToDoTask Use Cases">
      <figcaption>ToDoApplication - After Generating ToDoTask Use Cases</figcaption>
  </a>
</figure>

As expected two menu items were added to your application menu: **Add ToDo Task** and **Search ToDo Task**.<br/>

Let's checkout the **`ToDoTask`** creation screen. It should look like the following:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/24-create-todotask-uc.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/24-create-todotask-uc.png" alt="Create ToDoTask Use Case">
      <figcaption>Create ToDoTask Use Case</figcaption>
  </a>
</figure>

I left the `name` empty on purpose to show you the field validation behaviour. <br/>

Did you spot the error message ?<br/>

>ℹ️ **Averos Validators Configuration** provides you a way to add your own validations along with customizable error messages.<br/>
Also, it worth mentioning that any error messages could be translated into the current user language if your application supports multi-languages.<br/>
Don't worry we will delve deep into **`averos translation`** in the upcoming chapter.
{: .notice--info}


Remember the field `status` ?<br/>

In the previous chapter, when we generated entity members, we specified the member status as an `enumeration` and defined its value as `Active`, `Closed` and `New`.<br/>
By default `Averos framework` generates a **`combobox`** layout, in the **`Edit Layout`**, for this type of members.

>ℹ️ Regarding members of type `enumeration`, you might wish to display the enumeration values or domain values in the current user language.<br/>
Again, this could be done by configuration using `averos translation`.
{: .notice--info}

Now, we are going to:
- create several new tasks (three are fine)
- create several Task Areas (two are fine)
- assign Tasks to Areas
- activate a task


Let's start by creating three new Task [Task1, Task2, Task3] elements and two Area elements [Area1, Area2].<br/>

>**ℹ️TIP** Use the action `clone` from the `view` entity layout to create a new entity identical to the previous saved one.<br/>
As mentioned earlier, once you create an entity via **`Create entity UC`**, the layout will be switched to **`View Layout`** and the `clone` action will be available to you. 
{: .notice--info}

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/25-three-todotasks.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/25-three-todotasks.png" alt="Three new ToDoTasks">
      <figcaption>Three new ToDoTasks</figcaption>
  </a>
</figure>

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/26-two-todoareass.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/26-two-todoareas.png" alt="two new ToDoAreas">
      <figcaption>two new ToDoAreas</figcaption>
  </a>
</figure>

Now go ahead and assign each Task to its related area as follow:
  - Task1 &rarr; Area1
  - Task2 &rarr; Area2
  - Task3 &rarr; Home

Go to **To Do Area** menu group and hit **Search To Do Area** menu link item then search for `Area1`.

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/27-search-area1.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/27-search-area1.png" alt="Search For Area1">
      <figcaption>Search For Area1</figcaption>
  </a>
</figure>

**Edit** Area1 search result entry then click on the tab named **`To Do Tasks`** which depicts the relationship with `ToDoTask`.<br/>

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/28-edit-area1.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/28-edit-area1.png" alt="Edit Area1">
      <figcaption>Edit Area1</figcaption>
  </a>
</figure>

Click on the **add** botton located in the table header actions as shown above.<br/>
A set of `ToDoTask` entries will be displayed.<br/>

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/29-select-task1.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/29-select-task1.png" alt="Select Task1">
      <figcaption>Select Task1</figcaption>
  </a>
</figure>


Select the appropriate task to be assigned to `Area1` (`Task1`) then hit the **select** button located in the **table row actions** related to the entry named `Task1` as shown in the previous picture,

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/30-area1-task1.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/30-area1-task1.png" alt="Task1 assigned To Area1">
      <figcaption>Task1 assigned To Area1</figcaption>
  </a>
</figure>

>**ℹ️Note** that at this point, `Area1` is still not changed, that's why `save` button remains disabled.<br/>
This means that, if you search again for your entity you wont find `Task1` assigned to it.<br/>
In the current version, `Averos Framework` does not use entity relationships in the evaluation of the state of a given entity.<br/> Only simple members state count.<br/>
That's way, you need to change at least one simple member state so that you will be able to save your entity.<br/>
This behaviour might change in the future framework versions.
{: .notice--info}

Go back to `To Do Area Details` tab, you will want to modify at least one simple member (`description for example`) then save your entity.<br/>

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/31-update-area1.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/31-update-area1.png" alt="Update Area1 description">
      <figcaption>Update Area1 description</figcaption>
  </a>
</figure>

>ℹ️ Notice that once you updated an entity simple member, `save` button changed to visible.<br/>
This is because any change in the state of an entity simple member will trigger a change in the state of the entity. <br/>

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/32-area1-saved.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/32-area1-saved.png" alt="Area1 Updated Successfully">
      <figcaption>Area1 Updated Successfully</figcaption>
  </a>
</figure>


Do the same for the (Task2 and Task3).<br/>


############################ Activate a Task ???????


### **V- Entity Composite Relation Use Cases**

We have been so far able to create most of the use cases defined in our ToDo tracking application requirements listed above. <br/>

One special use case worth nevertheless more attention seeing its complexity since its logic depends on the user requirements and thus could not be unified for all use cases.
This special use case concerns all entities relationships. Either it is a simple association, a composition or an aggregation it is obvious that handling such relationships depends on the final user needs. <br/>

Yet, **averos** defines some guidelines to follow when it comes to such use cases. Please refer to [Averos service apis naming conventions]({{ "/averos/getting-started-developer/reference-averos-service#averos-service-apis-naming-conventions/" | relative_url }}  "Averos Service APIs Naming Conventions") section and look at COMPOSITE API Logic Type. These are the conventions when dealing with entities relationships. <br/>

>🚩 Notice that in this example averos has already added a `One To One` composite relationship between your business entities and the averos entity `User`.
The relationship is represented by the two class members `createdBy` and `updatedBy` and could be visible in all view use cases. 
{: .notice--warning}





#### **V.1- Displaying Relationship of type Collection in View, Edit and Create Use Cases**

There are a couple of thing to bear in mind when dealing with composite entity relationship in a context of **Create**, **View** or **Edit** entity.

`edit` and `view` entity use cases uses the mandatory auto-generated api `getEntityById(id: string)` located in the averos entity managing service. So if you would like to display a `OneToMany` relationship by showing the collection of child items in a seperate tab then your api should return, aside from your parent entity, a collection of child items IDs to display. Those child items ids will be therefore used by the child entity managing service api `getEntitiesByIds(ids: string[]): Observable<any>` in order to retrieve the related Child collection. 


>ℹ️ Given a parent entity, if you are willing to display child items within a `create`, an `edit` or a `view` entity use case you need to adapt you backend api so that : <br/>
- In the Parent entity managing service, `getEntityById(id: string)` should return aside from the parent entity the list Child ids collection
- Decide which strategy you will follow when updating/creating a One to Many relationships: Update happens either in a `single` or in `multiple` transcations.<br/> 
A `single` transaction implies one api call which will handle the child items.<br/> 
`multiple` transactions, on the other side, implies multiple api calls for each child.
You should mind these aspects when designing your API logic. Please refer to [averos entity update strategy]({{"/averos/documentation/references-and-conventions/reference-averos-entity/#a--single-transaction-strategy" | relative_url }} "Averos Entity Update Strategy") to learn more about update strategies that come with averos.
{: .notice--info}


>🚩 Note that **relationship update strategy** is customizable using the averos workflow command `add-composite-member` by setting the flag `--member-update-strategy` to either `single` or `multiple`. The related logic implementation will be automatically generated for you by the workflow command.
{: .notice--success}



**🎉🎉🎉 Congratulations! Averos has spared you months of coding and environment useless configurations allowing you to focus on what really matters the most! You are ready to grow your business 🎉🎉🎉**
{: .notice--info}
