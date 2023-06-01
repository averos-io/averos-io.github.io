---
title: "Create Use Cases"
permalink: /averos/getting-started-c-developer/create-use-cases/
excerpt: "Create Use Cases"
toc: true
toc_sticky: true
---
<br/>

In the previous sections we initiated a new project as a placeholder for our application **`ToDoApplication`** using **Averos Designer**.<br/>
Then we created and configured our **business entities** along with their managing service.<br/>

In this section we are going to create the **use cases** which we identified in the [application design & specifications section]({{"averos/getting-started-c-developer/application-design-specifications/" | relative_url}} "Application Design & Specifications").<br/>

Remember earlier in the design phase we have identified a couple of use cases according to our business requirements.<br/>
These **use cases** have been grouped into **two** main **categories** (remember we draw two use case diagram earlier) depending on the entities they are related to as follows:
- Use cases related to **`ToDoArea`**
- Use cases related to **`ToDoTask`**

Let's start creating the use cases related to the entity **`ToDoArea`**. <br/>

## I. **`ToDoArea` Use Cases**

Remember, in the design phase, we have identified the following actions a user can execute while interacting with **`ToDoArea`** entity:
>1. a user can **`View`**/**`delete`**/**`add`**/**`update`** a **`ToDoArea`** instance
>2. a user can **`Assign`**/**`Unassign`** a **`ToDoTask`** to a **`ToDoArea`**   
>3. a user can **`Search`** for **`ToDoArea`** instances
>4. All these actions are performed while the user is signed into the application (user is in the private context).
>5. some actions includes a search for **`ToDoArea`** (**`View`**, **`add`** and **`update`** a **`ToDoArea`** are possible after executing a search action)

Now let's get few steps back and recall what are the **use cases** available to us that **averos framework** provides out of the box, shall we ?<br/>

**Averos Framework** provides three types of generic use cases, namely `SEARCH`, `CREATE`, and `CRUD` use cases.<br/>

`CREATE` type is a generic use case that provides **entity creation** capabilities along with customizable field validations and advanced field relationships logics and domain controllers.<br/>
It creates **one** default menu link in the application's user private space menu.<br/>

`SEARCH` type, on the other hand, is a generic use case that mainly provides **entity search** capabilities using **criteria** based on the entity members values.<br/> It provides built-in components for **entity view**, **entity deletion**, **entity edition** as well as **entity creation** all in the same component.<br/>
It creates **one** default menu link in the application's user private space menu.<br/>

As for `CRUD` type it is considered as the combination of the types `CREATE` and `SEARCH`.<br/>
It creates **two** default menu links in the application's user private space menu (one for **create** and one other for **search** use cases).<br/>

>🔖 Further informations about **Averos Generic Use Cases** could be found in the [**Averos official documentation**]({{"/averos/documentation/" | relative_url}} "Averos Documentation").
{: .notice--info}
 

So, now the question is: can we leverage **Averos Use cases** and create the ones we identified for our **`ToDoApplication`** ?<br/>

Well, of course we can!<br/>

Here is how!<br/>

Lets browse the use cases one by one and see what **Averos Use Case** is most suitable for it.<br/>

>**1.** a user can **`View`**/**`delete`**/**`add`**/**`update`** a **`ToDoArea`** instance

☑️ An **Averos Use Case** of type `SEARCH` could provide all the capabilities described in this use case in the same page; whereas another one of type `CREATE` should provide the **entity creation** capability in a dedicated page.<br/>

🙋‍♂️We could have used only one use case of `SEARCH` type for all the requirements above, but we wanted you to try the type `CREATE` as well.
{: .notice--success}

>**2.** a user can **`Assign`**/**`Unassign`** a **`ToDoTask`** to a **`ToDoArea`** 

This use case could be seen as an update in the relationship between a **`ToDoArea`** object and a **`ToDoTask`** object.<br/>
However, since we already know that this relationship is part of **`ToDoArea`** attributes (remember the design phase?), this use case turns out to be a simple **update** on a **`ToDoArea`** object.<br/>

☑️ The same **Averos Use Case** of type `SEARCH` which we assigned to the first requirement, already meets the requirements of this one.<br/>

