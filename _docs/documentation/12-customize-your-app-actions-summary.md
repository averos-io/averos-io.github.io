---
title: "Customize your application"
permalink: /averos/documentation/customize-your-app-actions-summary/
excerpt: "Customize your application - Actions Summary"
toc: true
---

## **VI- Actions Summary**

### 1. **Install averos backend mock**
   
   ```bash
    git clone https://github.com/averos-io/averos-backend-mock && cd averos-backend-mock && npm install && npm start
   ```


### 2. **create a new angular application**
   
   ```bash
    npm i -g @angular/cli && ng new my-averos-web-application --style=scss --routing --strict && cd my-averos-web-application
   ```

 >**🚩 Note:**please refer to [**angular version compatibility**]({{"/averos/documentation/latest-version/#angular-compatibility" | relative_url}} "angular version compatibility") section, for further angular versions compatibility information support.
 {: .notice--danger}

### 3. **add averos support**

     ng add @wiforge/averos --applicationName=myAverosWebApplication --auth_backend_url=http://localhost:3333 --defaultLanguageCode=en --defaults --skip-confirmation

> - `--defaults`: is an angular option that disables interactive input prompts for    options with a default.
> - `--skip-confirmation`: is an angular option that forces skipping asking a confirmation prompt before installing and executing the package.
{: .notice--info}

### 4. **initiate new averos crud use cases for both ToDoArea and ToDoTask entities**
    
     ng g @wiforge/averos:acrud --ename=ToDoArea && ng g @wiforge/averos:acrud --ename=ToDoTask

### 5. **Add entities composite relationship support**

      ng g @wiforge/averos:acm --ename=ToDoArea --fename=ToDoTask --fieldRelationType=OneToMany --member-update-strategy=multiple

      ng g @wiforge/averos:acm --ename=ToDoTask --fename=ToDoArea --fieldRelationType=ManyToOne

### 6. **Add a new simple type member - taskStatus - to ToDoTask entity**

   ```bash
   ng g @wiforge/averos:asm --ename=ToDoTask --mname=taskStatus --memberType=enumeration --listOfEnumValues=closed,active,pending
   ``` 

### 7. **Teach your application new languages**

   ```bash
   ng g @wiforge/averos:add-translation-entry --key=[your Word generic id] --value=[Your word in the target language] --lang=[the target language]
   ``` 

###  8. **Run your application**

    ng serve -o

<br/>

**OR** 

### 8. **All-In-One**

**Run the averos backend mock:**

```bash
    git clone https://github.com/averos-io/averos-backend-mock && cd averos-backend-mock && npm install && npm start
```
<br/>

**Generate a Web Application in only `5 minutes` by executing the following command:**

```bash
    npm i -g @angular/cli && ng new my-averos-web-application --style=scss --routing --strict && cd my-averos-web-application && ng add @wiforge/averos --applicationName=myAverosWebApplication --auth_backend_url=http://localhost:3333 --defaultLanguageCode=en --defaults --skip-confirmation && ng g @wiforge/averos:acrud --ename=ToDoArea && ng g @wiforge/averos:acrud --ename=ToDoTask && ng g @wiforge/averos:acm --ename=ToDoArea --fename=ToDoTask --fieldRelationType=OneToMany --member-update-strategy=multiple && ng g @wiforge/averos:acm --ename=ToDoTask --fename=ToDoArea --fieldRelationType=ManyToOne && ng g @wiforge/averos:asm --ename=ToDoTask --mname=taskStatus --memberType=enumeration --listOfEnumValues=closed,active,pending && ng serve -o
```

<br/>

<p align="center">
<img width="1024" height="576" src="{{ site.baseurl }}/assets/inaction/averos.gif">
</p>
<br/> 

**🎉🎉🎉 Congratulations! You have made your first web application in no time! 🎉🎉🎉**
{: .notice--info}