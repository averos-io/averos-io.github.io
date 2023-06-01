---
title: "Create Service Configurations"
permalink: /averos/getting-started-c-developer/create-service-configurations/
excerpt: "Create Service Configurations"
toc: true
toc_sticky: true
---

## **I. Introduction**

In the previous sections we have created our application and added our `entities` along with their `managing services`.<br/>
We then created all the `use cases` which were identified in the design phase and finally we included one `blank page` to serve as a placeholder for your custom page to be implemented.<br/>

Now, all the business requirements and design specifications have been successfully created using **Averos Designer**, you might wonder what else is remaining to do so far.<br/>

Well, there is one more thing to do so that our application become fully functional.<br/>

Remember we spoke about **Averos Services** ?<br/>
Of course, entity managing services we created earlier are one of them.<br/><br/>

As explained in the [prerequisites section]({{"averos/getting-started-c-developer/prerequisites/#3-averos-backend-mock" | relative_url}} "prerequisites section"), these services are the bridges that bind our application to the external **service backends**<br/>
These bindings are created using **averos service configurations**.<br/>

In this section, we are going to create **averos service configurations** for all our **averos services**.<br/>
By the end of this section, your application will be ready to be deployed and executed.<br/>
However, before generating our application; we will teach it a new language so that we could target a wider audience. This will be part of the final section in this tutorial.<br/>
 

Now here is the list of the **averos services** that exist in our application:
>-  **ToDoAreaService** (the managing service which we created for `ToDoArea`)
>-  **ToDoTaskService** (the managing service which we created for `ToDoTask`)
>-  **AuthService** (the default averos service for providing `authentication`)
>-  **UserService** (the default averos service for `managing users`)

Let's create one **service configuration** for each **averos service**.<br/>

## **II. ToDoAreaService Service Configuration**

Go back to **Averos Designer** and expand the **`Configurations`** components set located in the `Averos Components` panel.<br/>
Drag and drop one **`Service Configuration`** component into the canvas as shown in the picture below:<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/37-new-service-configuration-todoarea.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/37-new-service-configuration-todoarea.png" alt="New Service Configuration">
        <figcaption>New Service Configuration</figcaption>
    </a>
  </figure>
</div>
</div>

Select your new `Service Configuration` then go ahead and update its properties as follows:<br/>
>- **Configuration Name**: `ToDoAreaServiceConfiguration`
>- **Config ID - Related Service**: choose `ToDoAreaService`
>- **Api Host**: `localhost`
>- **Api Port**: `3333`
>- **Api Protocol**: choose `HTTP`
>- **Api EndPoint**: `/todoareas`

Click `apply`.<br/>

>🙋‍♂️ Please make sure your updates has been applied successfully to the component before moving on to the next one.<br/> 
The updates are applied if you see that the related component in the canvas has been updated accordingly.<br/> 
{: .notice--danger}

Your service configuration should look like the one in the picture below:<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/38--service-configuration-todoarea.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/38--service-configuration-todoarea.png" alt="Service Configuration - ToDToDoAreaServiceoArea">
        <figcaption>Service Configuration - ToDoAreaService</figcaption>
    </a>
  </figure>
</div>
</div>


## **III. ToDoTaskService Service Configuration**

As you did for `ToDoAreaService`, go ahead and create a new `service configuration` component for `ToDoTaskService`.<br/>
Select your new `Service Configuration` then go ahead and update its properties as follows:<br/>
>- **Configuration Name**: `ToDoTaskServiceConfiguration`
>- **Config ID - Related Service**: choose `ToDoTaskService`
>- **Api Host**: `localhost`
>- **Api Port**: `3333`
>- **Api Protocol**: choose `HTTP`
>- **Api EndPoint**: `/todotasks`

Click `apply`.<br/>

>🙋‍♂️ Please make sure your updates has been applied successfully to the component before moving on to the next one.<br/> 
The updates are applied if you see that the related component in the canvas has been updated accordingly.<br/> 
{: .notice--danger}

Your service configuration should look like the one in the picture below:<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/39-service-configuration-todotaskservice.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/39-service-configuration-todotaskservice.png" alt="Service Configuration - ToDoTaskService">
        <figcaption>Service Configuration - ToDoTaskService</figcaption>
    </a>
  </figure>
</div>
</div>


## **IV. AuthService Service Configuration**

Go ahead and create a new `service configuration` component for `AuthService`.<br/>
Select your new `Service Configuration` then go ahead and update its properties as follows:<br/>
>- **Configuration Name**: `AuthenticationServiceProviderConfig`
>- **Config ID - Related Service**: choose `AuthService`
>- **Api Host**: `localhost`
>- **Api Port**: `3333`
>- **Api Protocol**: choose `HTTP`
>- **Api EndPoint**: `/auth/`

Click `apply`.<br/>

>🙋‍♂️ Please make sure your updates has been applied successfully to the component before moving on to the next one.<br/> 
The updates are applied if you see that the related component in the canvas has been updated accordingly.<br/> 
{: .notice--danger}

Your service configuration should look like the one in the picture below:<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/40-service-configuration-authservice.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/40-service-configuration-authservice.png" alt="Service Configuration - AuthService">
        <figcaption>Service Configuration - AuthService</figcaption>
    </a>
  </figure>
</div>
</div>


## **V. UserService Service Configuration**

Go ahead and create a new `service configuration` component for `UserService`.<br/>
Select your new `Service Configuration` then go ahead and update its properties as follows:<br/>
>- **Configuration Name**: `MyUserServiceConfig`
>- **Config ID - Related Service**: choose `AuthService`
>- **Api Host**: `localhost`
>- **Api Port**: `3333`
>- **Api Protocol**: choose `HTTP`
>- **Api EndPoint**: `/uapi/users/`

Click `apply`.<br/>

>🙋‍♂️ Please make sure your updates has been applied successfully to the component before moving on to the next one.<br/> 
The updates are applied if you see that the related component in the canvas has been updated accordingly.<br/> 
{: .notice--danger}

Your service configuration should look like the one in the picture below:<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/41-service-configuration-userservice.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/41-service-configuration-userservice.png" alt="Service Configuration - UserService">
        <figcaption>Service Configuration - UserService</figcaption>
    </a>
  </figure>
</div>
</div>
<br/>

>💡If you are wondering what are the service characteristics that you have just configured; just think of them as the attributes that describe the **route to the external service backend**.<br/>
In other words, your application service will need to know where do the service backend live and how to reach it.<br/>

>🙋‍♂️Note that the configurations you have just made need to match the access parameters related to **averos service backend mock** which you installed and executed in the [prerequisites section]({{"averos/getting-started-c-developer/prerequisites/#3-averos-backend-mock" | relative_url}} "prerequisites section").<br/>
If you have changed any of the default parameters when you have installed the service backend mock please update your service configurations accordingly.<br/>
{: .notice--warning}

**🎉🎉🎉 Congratulations on making it this far! 🎉🎉🎉**<br/> <br/>
Your **ToDoApplication** is now fully functional and ready to be taken to the next level!<br/>
But wait a moment! How about your application learns new languages?<br/>
Sounds great ?<br/><br/>
Ok then, let's move on to the final section in creating your application using **Averos Designer**.<br/>
**See you soon!**
{: .notice--info}


