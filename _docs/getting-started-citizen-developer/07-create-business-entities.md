---
title: "Create Business Entities"
permalink: /averos/getting-started-c-developer/create-business-entities/
excerpt: "Create Business Entities"
toc: true
---
<br/>

Remember earlier in the design phase we have identified an entity named **`ToDoTask`** whose attributes are as follows:
  >*  `id`  : defines the entity's identifier. Is of type `number`
  >*  `name`: defines the entity's name. Is of type text
  >*  `description`: defines the entity's description. Is of type `text`
  >*  `createdBy`  : defines who created the entity. Is of type `User`
  >*  `updatedBy`  : defines who updated the entity. Is of type `User`
  >*  `createdAt`  : defines when the entity was created. Is of type `date`
  >*  `updatedAt`  : defines when the entity was updated. Is of type `date`
  >*  `status`     : defines the **status** of the task. It could be one of these fixed values: **`Active`**, **`Closed`** or **`New`** (A task can be **new**, **active** or **closed**. We could have thought about other statuses; but we wanted to keep it as much simple as possible for this tutorial). Since this attribute has a set of predefined values it is of type `enumeration`

We have also identifier a related managing service for the entity **`ToDoTask`** named **`ToDoTaskService`**.<br/>

Likewise, we have identified another entity named **`ToDoArea`** that has the following attributes:<br/>
  >*  `id`  : defines the entity's identifier. Is of type `number`
  >*  `name`: defines the entity's name. Is of type `text`
  >*  `description`: defines the entity's description. Is of type `text`
  >*  `createdBy`  : defines who created the entity. Is of type `User`
  >*  `updatedBy`  : defines who updated the entity. Is of type `User`
  >*  `createdAt`  : defines when the entity was created. Is of type `date`
  >*  `updatedAt`  : defines when the entity was updated. Is of type `date`
  >*  a relationship with **`ToDoTask`** entity: depicted by the fact that **zero or one** `(0..1)` **`ToDoArea`** contains **zero or many** `(0..*)` **`ToDoTask`**

  Finally, as done with the entity **`ToDoTask`**, the entity **`ToDoArea`** is managed by a service that we named **`ToDoAreaService`**.<br/>
  
Well, in this section we are going to create these entities along with their managing services using **`Averos Designer`**.<br/>

 >**🔖 Note:** It is worth mentioning that **`Averos Framework`** generates a set of default attributes under the hood for any generated entity. These attributes are:
  >*  `id` 
  >*  `name`
  >*  `description`
  >*  `createdBy`  
  >*  `updatedBy` 
  >*  `createdAt`  
  >*  `updatedAt` 
>
>As a result, you will not be invited to create these attributes when you will start creating these entities using **`Averos Designer`**, since they will be created for you by the framework.
 {: .notice--info}

>🔖 Also, as we have seen earlier, **`ToDoArea`** is related to **`ToDoTask`**.<br/>
And since this relationship is part of **`ToDoArea`** attributes (**`ToDoArea`** is composed of `zero or many` **`ToDoTask`**), we will - for the sake of simplicity - first create **`ToDoTask`** then create **`ToDoArea`**.
 {: .notice--success}

 🙋‍♂️**Please feel free to get back to your design and business requirements from time to time so that you understand what you are doing and why you are doing it this way.**
 {: .notice--warning}

<br/>
🔥 Now, let's create our entities along with their services 🔥

## **I. Create `ToDoTask` Entity**   

### **Step 1 - Drag&Drop an <<AverosEntity>>** 
-------

From **Averos Components** (left side panel), click on `Entities & Services`, drag an `Entity` component and drop it into the canvas.

Here is what you should have:
<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/10-new-entity.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/10-new-entity.png" alt="Create a New Entity">
        <figcaption>Create a New Entity</figcaption>
    </a>
  </figure>
</div>
</div>

>🙋‍♂️ The displayed entity's **name** (`MyEntity193`) is a random name that has been generated for you.<br/>
You will change this property among other in the next step.
{: .notice--success}

