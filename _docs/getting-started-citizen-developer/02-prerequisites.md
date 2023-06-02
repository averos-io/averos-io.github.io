---
title: "Prerequisites"
permalink: /averos/getting-started-c-developer/prerequisites/
excerpt: "prerequisites"
toc: true
toc_sticky: true
---

#### **1. Git**

Please follow the installation instructions [here](https://git-scm.com/downloads "git") for further details about installing **git**.


#### **2. Nodejs**

Please follow the installation instructions [here](https://nodejs.org/ "Nodejs") for further details about installing **nodejs**.


#### **3. Averos Backend Mock**

>
Please make sur you have installed **`Git`** and **`NodeJS`** before installing **`Averos Backend Mock`**.
{: .notice--error}

Though it is not always the case especially with **monolithic applications**, but usually **Information Technology Applications**, at the highest level, are composed of **frontend interfaces** that interacts with **backend services**.<br/>
Of course these two layers could be subject to further decompositions; but the grouping category still remains the same: a component either belongs to a **frontend** category or is part of a **backend** category.<br/>

Still, how can we identify both contexts ?

Long story short; everything that is directly exposed to Humains belongs to the **frontend** category; and everything that is not exposed to Humains and which directly interacts with the lowest systems (ex. databases) fall under the **backend** category.<br/>

Now, this definition is the easiest one a citizen developer could grasp and you may find advanced definitions somewhere else but let's not complicate our lifes any further just yet.<br/> 
So, feel free to delve deep into the **application architecture** topic if you want to know more about it; but what you have just learnt is more than enough to successfully carry out this tutorial.<br/>

Let's get back to our application; shall we ?<br/>

In light of the preceding, note that the current `averos framework` version will provide you **nocode** visual tools so that you create **frontend applications** and ONLY **frontend applications**. <br/>
Future `averos` version may include additional tools that provides **backend services**.<br/>

Below is the high level architecture that depicts your **averos application** as a **`frontend application`**, the **`backend service`** as well as their interactions.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/1-frontend-backend-interaction.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/1-frontend-backend-interaction.png" alt="Frontend and Backend Interactions">
    </a>
  </figure>
</div>


As a result, your application will need a service that handles **authentication**, **user management** and **business entities management**.<br/>
These are not, and should not, be managed by **averos applications**. They should be managed by external services.<br/>

That's why we created a **backend service** mock named **averos backend mock** that you will use with your application so that you could be able to experience with your **frontend** application that you are going to create.<br/>
**Averos backend mock** will provide you basic **backend** functionnalities such as, authentication, user management and business entities management.<br/>

>🔖 Please note that **averos backend mock** is only made for testing purposes and thus is not intended to be used in production.<br/>
If you are willing to use your application in production, you have to use ready for production **backend services**.<br/>
**Backend services** could be either developed from scratch or created on the cloud using for example [**google functions**](https://cloud.google.com/functions "Google Functions"), [**aws lambda**](https://aws.amazon.com/lambda/ "AWS Lambda") or [**azure functions**](https://azure.microsoft.com/en-us/products/functions "Azure Functions").<br/>
{: .notice--info}


Now, let's go ahead and install and run **averos backend mock** locally by following these steps:

1.  Open a command line 
  - **Windows users:** Click Start → All Programs → Accessories → click on `Command Prompt` 
  - **Mac users:**  Click the `Launchpad icon` in the Dock → type `Terminal` in the search field → then click `Terminal`
  - **Linux users:** Open a shell command line _(but you already know how to procede, don't you ?)_

2. copy/paste the following command into the `terminal` the hit `enter`:
```bash
  git clone https://github.com/averos-io/averos-backend-mock && cd averos-backend-mock && npm install && npm start
 ```
  If you have already executed the previous command and you want to run the backend mock once again, just execute the following command using a `terminal` from within `averos-backend-mock` home folder :
```bash
 npm start
 ```

 3. Wait until the service starts. Leave the service up and do not close the window. (closing the terminal window will shutdown the service)

<br/>

 If everything went ok you shall see an output similar to the following:

<div style="display: flex;flex-direction: row;justify-content: center;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/2-averos-backend-mock-running.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/2-averos-backend-mock-running.png" alt="Averos Backend Mock Running">
      <figcaption>Averos Backend Mock Running</figcaption>
    </a>
  </figure>
</div>

<br/>

**🎉🎉🎉 Congratulations! Your service backend is up and running ! 🎉🎉🎉**<br/><br/>
**Let's start creating our application!**
{: .notice--info}

Before starting to create our application we first have to look at the business requirements and see what are the capablities and features that we are going to implement in our application. <br/>
Once the application requirements are defined, we will move on to the design step where we will specify our application in a design close to [UML Language](https://en.wikipedia.org/wiki/Unified_Modeling_Language "UML Language") using `Averos Designer`, then finally generate it. <br/> 

These topics will be explained in the next sections.
