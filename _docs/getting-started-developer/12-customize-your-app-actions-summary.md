---
title: "Customize your application"
permalink: /averos/getting-started-developer/customize-your-app-actions-summary/
excerpt: "Customize your application - Actions Summary"
toc: true
---

## **I. Step-By-Step Actions Summary**

Here is a summary of this tutorial steps to create a fully functional web application named **`ToDoApplication`**.<br/>

### 1. **Install & Run averos backend mock**
   
   ```bash
    git clone https://github.com/averos-io/averos-backend-mock && cd averos-backend-mock && npm install && npm start
   ```


### 2. **Install angular/cli anCreate a new angular application**
   
   ```bash
    npm i -g @angular/cli && ng new ToDoApplication --style=scss --routing --strict && cd ToDoApplication
   ```

 >**🚩 Note:**please refer to [**angular version compatibility**]({{"/averos/latest-version/#angular-compatibility" | relative_url}} "angular version compatibility") section, for further angular versions compatibility information support.
 {: .notice--danger}

### 3. **add averos support**

   ```bash
      ng add @wiforge/averos --application-name=cd ToDoApplication --enable-authentication --authentication-provider=custom --default-language-code=en --defaults --skip-confirmation
   ```

> - `--defaults`: is an angular option that disables interactive input prompts for    options with a default.
> - `--skip-confirmation`: is an angular option that forces skipping asking a confirmation prompt before installing and executing the package.
{: .notice--info}

### 4. **initiate new averos crud use cases for both ToDoArea and ToDoTask entities**
    
     ng g @wiforge/averos:advanced-crud --ename=ToDoArea && ng g @wiforge/averos:advanced-crud --ename=ToDoTask

### 5. **Add entities composite relationship support**

      ng g @wiforge/averos:add-composite-member --ename=ToDoArea --fename=ToDoTask --field-relation-type=OneToMany --member-update-strategy=multiple

      ng g @wiforge/averos:add-composite-member --ename=ToDoTask --fename=ToDoArea --field-relation-type=ManyToOne

### 6. **Add a new simple type member - taskStatus - to ToDoTask entity**

   ```bash
   ng g @wiforge/averos:add-simple-member --ename=ToDoTask --mname=taskStatus --memberType=enumeration --list-of-enum-values=closed,active,pending
   ``` 

### 7. **Add a new language - French**

   ```bash
   ng g @wiforge/averos:add-language --language-code=fr
   ``` 

### 8. **Teach your application Words in your new added language**

   ```bash
ng g @wiforge/averos:add-translation-entry --key=todoarea.todotasks --value='Tâches' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.status --value='Etat de la tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.name --value='Nom' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.description --value='Description' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.createdat --value='Date de Création' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.name --value='Nom' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.description --value='Description' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.createdat --value='Date de Création' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.updatedat --value='Date de mise à jour' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.updatedat --value='Date de mise à jour' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.create.todoarea.title --value='Créer un domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.create.todoarea.label --value='Details du domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.edit.todoarea.title --value='Editer un domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.edit.todoarea.label --value='Détail du domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.view.todoarea.title --value='Consulter un domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.view.todoarea.label --value='Details du domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.search.todoarea.title --value='Recherche de domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.search.todoarea.label --value='Critères de recherche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todoarea --value='Domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todoarea.search --value='Rechercher' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todoarea.add --value='Ajouter' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.create.todotask.title --value='Créer Une Tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.create.todotask.label --value='Détails de la tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.edit.todotask.title --value='Editer une tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.edit.todotask.label --value='Détails de la tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.view.todotask.title --value='Consulter les Tâches' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.view.todotask.label --value='Détails de la Tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todotask --value='Tâches' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todotask.add --value='Ajouter' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.search.todotask.title --value='Rechercher des Tâches' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.search.todotask.label --value='Critères de Recherche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todotask.search --value='Recherche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.createdby --value='Créateur' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.updatedby --value='Modificateur' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.createdby --value='Créateur' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.updatedby --value='Modificateur' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.status.ACTIVE --value='Tâche Activée' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.status.CLOSED --value='Tâche Finalisée' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.status.NEW --value='Tâche Initiée' --lang=fr
   ``` 

###  8. **Build & Deploy your application to `http-server`**

    ```bash
    npm install http-server && ng build ToDoApplication && http-server -p 8080 -c-1 dist/to-do-application
    ```

<br/>


## **II. Create & Deploy `ToDoApplication` in 3 Steps**

### **Step1: prerequisites**

```bash
   npm i -g @angular/cli && git clone https://github.com/averos-io/averos-backend-mock && cd averos-backend-mock && npm install && npm start
```
<br/>

### **Step2: Generate your application**