### **Step 2 - Update the entity's properties** 
-------

Select the previous entity from the canvas to open the **Properties Panel** as described below:<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/11-new-entity-properties.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/11-new-entity-properties.png" alt="Entity Properties">
        <figcaption>Entity Properties</figcaption>
    </a>
  </figure>
</div>
</div>

Go to **Entity Properties** and update the entity name with the value **`ToDoTask`** then click **Apply**.<br/>

> Do not forget to apply your changes, by clicking on the button `Apply`, before leaving the **Properties Panel** so that changes take place.
{: .notice--warning}


<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/11-new-entity-properties.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/11-new-entity-properties.png" alt="Entity Properties">
        <figcaption>Entity Properties</figcaption>
    </a>
  </figure>
</div>

<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/12-todotask-entity-properties-update.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/12-todotask-entity-properties-update.png" alt="Update entity name - ToDoTask">
        <figcaption>Update entity name - ToDoTask</figcaption>
    </a>
  </figure>
</div>

<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/13-todotask-entity-properties-apply-update.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/13-todotask-entity-properties-apply-update.png" alt="Apply Updates to entity name - ToDoTask">
        <figcaption>Apply Updates to entity name - ToDoTask</figcaption>
    </a>
  </figure>
</div>
</div>

### **Step 3 - Create the entity member `status`** 
-------

As mentioned earlier, for any generated entity, **averos** creates a default set of attributes.<br/>
As a result we will exclude those attributes from our design.<br/>
This leaves us with one attribute to create named `status` of type `enumeration`.<br/>

>🙋‍♂️ you might want to have a look at your business description so that you recall how your entities looks like.
{: .notice--info}

Go ahead and select your entity **ToDoTask**.<br/>
On the right panel, click on the tab `entity members` in the **`Entities Properties`** panel to display the list of entity members.<br/>
Click on the `table actions` button located on the table header actions then choose `add`.<br/>

Create a new **`simple entity member`** with the following values:
>* **Simple Member Name** : `status`
>* **Member Type** : `ENUMERATION`
>* **Member Domain** : `Active,Closed,New`

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/14-todotask-entity-properties.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/14-todotask-entity-properties.png" alt="Entity Properties">
        <figcaption>Entity Properties</figcaption>
    </a>
  </figure>
</div>

<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/15-todotask-entity-members-action-add.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/15-todotask-entity-members-action-add.png" alt="Entity Members Tab">
        <figcaption>Entity Members Tab</figcaption>
    </a>
  </figure>
</div>

<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/16-todotask-add-entity-members.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/16-todotask-add-entity-members.png" alt="Add New Member">
        <figcaption>Add New Member</figcaption>
    </a>
  </figure>
</div>
</div>

Click on `save` button to save your new member, then close the **`Simple Member Window`**.

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/17-todotask-save-entity-member.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/17-todotask-save-entity-member.png" alt="Save Entity Member">
        <figcaption>Save Entity Member</figcaption>
    </a>
  </figure>
</div>
</div>


Next, we are going to create **`ToDoTask`** managing service named **`ToDoTaskService`**.<br/>

#### **Step 4 - Create the entity's managing service named `ToDoTaskService`**

Go ahead and drag & drop a `service` component from the right side panel to the canvas. <br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/18-create-new-service.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/18-create-new-service.png" alt="Create New Service">
        <figcaption>Create New Service</figcaption>
    </a>
  </figure>
</div>
</div>

Select your service and change its name to `ToDoTaskService` from the **Service Properties** panel located in the right side.<br/>
Do not forget to **Apply** your changes before leaving the configuration panel.

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/19-update-service-name.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/19-update-service-name.png" alt="Update Service Name">
        <figcaption>Update Service Name</figcaption>
    </a>
  </figure>
</div>
</div>

Now, since your entity **`ToDoTask`** is managed by the service **`ToDoTaskService`** you will need to link them to each other.<br/>

