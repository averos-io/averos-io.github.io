---
title: "Prerequisites"
permalink: /averos/getting-started-c-developer/prerequisites/
excerpt: "prerequisites"
toc: true
---


#### **1. Nodejs**
   
`@wiforge/averos` is an npm package, so `nodejs` will be required in order to use the library.
Please follow the installation instructions [here](https://nodejs.org/ "Nodejs") for further details about setting up **nodejs**.


#### **2. Angular cli**

 `@angular/cli` is required in order to run `averos workflows`.

Before you start, make sure you have already installed one of the `angular/cli` supported version using the following command:<br/><br/>
`npm install -g @angular/cli@x.y.z` <br/><br/>
A list of angular supported version could be found [here]({{ "/averos/latest-version/" | relative_url }} "angular version compatibility").
{: .notice--info}

 Install `angular/cli` by executing the following command:

 ```bash
  npm install -g @angular/cli
 ```

 >**🚩 Note:** Please refer to [**angular version compatibility**]({{"/averos/latest-version/#angular-compatibility" | relative_url}} "angular version compatibility") section, for further angular versions compatibility information support.
 {: .notice--success}

#### **3. Authentication Provider**

Averos application uses [jwt](https://jwt.io "JSON Web Token") as the default authentication and authorization schema. It relies on authentication providers which could be considered as authentication APIs that handle and manage users along with the authentication and authorization processes. <br/>
For the sake of this tutorial, we are going to use an authentication mock server that I made available in the following github [repository](https://github.com/averos-io/averos-backend-mock "Averos Backend Mock").<br/>
This authentication api mock, available for forking at will, will be used as our authentication provider. 

>ℹ️ Note that, the current **averos** version does not support working without an authentication provider. Also, support for known authentication providers such as `auth0` is not available yet. <br/> Future versions will include these capabilities.<br/>
Since your application needs an authentication provider, you might want to implement one according to averos specifications available [here]({{"/averos/documentation/references-and-conventions/reference-authentication-provider/" | relative_url}} "Authentication Provider") or use the authentication mock server available [here](https://github.com/averos-io/averos-backend-mock "Averos Backend Mock"). <br/>
Besides, you might want to configure your default `averos service configuration` bindings for your application **`authentication service`** to match with your authentication provider server location attributes (server, port, uri...). This could be achieved by creating/updating the existing averos service configuration whose **`id`** should be equal to the value **`AuthService`**, using the averos workflow command `averos-config` as described below:
```js
ng g @wiforge/averos:averos-config --id=AuthService --type=service --host=[your-auth-server-address] --port=[our-auth-server-port] --protocol=[our-auth-server-protocol] --endpoint=[your-auth-api-uri]
```
{: .notice--info}


>🚩 More details on averos authentication provider specifications could be found in the [**Authentication Provider**]({{"/averos/documentation/references-and-conventions/reference-authentication-provider/" | relative_url}} "Authentication Provider") section, further below.
{: .notice--warning}

You might want to locally install and run **averos backend mock** authentication provider back end mock by proceeding with the following command line:

```bash
  git clone https://github.com/averos-io/averos-backend-mock && cd averos-backend-mock && npm install && npm start
 ```
<br/>

Now let's first have a look at the application business requirements and see what are the capablities and features that we are going to implement. <br/>
Once the application requirements are defined, we will move on to the design step where we will specify our application in a design close to `UML language`. <br/> 

These topics will be explained in the next chapter.
