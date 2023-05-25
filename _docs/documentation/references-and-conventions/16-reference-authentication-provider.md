---
title: "Averos Authentication Provider: Reference & Conventions"
permalink: /averos/documentation/references-and-conventions/reference-authentication-provider/
excerpt: "Reference -  authentication provider"
toc: false
classes: wide
---

## **Averos Authentication Provider**

Averos comes with a built-in **authentication provider** based on [jwt](https://jwt.io "JSON Web Token"). Other authentication provider will be available in future releases. <br/>
Averos authentication provider could be overriden as long as they remain compliant with averos authentication provider specifications and naming conventions mentioned below.

### **Averos Authentication Provider Reference & Conventions**

When registering a new user or authenticating an existing user, averos will call the following API services:

 | **API Signature** | **URI** |  **HTTP Method** | **Payload** | **Output** | **API Description** |
| ------------ | ------------ | ------------ | ------------ | ------------ |------------ |
| `registerUser(user: T)` | /auth/register | POST | `User` | `User` | Registers a new user |
| `loginUser(userData: {userName \|\| email: string, password: string}): B` | /auth/login | POST | `{userName \|\| email: string, password: string}` | `auth_token: {_id: string, token: string, userName: string, email: string, isEmailVerified: string, image: string, ipAddress: string, profileLanguage: string, isAccountLocked: string}}` | Attempt to perform a log in action. Returns an authorization token |

>ℹ️ Note that, the current **averos** version does not support working without an authentication provider. Also, support for known authentication providers such as `auth0` is not available yet. Future versions will include these capabilities.<br/>
Since an averos application needs an authentication provider, you might want to implement one according to the specifications above. <br/>
Besides, **averos** offers a built-in **authentication service** that you might want to bind with your **custom authentication api** location attributes such as server location, port or uri. <br/>
Binding an averos service to its related api implies the creation of a specific `averos configuration`. <br/> 
This configuration should match an **`id`** whose value is equal to **`AuthService`** which stands for the **name** of the custom built-in **averos service** that is in charge of **authenticating**, **authorizing** and **managing** averos users.<br/>
Below is an `averos workflow command` template that should create such a configuration.
```js
ng g @wiforge/averos:averos-config --id=AuthService --type=service --host=[your-auth-server-address] --port=[our-auth-server-port] --protocol=[our-auth-server-protocol] --endpoint=[your-auth-api-uri]
```
{: .notice--info}

### **Registering Users**

The default averos register use case uses the following APIs in order to check wether a new user/email registration already exists or not. 

| **API Signature** | **URI** |  **HTTP Method** | **Output** |  **API Description** |
| ------------ | ------------ | ------------ | ------------ | ------------ | 
| `getUserByEmail(email: string): Observable<User>` | /auth/users/email/:email | GET | `{ emailNotAvailable: true } \|\| null` | Given an email adress, check wether the user exists or not |
| `getUserByUserName(userName: string): Observable<User>:` | /auth/users/:userName | GET | `{ userNameNotAvailable: true } \|\| null` | Given a user name, check wether the user exists or not |