So go ahead and select the entity **`ToDoTask`** then open the listbox `Service Name` located in the `Entity` tab properties.<br/>
Choose **`ToDoTaskService`** then click on `apply`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/20-link-service-to-entity.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/20-link-service-to-entity.png" alt="Link Service To Entity">
        <figcaption>Link Service To Entity</figcaption>
    </a>
  </figure>
</div>
</div>


**Averos** will automatically link the service to its entity.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/21-service-linked-to-entity.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/21-service-linked-to-entity.png" alt="Service Linked To Entity">
        <figcaption>Service Linked To Entity</figcaption>
    </a>
  </figure>
</div>
</div>

## **II. Create `ToDoArea` Entity**   

### **Step 1: Create `ToDoArea` and `ToDoAreaService` then link them**
-------

Repeat the same **Steps 1, 2 & 4** exactly as you did earlier for **`ToDoTask`** entity.<br/>
Use the **name** `ToDoArea` for your new entity along with the managing service name **`ToDoAreaService`**.<br/>

🙋‍♂️ Note that **`ToDoArea`** entity does not have any additional **simple members** apart from the default ones.<br/>
Nevertheless, **`ToDoArea`** has a relationship with **`ToDoTask`** that is depicted by a **composite member**.<br/>
Since this would be the first time we came across such type of member, we will leave this **Step 3** to the end, after finishing **Step 1, 2 & 4**.
{: .notice--info} 

🙋‍♂️ Do not forget to link the managing service **`ToDoAreaService`** to its managed entity **`ToDoArea`**.<br/>

You should end up with the following configuration:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/22-todoarea-todoareaservice-created.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/22-todoarea-todoareaservice-created.png" alt="ToDoArea & ToDoAreaService Created and linked">
        <figcaption>ToDoArea & ToDoAreaService Created and linked</figcaption>
    </a>
  </figure>
</div>
</div>

### **Step 2: Create the relationship with `ToDoTask`** 
-------

Remember that **`ToDoArea`** has a relationship with **`ToDoTask`** depicted by the fact that **zero or one** `(0..1)` **`ToDoArea`** could contain **zero or many** `(0..*)` **`ToDoTask`**.<br/>
In other words, **`ToDoArea`** is composed by zero or many **`ToDoTask`**.<br/>
This means that a **`ToDoArea`** instance can be empty, or can contain one or many **`ToDoTask`** instances.<br/>

Let's go ahead and create this relationship.<br/>

From the **Averos Components** panel, expand `Connectors` list and drag & drop a `connector` into the canvas as described in the picture below.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/23-add-connector.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/23-add-connector.png" alt="Add a new Connector">
        <figcaption>Add a new Connector</figcaption>
    </a>
  </figure>
</div>
</div>

Your `connector` has the shape of an arrow with four nodes and two connection sides, namely `sourceEntity` and `targetEntity`.<br/>

You will use this **connector** to link **`ToDoArea`** as the `sourceEntity` to **`ToDoTask`** as the `targetEntity`.<br/>

Go ahead and drag the first node located in the `sourceEntity` side and drop it on **`ToDoArea`** entity.<br/>

Now, drag the last node located in the `targetEntity` side and drop it on **`ToDoTask`** entity.<br/>

Your diagram whould look like this one in the picture below:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/24-connect-todoarea-to-todotask.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/24-connect-todoarea-to-todotask.png" alt="Connect ToDoArea to ToDoTask">
        <figcaption>Connect ToDoArea to ToDoTask</figcaption>
    </a>
  </figure>
</div>
</div>

Now, try to drag each entity apart and make sure that the connected arrow will follow the dragged entity.<br/>
Thus, you will make sure that the connection has occured between the connector and each entity. Otherwise you should repeat the connection process described earlier untill your entities are connected to the arrow.<br/>

Once connected, arrange the components so that the diagram looks like the one in the picture below.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/25-rearranged-diagram.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/25-rearranged-diagram.png" alt="Re-arranged Diagram">
        <figcaption>Re-arranged Diagram</figcaption>
    </a>
  </figure>