```bash
   ng new ToDoApplication --style=scss --routing --strict && cd ToDoApplication && ng add @wiforge/averos --application-name=ToDoApplication --enable-authentication --authentication-provider=custom --default-language-code=en --defaults --skip-confirmation && ng g @wiforge/averos:averos-entity --name=ToDoArea --sname=ToDoAreaService --defaults && ng g @wiforge/averos:averos-entity --name=ToDoTask --sname=ToDoTaskService --defaults && ng g @wiforge/averos:advanced-crud --ename=ToDoArea --defaults && ng g @wiforge/averos:create-entity-uc --name=CreateToDoTask --ename=ToDoTask --defaults && ng g @wiforge/averos:search-entity-uc --name=SearchToDoTask --ename=ToDoTask --defaults && ng g @wiforge/averos:create-page --name=MyPublicPage --target-menu=top --space=public --update-route-menu --defaults && ng g @wiforge/averos:add-composite-member --ename=ToDoArea --fename=ToDoTask --field-relation-type=OneToMany --member-update-strategy=single && ng g @wiforge/averos:add-simple-member --ename=ToDoTask --mname=status --member-type=enumeration --list-of-enum-values=Active,Closed,New && ng g @wiforge/averos:add-language --language-code=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.todotasks --value='Tâches' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.status --value='Etat de la tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.name --value='Nom' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.description --value='Description' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.createdat --value='Date de Création' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.name --value='Nom' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.description --value='Description' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.createdat --value='Date de Création' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.updatedat --value='Date de mise à jour' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.updatedat --value='Date de mise à jour' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.create.todoarea.title --value='Créer un domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.create.todoarea.label --value='Details du domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.edit.todoarea.title --value='Editer un domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.edit.todoarea.label --value='Détail du domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.view.todoarea.title --value='Consulter un domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.view.todoarea.label --value='Details du domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.search.todoarea.title --value='Recherche de domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.search.todoarea.label --value='Critères de recherche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todoarea --value='Domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todoarea.search --value='Rechercher' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todoarea.add --value='Ajouter' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.create.todotask.title --value='Créer Une Tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.create.todotask.label --value='Détails de la tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.edit.todotask.title --value='Editer une tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.edit.todotask.label --value='Détails de la tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.view.todotask.title --value='Consulter les Tâches' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.view.todotask.label --value='Détails de la Tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todotask --value='Tâches' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todotask.add --value='Ajouter' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.search.todotask.title --value='Rechercher des Tâches' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.search.todotask.label --value='Critères de Recherche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todotask.search --value='Recherche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.createdby --value='Créateur' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.updatedby --value='Modificateur' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.createdby --value='Créateur' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.updatedby --value='Modificateur' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.status.ACTIVE --value='Tâche Activée' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.status.CLOSED --value='Tâche Finalisée' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.status.NEW --value='Tâche Initiée' --lang=fr && ng g @wiforge/averos:averos-config --id=ToDoAreaService --type=service --host=localhost --port=3333 --protocol=http --endpoint=/todoareas --defaults && ng g @wiforge/averos:averos-config --id=ToDoTaskService --type=service --host=localhost --port=3333 --protocol=http --endpoint=/todotasks --defaults && ng g @wiforge/averos:averos-config --id=AuthService --type=service --host=localhost --port=3333 --protocol=http --endpoint=/auth/ --defaults && ng g @wiforge/averos:averos-config --id=UserService --type=service --host=localhost --port=3333 --protocol=http --endpoint=/uapi/users/ --defaults
```
<br/>

### **Step3: Build & Deploy your application to `http-server`**

```bash
npm install http-server && ng build ToDoApplication && http-server -p 8080 -c-1 dist/to-do-application
```

**🎉🎉🎉 Congratulations! You created your `ToDoApplication` in NO TIME ! 🎉🎉🎉**
{: .notice--info}


ℹ️ This tutorial was intended to give developers an overview of the main capabilities offered by `averos framework`.<br/>
Nevertheless, a lot of topics and advanced features was not mentioned in this tutorial.<br/>
These features could the subject of other dedicated tutorials in the future.<br/>
Also, it is worth mentioning that since you are using `averos framework`, your `ToDoApplication` is by default fully responsive and progressive-ready.<br/>
You might test your application on your mobile so that you take a look at what the responsive layout looks like on mobile devices.<br/><br/>
If you are interested in lowcode, you might want to know more about how `averos framework` is used in lowcode development by checking out our step-by-step tutorial for citizen developers available through the link below.<br/><br/>
[Averos Tutorial For Citizen Developers]({{ "/averos/getting-started-c-developer/" | relative_url }} "Averos Tutorial For Citizen Developers"){: .btn .btn--green .btn--small}
{: .notice--success}

<br/>

------

<div style="display: flex;flex-direction: row;justify-content: center;"> 
   <div style="width: 22em;" align="center">
         <div id="averos-anim"></div>
   </div>
</div>