---
title: "Application Requirements"
permalink: /averos/getting-started-c-developer/application-requirements/
excerpt: "Business Requirements"
toc: true
toc_sticky: true
# classes: wide
---
<br/>

## **I- Definitions**

In this tutorial we will create a basic web application named **`ToDoApplication`** that stores, manages and tracks `To do Tasks` per `To do Area` or `domain`. <br/>

A `To Do Task` defines a simple task that should be achieved. An example of `To Do Task` could be `Change light bulbs`. <br/>
A `To Do Task` can belong to one or more `To Do Area`. <br/> This means that `To Do Area` can contain one or more `To Do Area`.<br/>
A `To Do Area` is a specific domain or area of interest to which a `To Do Task` belongs. For example, our previous task `Change light bulbs` could belong to `Home` domain, to `Chores` domain or to both. <br/>
Furthermore, `ToDoApplication` users should be able to store, manage and track `To Do Areas` and `To Do Tasks`. <br/>
On the other hand, `ToDoApplication` should support multiple users alongs with privacy. Thus, the application should not allow any unauthorized access. <br/>
Each user has it's own private logged space where he can access only his `To Do Tasks` and `To Do Areas`. <br/>

ℹ️Note that as we describe our application, business entities among other aspects started to appear.<br/>
For example, in light of the preceding, it is safe to assume that we could now identify two business entities, `To Do Task` and `To Do Area`.<br/>
Also, we could identify a relationship between `To Do Area` and `To Do Task` since the latter can contain the former.<br/>
Finally, we gave the following name to our application: `ToDoApplication`.<br/><br/>
All of these informations will help us designing our application. 
{: .notice--info}

## **II- Business Requirements**

A `ToDoApplication` user should be able to perform a couple of actions so that he can **store**, **manage** and **track** `ToDo Tasks and Areas`. <br/>
Therefore, the application must allow the user to:

>
  - [x] **Create** `ToDo Area`
  - [x] **Create** `ToDo Task`
  - [x] **Search** `ToDo Areas` based on criteria filter
  - [x] **Search** `ToDo Task` based on criteria filter
  - [x] **Export** `ToDo Areas` to Excel format
  - [x] **Export** `ToDo Tasks` to Excel format
  - [x] **Update/modify** `ToDo Area` 
  - [x] **Update/modify** `ToDo Task` (a user can update an existing task)
  - [x] **Delete** `ToDo Area`
  - [x] **Delete** `ToDo Task`
  - [x] **Assign** `ToDo Tasks` to `ToDo Area` (a user can assign one or several tasks to a specific area of interest)
  - [x] **Unassign** `ToDo Tasks` from `ToDo Area` (a user can unassign one or several tasks from a specific area of interest)
  - [x] **Activate** a `ToDo Task` 
  - [x] **Close** a `ToDo Task`

## **III- Additional Requirements**

Since we are targetting users speaking different languages, our application should support multi-languages.<br/>
For the sake of this tutorial, we are going to include `English`, which is the default language, along with `French` as an additional language.<br/>

💡 `Averos Framework` supports 11 languages, in the same time, out of the box; so you might choose whatever additional language that suits you for this tutorial instead of `French`.<br/>
{: .notice--success}

Also, let's assume that you know few things about `frontend development` and that you want to create your own `page` with your own implementation and design.<br/> 
In this case your generated application should include a `blank page` or `blank page` which has a predefined menu link in the application menus and which will serve as a scaffolding for this specific page.<br/>
We will get back to these additional features once we will start creating our application.<br/>

Now we have have an idea about what kind of application we want to build, and what are the main features that it should provide,let's move forward and start thinking about how our application is designed by delving into its features and specifications details a bit more.<br/>
{: .notice--info}