</div>
</div>

Dont worry if you did not succed to arrange the component like suggested.<br/>
However you need to make sure that:
- the entities are each linked to the connector (try to move each entity and see whether the connecting arrow follows it or not)
- The services are linked to their managed entities (check the property `Service Name` in the entity's properties, it should match the managing service name) 

>💡 **Protip**: In order to move the arrow, use the **four nodes** that appear when you **select** the connector.<br/>
Initially the connector could be moved using four nodes, but once connected to an entity, you will not be able to move the connector from the connecting nodes unless you release the connection.<br/>
{: .notice--info}

>💡 **Protip**: Notice that once connected to an entity, a connector will follow that entity wherever it is dragged to.<br/>
Also, notice that the arrow changes its connection side with respect to the connected entity while you are dragging this entity.<br/> 
{: .notice--info}


We still have not configured the relationship yet, so let's do it.<br/>

Click on the connector to display its properties in the right panel as described in the picture below.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/26-connector-properties.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/26-connector-properties.png" alt="Connector's Properties">
        <figcaption>Connector's Properties</figcaption>
    </a>
  </figure>
</div>
</div>

Update the connector properties with the following values as follows:
>- **Source Description**: `toDoTasks` (the path from `ToDoArea` to `ToDoTask` -an Area contains a **colection** of Tasks)
- **Target Description**: `toDoArea` (the path from `ToDoTask` to `ToDoArea` - A task belongs to **one** Area)
- **Source Cardinality**: `0..1` (A task belongs to **zero or one** Area)
- **Target Cardinality**: `*` (An Area contain zero or many Tasks)

Do not forget to click on `apply` after modifying the connector properties.<br/>

>🙋‍♂️ Note that the disabled property **Relationship Type** was automatically set according to the value of both properties **Source Cardinality** and **Target Cardinality**.<br/>
Try to change these two properties and look how **Relationship Type** changes accordingly.<br/>
{: .notice--info}


Your connector properties should look like the one below:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/27-connector-properties-updated.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/27-connector-properties-updated.png" alt="Connector's Properties - Updated">
        <figcaption>Connector's Properties - Updated</figcaption>
    </a>
  </figure>
</div>
</div>

>💡 **Protip**: You might want to `drag` the `canvas` to reach some part of your design.<br/>
Just hold `ctrl` and the `left mouse button` in an empty space on the canvas and move your mouse.
{: .notice--info}


>💡 **Protip**: You might want to `drag` the `canvas` to reach some part of your design.<br/>
Just hold `ctrl` and the `left mouse button` in an empty space on the canvas and move your mouse.
{: .notice--info}

## **III. Save your Project**

At this point you might want to save your project so that you mark your progress.<br/>

**Averos Designer** provides you the possibility to **save** your project by exporting it to a file.<br/>
**Exported projects** could be then **imported** into **Averos Designer**.<br/>

In order to export your project g ahead and validate it using the button displayed below:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/28-validate-project-button.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/28-validate-project-button.png" alt="Validate Project">
        <figcaption>Validate Project</figcaption>
    </a>
  </figure>
</div>
</div>

Once the project validated, a success message will pop up and both `export project` and `generate project` will be available.

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/29-project-validated.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/29-project-validated.png" alt="Validate Project">
        <figcaption>Validate Project</figcaption>
    </a>
  </figure>
</div>
</div>

Now, go ahead and export your project to your local disk.<br/>


<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/30-project-exported.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/30-project-exported.png" alt="Project Exported">
        <figcaption>Project Exported</figcaption>
    </a>
  </figure>
</div>
</div>

If you want to start from where you finished last time, just **import** your project into **Averos Designer**.<br/>

**Congratulations** on making it this far! 🚀<br/>
In the next section, we are going to create our **use cases** as expected by our **business requirements**.<br/>
**See you there!**
{: .notice--info}
