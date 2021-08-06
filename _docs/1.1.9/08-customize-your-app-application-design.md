---
title: "Customize your application"
permalink: /averos/docs/customize-your-app-application-design/
excerpt: "Customize your application - Application Design"
toc: true
---

### **II. My Application's Design**


For the purpose of designing our todo task tracking application, we have identified the following components:
  - two main entities, **ToDoArea** and **ToDoTask**
  - **four main use cases** for each entity along with a specific use case that involve both **ToDoArea** and **ToDoTask** and which is dealing with update entity relationships:
    - **(create/delete/search/update) ToDoArea**
    - **(create/delete/search/update) ToDoTask**
    - **(assign/unassign)** **ToDoTask**(s) from a given **ToDoArea**

<br>

#### **II.1- My Application Class Diagram**


All the identified components could be described by the following class diagram: 


<figure align="center">
	<a href="{{ site.baseurl }}/assets/arch/tutorial/to-do-uml-diagram.png">
    <img src="{{ site.baseurl }}/assets/arch/tutorial/to-do-uml-diagram.png" alt="ToDo Tracking application UML Diagram">
      <figcaption>MyApplication UML Diagram</figcaption>
  </a>
</figure>


#### **II.2- My Application's Use Cases Diagrams**

<br/>

<figure align="center">
	<a href="{{ site.baseurl }}/assets/arch/tutorial/to-do-area- use-case-diagram.png">
    <img src="{{ site.baseurl }}/assets/arch/tutorial/to-do-area- use-case-diagram.png" alt="ToDoArea Use Case Diagram">
      <figcaption>ToDoArea Use Case Diagram</figcaption>
  </a>
</figure>

<br/>


<figure align="center">
	<a href="{{ site.baseurl }}/assets/arch/tutorial/to-do-task-use-case-diagram.png">
    <img src="{{ site.baseurl }}/assets/arch/tutorial/to-do-task-use-case-diagram.png" alt="ToDoTask Use Case Diagram">
      <figcaption>ToDoTask Use Case Diagram</figcaption>
  </a>
</figure>
