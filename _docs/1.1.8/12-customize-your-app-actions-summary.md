---
title: "Customize your application"
permalink: /docs/1.1.8/customize-your-app-actions-summary/
excerpt: "Customize your application - Actions Summary"
toc: true
---

## **VI- Actions Summary**

### 1. **Install averos backend mock**
   
   ```bash
    git clone https://github.com/averos-io/averos-backend-mock && cd averos-backend-mock && npm install && npm start
   ```

<br/>

### 2. **create a new angular application**
   
   ```bash
    npm i @angular/cli && ng new my-averos-web-application --style=scss --routing --strict && cd my-averos-web-application
   ```


### 3. **add averos support**

    ```bash
    ng add @wiforge/averos
    ```


### 4. **initiate new averos crud use cases for both ToDoArea and ToDoTask entities**

    ```bash
    $ ng g @wiforge/averos:acrud --ename=ToDoArea && ng g @wiforge/averos:acrud --ename=ToDoTask
    ```

### 5. **Add entities composite relationship support**

      ```bash
      ng g @wiforge/averos:acm --ename=ToDoArea --fename=ToDoTask --fieldRelationType=OneToMany

      ng g @wiforge/averos:acm --ename=ToDoTask --fename=ToDoArea --fieldRelationType=ManyToOne
      ```

### 6. **Add a new simple type member - taskStatus - to ToDoTask entity**

   ```bash
   ng g @wiforge/averos:asm --ename=ToDoTask --mname=taskStatus --memberType=enumeration --listOfEnumValues=closed,active,pending
   ``` 

###  7. **Run your application**

    ```bash
    ng serve
    ```

**OR** 

### 8. **All-In-One**

**Generate a Web Application in only `5 minutes` by executing the following command:**


```bash
git clone https://github.com/averos-io/averos-backend-mock && 
cd averos-backend-mock && 
npm install && 
npm start && 
npm i @angular/cli && 
ng new my-averos-web-application --style=scss --routing --strict && 
cd averos-io-starter && 
ng add @wiforge/averos --applicationName=myAverosWebApplication --auth_backend_url=http://localhost:3333 --defaultLanguageCode=en --defaults && 
ng g @wiforge/averos:acrud --ename=ToDoArea && 
ng g @wiforge/averos:acrud --ename=ToDoTask && 
ng g @wiforge/averos:acm --ename=ToDoArea --fename=ToDoTask --fieldRelationType=OneToMany && 
ng g @wiforge/averos:acm --ename=ToDoTask --fename=ToDoArea --fieldRelationType=ManyToOne && 
ng g @wiforge/averos:asm --ename=ToDoTask --mname=taskStatus --memberType=enumeration --listOfEnumValues=closed,active,pending && 
ng serve
```


**🎉🎉🎉 Congratulations! You have made your first web application in no time! 🎉🎉🎉**
{: .notice--info}