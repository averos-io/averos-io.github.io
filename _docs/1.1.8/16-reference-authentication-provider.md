---
title: "Reference"
permalink: /docs/1.1.8/reference-authentication-provider/
excerpt: "Reference -  authentication provider"
toc: false
classes: wide
---

## **Authentication Provider**

Averos comes with a built-in authentication provider based on [jwt](https://jwt.io "JSON Web Token"). Other authentication provider will be available in future releases. <br/>
Averos authentication provider could be overriden as long as they remain compliant with averos authentication provider specifications and naming conventions.

### **Authentication Provider Methods**

When registering a new user or authenticating an existing user, averos will call the following API services:

 | **API Signature** | **URI** |  **HTTP Method** | **Payload** | **Output** | **API Description** |
| ------------ | ------------ | ------------ | ------------ | ------------ |------------ |
| `registerUser(user: T)` | /auth/register | POST | `User` | `User` | Registers a new user |
| `loginUser(userData: {userName \|\| email: string, password: string}): B` | /auth/login | POST | `{userName \|\| email: string, password: string}` | `auth_token: {_id: string, token: string, userName: string, email: string, isEmailVerified: string, image: string, ipAddress: string, profileLanguage: string, isAccountLocked: string}}` | Attempt to perform a log in action. Returns an authorization token |

### **Registering users**

The default averos register use case uses the following APIs in order to check wether a new user/email registration already exists or not. 

| **API Signature** | **URI** |  **HTTP Method** | **Output** |  **API Description** |
| ------------ | ------------ | ------------ | ------------ | ------------ | 
| `getUserByEmail(email: string): Observable<User>` | /auth/users/email/:email | GET | `{ emailNotAvailable: true } \|\| null` | Given an email adress, check wether the user exists or not |
| `getUserByUserName(userName: string): Observable<User>:` | /auth/users/:userName | GET | `{ userNameNotAvailable: true } \|\| null` | Given a user name, check wether the user exists or not |
