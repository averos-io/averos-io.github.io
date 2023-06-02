---
title: "Generate Your Application"
permalink: /averos/getting-started-c-developer/generate-application/
excerpt: "Generate Your Application"
toc: true
toc_sticky: true
---

## **I. Introduction**

Hello and welcome to this new section in this tutorial dedicated to citizen developers.<br/>

In the previous sections you had the opportunity to walk through the process of making applications which you used to create your own web application that you called **`ToDoApplication`** using the **lowcode** development tool **Averos Designer** which is part of our lowcode application **WiBuild**.<br/>
Also, you had the opportunity to walk through [**WiBuild**](https://appbuilder.wiforge.com/ "WiBuild") where you had a glimpse on both **Averos Designer** and the **application management module**.<br/>

In this section you will be taken in a walk through the **Application Management Module** which is responsible of generating and managing all of your applications projects made by **Averos Designer**.<br/>

For the sake of this tutorial, we made the complete **ToDoApplication** project file available to download using the link below.<br/>
This project provides `French` support with the full translation entries configuration.<br/>

Please feel free to either use this project or carry on with the one you have just made in this tutorial.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<a href="/examples/ToDoApplication.json" 
   title="Averos Tutorial For Developers" 
   class="btn btn--green btn--small" 
   download>Download ToDoApplication Project
</a>
</div>

## **II. Generate Your Application - ToDoApplication**

Go ahead and sign in into your [**WiBuild**](https://appbuilder.wiforge.com/ "WiBuild") account then open **`Averos Designer`**.<br/>

>🙋‍♂️ Please make sure to sign into your [**WiBuild**](https://appbuilder.wiforge.com/ "WiBuild") account before submitting any application generation request, otherwise you will not be able to do so.<br/>
{: .notice--danger}


Import your project **`ToDoApplication`** into **Averos Designer**.<br/>

Click on the `import project` button in the home top right menu as showed in the picture below:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/49-import-todoapplication-project.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/49-import-todoapplication-project.png" alt="ToDoApplication - Import Project">
        <figcaption>ToDoApplication - Import Project</figcaption>
    </a>
  </figure>
</div>
</div>

Navigate to the location of your `project json file` and select it.<br/>
Your project is now imported successfully into **Averos Designer**.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/50-todoapplication-project-imported.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/50-todoapplication-project-imported.png" alt="ToDoApplication - Project Imported Successfully">
        <figcaption>ToDoApplication - Project Imported Successfully</figcaption>
    </a>
  </figure>
</div>
</div> 

Next, **Validate** your project using the button displayed in the picture below:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/51-todoapplication-validate-project.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/51-todoapplication-validate-project.png" alt="ToDoApplication - Project Imported Successfully">
        <figcaption>ToDoApplication - Validate Project</figcaption>
    </a>
  </figure>
</div>
</div>

A confirmation message will pop up to inform you that your application is valid. <br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/52-todoapplication-project-validated-successfully.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/52-todoapplication-project-validated-successfully.png" alt="ToDoApplication - Project Validated Successfully">
        <figcaption>ToDoApplication - Project Validated Successfully</figcaption>
    </a>
  </figure>
</div>
</div>

Clik `OK`.<br/> 

Now go ahead and **generate** your application using the dedicated button displayed below:<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/53-todoapplication-generate-project.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/53-todoapplication-generate-project.png" alt="ToDoApplication - Generate your Application">
        <figcaption>ToDoApplication - Generate your Application</figcaption>
    </a>
  </figure>
</div>
</div>

>🙋‍♂️ Note that **generate application** is only available for **authenticated** **valid** users, so please make sure to sign into your [**WiBuild**](https://appbuilder.wiforge.com/ "WiBuild") account using a **valid** user before submitting any application generation request.<br/>
{: .notice--danger}

<br/>

**Averos Designer** will ask you to confirm that you are willing to generate your application. <br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/54-todoapplication-confirm-generate-project.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/54-todoapplication-confirm-generate-project.png" alt="ToDoApplication - Confirm Application Generation">
        <figcaption>ToDoApplication - Confirm Application Generation</figcaption>
    </a>
  </figure>
</div>
</div>



Click `Continue`, and wait until you receive your **application ID** related to your **generation request** as displayed below:<br/>
<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/55-todoapplication-generate-project-request-submitted.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/55-todoapplication-generate-project-request-submitted.png" alt="ToDoApplication - Generation Request Submitted Successfully">
        <figcaption>ToDoApplication - Generation Request Submitted Successfully</figcaption>
    </a>
  </figure>
</div>
</div>


Copy your `application ID`, the one displayed in the success message which you have just received  (`50e5ee7f-e83e-417c-b7da-d5ffdbd3d363` in my case).<br/>
Click `OK` then go back to **WiBuild** using the button displayed below:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/56-averos-designer-wibuild-home.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/56-averos-designer-wibuild-home.png" alt="WiBuild Home Button">
        <figcaption>WiBuild Home Button</figcaption>
    </a>
  </figure>
</div>
</div>

A new `Ticker` will be available for you displaying all the applicatio nIDs related to the application generations requests that you have submitted.<br/>
Use these tickers to copy your `application ids` so that you use it later when you will search and verify your application generation status.<br/>
Also, you might want to dispose a `ticker` using the button, highlighted above, located on the right of each application ID.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/57-wibuild-home-ticker.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/57-wibuild-home-ticker.png" alt="WiBuild Home Button">
        <figcaption>WiBuild Home Button</figcaption>
    </a>
  </figure>
</div>
</div>


Monitor your requests using your dedicated dashboard.<br/>

From **WiBuild** left side user menu, click on the `DashBoard` menu link.<br/>

Your dashboard should look like the following one:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/58-wibuild-my-dashboard.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/58-wibuild-my-dashboard.png" alt="WiBuild User Dashboard">
        <figcaption>WiBuild User Dashboard</figcaption>
    </a>
  </figure>
</div>
</div>

According to your dashboard:<br/> 
>-  your `daily application generation requests` limit is `10`, 
>-  you have `9` `remaining requests` for today, 
>-  you have not any `ongoing` generation requests today,
>-  you have one generation request that was executed `successfully` today,
>-  you have not any failed generation requests today


Since our previous generation request was executed successfully, let's go ahead and verify our **`ToDoApplication`**.

## **III. Verify Your ToDoApplication**

Go ahead and expand the menu group item `My Averos Application` located in you right user menu then click on menu item `Search My Averos Application`.<br/>
You will use this menu to fetch your application.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/59-wibuild-my-Averos-Application.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/59-wibuild-my-Averos-Application.png" alt="WiBuild - My Averos Application">
        <figcaption>WiBuild - My Averos Application</figcaption>
    </a>
  </figure>
</div>
</div>


Copy/paste your `Application ID` (the one you generated earlier) in the dedicated `search criteria field` labeled `Application id` then hit the button `Search` as showed below: 

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/60-wibuild-my-Averos-Application-search-by-applicationid.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/60-wibuild-my-Averos-Application-search-by-applicationid.png" alt="WiBuild - My Averos Application - Search by Application ID">
        <figcaption>WiBuild - My Averos Application - Search by Application ID</figcaption>
    </a>
  </figure>
</div>
</div>

Wait untill the search complets.<br/>
If your application status is `Ready`, a `download` button will be available for your application as described below.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/61-wibuild-my-Averos-Application-searchresult-todoapplication.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/61-wibuild-my-Averos-Application-searchresult-todoapplication.png" alt="WiBuild - My Averos Application - Search Result">
        <figcaption>WiBuild - My Averos Application - Search Result</figcaption>
    </a>
  </figure>
</div>
</div>

You might use this button to download your application.<br/>
In fact that's what we will do in the next section when we will deploy and run our application.<br/>

Now, there are two additional thing you probably noticed in this search result, namely `Get` and `View` actions.<br/>

`Get` action allows you to download the `application related project file` if you wishes to share your project with your friends or reuse it in another one.<br/>

`View` action displays the `generation script` related to your application.<br/>
Since this is regarded as an advanced features in `averos framework` mainly available for experienced IT professionals, you might ignore this action. 
But here is what the `generation script` would look like if you can't help not knowing:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/62-wibuild-my-Averos-Application-todoapplication-generationscript.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/62-wibuild-my-Averos-Application-todoapplication-generationscript.png" alt="WiBuild - My Averos Application - Search Result">
        <figcaption>WiBuild - My Averos Application - Generation Script</figcaption>
    </a>
  </figure>
</div>
</div>


**🎉🎉🎉 Congratulations! Your ToDoApplication has been created and generated successfully using WiBuild ! 🎉🎉🎉**<br/> <br/>
Your **ToDoApplication** is now ready to be deployed and executed!
<br/>
In the next sections, you are going to download and run your **`ToDoApplication`** then finally we are going to explore it in details.<br/>
<br/>
**See you in the next section then!**
{: .notice--info}


