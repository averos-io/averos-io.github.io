---
title: "Before you start"
permalink: /averos/getting-started-c-developer/before-you-start/
excerpt: "Before you start"
toc: true
toc_sticky: true
---
<br/>

Before, you start let's have a glimpse on the tools which you will use in order to generate your application and, obviously, explain how application generation works in **`averos framework`**.<br/>

With `Averos Framework` application creation is achieved using our **lowcode** service called [**Wibuild©**](https://appbuilder.wiforge.com/ "Wibuild©").<br/> 

[**Wibuild©**](https://appbuilder.wiforge.com/ "Wibuild©") is an application, available for free to the whole public, either on mobile device or desktop computers, which provides a visual designer, namely **`averos designer`**, and an **application management system**.<br/> 

>**🔖 Note** that the designer itself is available anonymously.<br/>
However, submitting a request of a new application generation is available only for authenticated users.<br/> 
So please go ahead and create an account at [**Wibuild©**](https://appbuilder.wiforge.com/ "Wibuild©") in order to be able to generate and download your application.<br/>
 {: .notice--success}

## **I- WiBuild© Application**

[**Wibuild©**](https://appbuilder.wiforge.com/ "Wibuild©") is a free **lowcode** platform available in the cloud for everyone.<br/>
**Wibuild©** is composed of an application designer named **averos designer** and an **application management system**.<br/>

**averos designer** allows to design a full **averos application** using an intuitive UML-like language model.<br/>
You'll see more on **Averos Designer** later on this tutorial.<br/>

The **application management system**, on the other hand, allows to create application generation requests, to stores application data-including, the full project data importable to **averos designer**, the full project command line and the generated application.<br/>

The picture below shows how a user, as a citizen developer, can leverage **WiBuild** application capabilities and features.

<div style="display: flex;flex-direction: row;justify-content: center;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/3-wibuild-capabilities-features.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/3-wibuild-capabilities-features.png" alt="Averos application detailed architecture">
    </a>
  </figure>
</div>

Using **Averos Designer**, **Citizen developers** can leverage the following features:
- Create a new averos project
- Import an existing averos project
- Export an averos project to `json` format
- Validate an averos project
- Generate an application 

On the other hand, **WiBuild** provides an **application management system** that exposes the following capabilities to **citizen developer**:
- Search averos application
- Download an averos project that could be imported in **averos designer** 
- Download the application generation script
- Download the application binary file
- Consult the WiBuild user dashboard

<br/>
A typical WiBuild journey towards creating an averos application could be described by the following diagram:
<div style="display: flex;flex-direction: row;justify-content: center;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/4-wibuild-user-journey.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/4-wibuild-user-journey.png" alt="Averos application detailed architecture">
    </a>
  </figure>
</div>

So, the main steps a **citizen developer** should follow, in order,to generate an application using **WiBuild** are as follows:
> 1. Sign in into your **WiBuild** account (or create a new one and validate it)
> 2. Open **Averos Designer**
> 3. Create a new application project or import a existing one
> 3. Validate your project
> 4. Submit an application generation request 
> 5. Go back to **WiBuild** main menu then search your application and check its generation status
> 6. Once the application status is `Ready`, download your application binary files using the dedicated `download` button

 >**🔖 Note** that **Wibuild** is very responsive and mobile friendly.<br/>
 It could also be installed and used on mobile devices.<br/>
 Go ahead and try it!
 {: .notice--info}

## **II. Averos Designer**

**Averos Designer**, as part or **WiBuild** application, is a **lowcode** designer for application development built arount **`averos framework`**.</br>
It allows citizen developers to design an application in an UML-like style.<br/>

**Averos Designer** provides all user friendly features a user needs to achieve a good design. <br/>

Below are **Averos Designer** features:
>- supports 11 languages 
- responsive application (mobile friendly)
- progressive web application (it could be installed on mobile devices)
- rich panel
- context menu
- drag & drop 
- select components (mouse)
- select all components (Ctrl+a) 
- select one by one (Ctrl + mouse)
- copy / paste components using (Ctrt+c / Ctrl+v)
- copy / paste components using context menu
- remove components
- scale in / scale out
- dark/light modes
- touch gestures support

Now, you have learnt about **WiBuild** application and how it is used to create web applications, let's switch gears and start creating our **`ToDoApplication`**.<br/>

In the next sections, we are going to start **designing** our application using **averos designer**, then we are going to **generate** it and finally **run** it.<br/>
Once our appication is **running** we are going to walk through it and see what it looks like.<br/><br/>
**Let's start creating interesting things ! 🚀**
{: .notice--success} 

