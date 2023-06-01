---
title: "Create Service Configurations"
permalink: /averos/getting-started-c-developer/create-translations/
excerpt: "Create Service Configurations"
toc: true
toc_sticky: true
---
<br/>

Since `Averos Framework` is powered by `angular`, any `averos` project is actually an `angular` project. <br/>
Therefore, an `angular` project should be created in order to initialize your project. 
{: .notice--success}

### **I- Create a new angular application**

>As mentioned in the prerequisites section, creating a new angular application will require to install `@angular/cli`, so let us go ahead and install it, if not already done, using the following command :
   ```bash
   npm i -g @angular/cli
   ```

 >🙋‍♂️ Please refer to [**angular version compatibility**]({{"/averos/latest-version/#angular-compatibility" | relative_url}} "angular version compatibility") section, for further angular versions compatibility information support.
 {: .notice--danger}
 
Once the cli is installed, we can use the angular `ng new` schematics to initiate a new angular application. <br/>
Go ahead and execute the following command in order to initialize a new angular project named `ToDoApplication`

```bash 
ng new ToDoApplication --style=scss --routing --strict 

```

>**🔖 Note:** Since `averos` does not support other styling types, you should specify `scss` styling type when creating a new angular application. Other styling types will not be supported in future releases.
{: .notice--danger}

### **II. Initialize an averos application**

After creating a new angular project, you will want to add `averos` features and capabilities to your project.<br/>
This will trigger an averos process that will guide you through a set of customizations including application name, default language, additional language and authentication provider. <br/>
The process execution will result in an initialization of your angular project with `averos framework`. <br/>

Change your current directory to `ToDoApplication` project directory by executing the following command:

```bash
cd ToDoApplication
```

While inside `ToDoApplication` project directory, go ahead and execute the following command in order to trigger `averos framework` integration process workflow and convert your angular project into an `averos project`.

   ```bash
    ng add @wiforge/averos 
   ```

>**🔖 Note:** Averos could also be installed via `npm install` but we recommand to use the `ng add` schematics in order to trigger the integration wizard that will integrate all averos key features for you.
{: .notice--warning}

The averos integration wizard, triggered via `ng add @wiforge/averos`, will take you through the following customizations details:

 - [x] Specify your application name 
 - [x] Choose whether `authentication` is enabled or not (enabled by default)
 - [x] the authentication provider (In case `authentication` is enabled). If you are willing to implement your own authentication provider then please refer to [**authentication provider reference**]({{"/averos/documentation/references-and-conventions/reference-authentication-provider/" | relative_url}} "Authentication Provider SetUp") section.
 - [x] Specify your default application language (default is english)
 - [x] Specify an additional application language (if you wish to setup an additional language support)

 >**🔖 Note:** You might want to run the `averos framework` integration process workflow automatically without beeing prompted to several customization steps by simply executing the same command `ng add @wiforge/averos` and mentioning its customization parameters.
 If you wish to bypass command prompts then go ahead and use the following command instead of the previous one:
 ```bash
 ng add @wiforge/averos --application-name=cd ToDoApplication --enable-authentication --authentication-provider=custom --default-language-code=en --defaults --skip-confirmation
 ```
{: .notice--success}

 After running `ng add @wiforge/averos` which results in integrating `averos framework` into your angular project, the latter will now be updated with all averos features.<br/>

 As a result your application architecture is now driven by averos framework architecture providing a set of features and capabilities described in the picture below.
 
<div style="display: flex;flex-direction: row;justify-content: center;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/doc/averos-application-detailed-architecture.png">
      <img src="{{ site.baseurl }}/assets/doc/averos-application-detailed-architecture.png" alt="Averos application detailed architecture">
    </a>
  </figure>
</div>

 Next, you might want to test your averos application and see how does it look and what features are already available. The easiest way to do that is to run your application using the following command: 
 ```sh
 `ng serve ToDoApplication`
 ```
 The other way of deploying your application is to use a **`web server`** such as `nginx`.<br/>
 
 In this tutorial, we will use the second method and deploy our application to the lightweight `http-server`; but you are free to choose whatever method and web server you like to procede with. <br/>

 🚀 **CONGRATULATIONS! YOU ARE READY TO GO!** 🚀
 {: .notice--info}

### **III- Run your application** 

Congratulations! You have so far created an averos application named `ToDoApplication`.<br/>
Your new web application is already **responsive**, **progressive** with pre-defined handy layout, `jwt` authentication support and multi-language capability. <br/>
Go ahead and run your application so that you can have a glimpse of the overall layout and basic features.

>💡 **ProTip**: Running your application could either be by executing the following command `ng serve ToDoApplication` or by deploying it to an external application server such as `nginx` or `http-server` for testing purposes.
{: .notice--info}