>**3.** a user can **`Search`** for **`ToDoArea`** instances<br/>

☑️ The **Averos Use Case** of type `SEARCH` exactly meets any `Search` requirements so again we will use this type for this use case too.<br/>

>**4.** All these actions are performed while the user is signed into the application (user is in the private context).

☑️ This requirement is already met since **averos framework** provides multi-users capabilities which implies a private space for each user.

>**5.** some actions include a search for **`ToDoArea`** (**`View`**, **`add`** and **`update`** a **`ToDoArea`** are possible after executing a search action).

☑️ This means that actions performed on a single entity such as `view`, `edit` and `delete`, could be preceded by a search action.

☑️ The **Averos Use Case** of type `SEARCH` meets exactly any `Search` requirements, so again, we will use this type for this use case too.<br/>

<br/>

🙋‍♂️ So all in all, we need to create only **two averos use cases** of type **`SEARCH`** and **`CREATE`** in order to meets **`ToDoArea`** entity requirements.<br/>

Ok then, let's get back to **Averos Designer** and start creating these two use cases.<br/>

First we are going to create a new use case of type `SEARCH` for **`ToDoArea`** entity.<br/>

From **Averos Components** panel, expand `Use Cases & Pages` list and drag and drop a `Use Case` component into the canvas.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/31-todoarea-search-usecase-new.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/31-todoarea-search-usecase-new.png" alt="New Use Case">
        <figcaption>New Use Case</figcaption>
    </a>
  </figure>
</div>
</div>

Select this new use case and update its properties as follows:
>-  **Use Case Name**: **`SearchToDoArea`**
>-  **Use Case Type**: Choose **`SEARCH`**
>-  **Use Case Related Entity Name**: Choose **`ToDoArea`**

Click on `apply`.<br/>


<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/32-tsearchtodoarea-uc.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/32-tsearchtodoarea-uc.png" alt="SearchToDoArea Use Case">
        <figcaption>SearchToDoArea Use Case</figcaption>
    </a>
  </figure>
</div>
</div>


Now, let's create another use case of type `CREATE` for **`ToDoArea`** entity.<br/>

From **Averos Components** panel, expand `Use Cases & Pages` list and drag and drop a new `Use Case` component into the canvas, then update its properties as follows:<br/>
>-  **Use Case Name**: **`CreateToDoArea`**
>-  **Use Case Type**: Choose **`CREATE`**
>-  **Use Case Related Entity Name**: Choose **`ToDoArea`**

Click on `apply`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/33-createtodoarea-uc.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/33-createtodoarea-uc.png" alt="SearchToDoArea Use Case">
        <figcaption>CreateToDoArea Use Case</figcaption>
    </a>
  </figure>
</div>
</div>

That's it !<br/>
We have implemented all the use cases related to the entity `ToDoArea`. 🚀<br/>

Let's create the use cases related to **`ToDoTask`** entity. <br/>

## II. **`ToDoTask` Use Cases**

As we did with **`ToDoArea`**, following the same logic we could find that both `SEARCH` and `CREATE` use cases could meet all **`ToDoTask`** entity requirements.<br/>

However, for the sake of diversity, we are going to use the type `CRUD` which is regarded as the combination of the two previous use cases.<br/>

Go ahead and add a new `Use Case` component to the canvas, then update its properties as follows:<br/>
>-  **Use Case Name**: **`ToDoTaskCRUD`**
>-  **Use Case Type**: Choose **`CRUD`**
>-  **Use Case Related Entity Name**: Choose **`ToDoTask`**

Click on `apply`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/34-todotaskcrud-uc.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/34-todotaskcrud-uc.png" alt="ToDoTask CRUD Use Case">
        <figcaption>ToDoTask CRUD Use Case</figcaption>
    </a>
  </figure>
</div>
</div>

All is good! 🚀<br/>

All our use cases defined in the specification phase were created.<br/>

Next, we will create a `blank page` (empty page) and configure its menu link as expected by our [**additional requirements**]({{"/averos/getting-started-c-developer/application-requirements/#iii--additional-requirements" | relative_url}} "additional requirements").<br/>

**See you in the next section!**
