---
title: "Application Requirements"
permalink: /averos/getting-started-c-developer/application-requirements/
excerpt: "Business Requirements"
toc: false
classes: wide
---
<br/>

### **I- Definitions**

In this tutorial we will create a basic web application named **`ToDoApplication`** that stores, manages and tracks `To do Tasks` per `To do Area` or `domain`. <br/>

A `To Do Task` defines a simple task that should be achieved. An example of `To Do Task` could be `Change light bulbs`. <br/>
A `To Do Task` belongs to one or more `To Do Area`. <br/>
A `To Do Area` is a specific domain or area of interest to which a `To Do Task` belong. For example, our previous task `Change light bulbs` could belong to `Home` domain, to `Chores` domain or both. <br/>
Furthermore, `ToDoApplication` users should be able to store, manage and track `To Do Areas` and `To Do Tasks`. <br/>
On the other hand, `ToDoApplication` should support multiple users alongs with privacy. Thus, the application should not allow any unauthorized access. <br/>
Each user has it's own private logged space where he can access only his `To Do Tasks` and `To Do Areas`. <br/>

### **II- Business Requirements**

A `ToDoApplication` user should be able to perform a couple of actions so that he can store, manage and track `ToDo Tasks and Areas`. <br/>
Therefore, the target application must allow a user to:

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