#### **1. Deploy your application to http-server**

The easiest way to deploy your application to an external server is to use the lightweight **`http-server`**. Of course there are plenty of ways and servers out there to use but we are going to keep it simple for the sake of this tutorial. <br/>

Please go ahead and execute the following command in order to  deploy your application to the lightweight [**http-server**](https://github.com/http-party/http-server "http-server").

 ```bash
 npm install http-server && ng build ToDoApplication && http-server -p 8080 -c-1 dist/to-do-application
 ```

> **Note**: The previous command does a couple of things besides deploying your applications: 
- installs `http-server`
- builds `ToDoApplication` (by default build output is placed under `dist/to-do-application`)
- deploy `ToDoApplication` to `http-server` 
{: .notice--info}


#### **2. Log into your application**

As mentioned earlier, your new web application `ToDoApplication` has `jwt authentication` support which activates private logged spaces for you, meaning that your application already supports mutlti-users. <br/>
Currently it is not possible to exclude such capability since its is forced by default in every averos project.<br/>
However, future `averos` version may include the possibility to bypass authentication. <br/>
Thus, every averos application will need an authentication provider in order to allow users to log into their defaut private spaces where entities and use cases are handled. <br/>

##### **2.1. Check your authentication provider server**

For the sake of this example we are going to use the authentication mock server available [here](https://github.com/averos-io/averos-backend-mock "Averos Backend Mock"). <br/>
This mock api provides **Jwt Authentication and User management services**.


>ℹ️ Please make sure you already followed the [**prerequisites** section]({{"/averos/getting-started-developer/prerequisites/#3-authentication-provider" | relative_url}} "Authentication Provider") instruction.<br/>
`The authentication backend mock server` should be up and running.
{: .notice--info}

##### **2.2. Authentication Service Binding - User Service Binding**

As you might already know, your **`application authentication service`** needs to be bound to one `authentication backend service` so that it could be activated. <br/>
Similarely, your **`application user service`** - the service in charge of user management - needs to be bound to one **`User Management Api Server Backend`**.<br/> 
Again **Authentication and User Management** will be provided by our **`authentication backend mock server`** mentioned earlier.<br/>
As a result, two `averos service configurations` should be created using the reserved identifiers **`AuthService`** and **`UserService`**. <br/>

Please go ahead and execute the following command in order to create an **Authentication Service Binding Configuration**.

```bash
ng g @wiforge/averos:averos-config --id=AuthService --type=service --host=localhost --port=3333 --protocol=http --endpoint=/auth/ --defaults
```
You should see similar output if the command executed successfully:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/1-create-authservice-service-config.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/1-create-authservice-service-config.png" alt="AuthService Config command">
      <figcaption>AuthService Config command</figcaption>
  </a>
</figure>


Similarely, go ahead and execute the following command in order to create a **User Management Service Binding Configuration**.

```bash
ng g @wiforge/averos:averos-config --id=UserService --type=service --host=localhost --port=3333 --protocol=http --endpoint=/uapi/users/ --defaults
```

>Note that we are assuming that your `authentication backend service` mock is running in localhost (`--host=localhost`), on port 3333 (`--port=3333`) through http protocol (`--protocol=http`). <br/>
If you have changed these parameters please update the previous command accordingly. <br/>
Also, make sure not to change the other parameters (i.e. `id=AuthService`, `type=service` and `endpoint=/auth/`) since those has specific fixed values for **`averos application authentication service`**.
{: .notice--success}


>ℹ️ More detail on **averos configuration** could be found [**here**]({{"/averos/documentation/environment-configuration/service-configuration/" | relative_url}} "Averos Configuration").
{: .notice--info}

Once your configurations are created, go ahead an redeploy your application by following these steps:<br/>
   >  **1-** shutdown the running server `http-server`<br/>
      **2-** build and deploy `ToDoApplication` by running the following command: <br/>
     
   >
   ```bash
   ng build ToDoApplication && http-server -p 8081 -c-1 dist/to-do-application
   ```


##### **2.3. Log Into your Application**

Now your application is deployed and configured you will be able to sign into your account. <br/>
Open your favorite web browser and navigate to `http://127.0.0.1:8081`. <br/>

Here is what your application will look like. The public space is what a user will see first. <br/>
Once logged in, the layout will be switched to the private space context. More on that later.<br/>

Averos application template provides an additional dark mode available via the button highlighted in the picture below.:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/2-application-init-white.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/2-application-init-white.png" alt="averos application">
      <figcaption>Averos Application</figcaption>
  </a>
</figure>

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/3-application-init-dark.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/3-application-init-dark.png" alt="averos application-dark mode">
      <figcaption>Averos Application - Dark Mode</figcaption>
  </a>
</figure>

>ℹ️ Since we have not added any languages yet, our application is available only in `English` which is the default language. <br/>
You will be able to add another language to your application very soon, but before that, let's create a new account and sign into our application.
{: .notice--info}

Go ahead and hit `Sign up` button in order to create a new account.<br/>

Here is what the registration screen looks like. I prefer **dark mode** that's why all my screenshots will be made in that mode but you are free to choose whatever mode you like.

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/4-registration.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/4-registration.png" alt="averos registration">
      <figcaption>Averos Registration</figcaption>
  </a>
</figure>

Now our user is registered, we can use our credentials to log into our private space.<br/>

Go ahead and sign into your application by hitting the `sign in` button then entering your credentials as shown below. I am using a user identifier named `testuser` along with the password `testUser00`, but you can choose whatever user/password you wish. <br/>
Please keep in mind that `averos passwords` are subject to validations. Therefore, you should choose a password that is compliant with `averos validation rules`.<br/>
Don't worry, your application itself, will guide you in creating a compliant password thanks to the validation error messages you will encounter.<br/>

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/5-signin.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/5-signin.png" alt="averos sign in">
      <figcaption>Averos Sign In</figcaption>
  </a>
</figure>

This is what **averos private space** looks like:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/6-basic-private-space.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/6-basic-private-space.png" alt="averos private space">
      <figcaption>Averos Private Space</figcaption>
  </a>
</figure>

>Now you are logged into your basic averos application, you might want to have a look at all available features.
Go ahead and change your `avatar` for example.
Also, you can `edit` your profile and check your `settings`.
{: .notice--success}

>🔖 Averos based applications have by default two domain spaces :
>- **public space**  : available for public anonymous users
>- **private space** : only available for authenticated users
{: .notice--info}

###### **2.3.1. Averos private space**

Averos private space is the space that is accessible only for authenticated users. <br/>
It is composed of a **top menu**, a **left side bar** dedicated for the user profile and the menu and a **content area**. <br/>

Earlier, when you logged into your application, you noticed that there were no menu configured yet (the menu is located in the left side bar).<br/>
Actually, **averos menu** is generated based on the `use cases` that have been initiated by the user.  <br/>
This means that, since we have not created any custom entities or use cases yet; there will be no menu available in your application at this point.

Once we will start adding entities and business logics to our application, the default menu will be created and updated accordingly.

###### **2.3.2 Averos public space**

Averos public space is available in order to allow unauthenticated users to access any public information that is meant to be shared in the application.<br/>
The application owner decides wether to restrict access to a specific component, page or use case or to fully disclose it.<br/>
If you chooses to make a use case anonymously accessible, averos gives you the ability to add a default menu link in that public space using the dedicated averos workflow command `create-page`. <br/>
The public menu link will be available in the application home page **top menu** as part of the default generated menu. 

>💡 Averos menu could be easely configured in many ways.
Different configurations aspect are available to the end user in order to allow the finest customizations.
The configuration includes: 
>- adding, removing, updating or grouping menu items;
>- icon to display on the menu item/group,
>- the target link or route
>- the ability to configure external links like websites or external applications URLs.
>- the ability to disable a menu/submenu/menuItem
>- let the menu available in public spaces
{: .notice--info}

📢 More on this topic is available in the [detailed averos documentation]({{"/averos/documentation/view-context/" | relative_url}} "averos view context").
{: .notice--warning}

While navigating through the application, you will mainly notice the following points:
- all of your **chosen languages are supported** and you can actually switch between them flawlessly (more on this topic later).
- All the application components are **translated** to the requested languages (buttons, input placeholders, tooltips, labels, error messages, form validation messages, notification messages... )
- **login/logout** menu are pre-built but could be also customized by bringing your own components
- **pwa** support is obvious since we are still in the angular echosystem
- your application is **fully responsive** (check it by turning on the mobile preview in your browser devtools)
- **dark mode** is supported ( dark mode is supported, alternatively, averos styles could be easely overridden so that you can fully customize your application layout, but we recommand keeping the default layout for better stability)
- APIs backends are easely bound to your application services using **`averos configurations`**

> **🎉🎉🎉 Congratulations! for making it so far! 🎉🎉🎉** <br/><br/>
[Further]({{"/averos/getting-started-developer/customize-your-application/" | relative_url }}  "Customize Your Application") in this guide we are going to learn how to customize our application in order to meet our business requirements by adding use cases, actions, translation capabilities, view layouts and much more.<br/>
*See you in the next chapter!*
{: .notice--success}

**[⬆ Back to Top](#top)**
