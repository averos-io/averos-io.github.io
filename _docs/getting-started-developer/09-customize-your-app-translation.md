---
title: "Multi-Languages Application - Averos Translation"
permalink: /averos/getting-started-developer/customize-your-application-translation/
excerpt: "Let your application speaks languages!"
toc: true
toc_sticky: true
---

### **I. Introduction**

So far, you have implemented all of your business requirements and generated your **ToDoApplication**.<br/>
Your default application language is `English`. Obviously, none english speakers will not understand your application.<br/> 
but, what if you decide to target other markets that dont speak `English` ? <br/>

Well, you should probably consider re-writing the whole application display in your target language ? Or shouldn't you ?<br/>

What if you want your application to support more than two languages ?<br/>
Should you re-write an application instance for each language ?<br/>

Well, believe it or not, your **ToDoApplication** already supports **multi-language**!<br/>
Better! Learning new languages does not require any additional code into your application. <br/> 

Now your application is ready, what if you take it to the next level and let it speak multiple languages so that you can target a wider audience ?<br/>

Sounds brilliant ? Then let's GO!

For the sake of this tutorial, we are going to add `French` support to our `ToDoApplication`.<br/>

Let's go ahead and learn **French**!<br/>

>🔖 Note that `averos framework` currently supports 11 languages (discribed below) out of the box; so feel free to carry on with whatever additional language from that list instead of **French**.<br/>
{: .notice--info}

### **II. Add a New Language Support**

The current **averos framework** version supports these **11 languages** out of the box.
<br/>

| **Supported Language** | **Language Code** |
| ------ | ------ | 
| Arabic     [ 🇹🇳 ] | `ar` |
| Chinese    [ 🇨🇳 ] | `cn` |
| English    [ 🇺🇸 ] | `en` |
| Spanish    [ 🇪🇸 ] | `es` |
| French     [ 🇫🇷 ] | `fr` |
| German     [ 🇩🇪 ] | `de` |
| Japanese   [ 🇯🇵 ] | `jp` |
| Dutch      [ 🇳🇱 ] | `nl` |
| Norwegian  [ 🇳🇴 ] | `no` |
| Russian    [ 🇷🇺 ] | `ru` |
| Swedish    [ 🇸🇪 ] | `se` |

<br/>

This means that the default user interfaces, including labels, actions, validation messages, actions messages and domain values, are already translated in these languages.<br/>

`Averos framework` provides a set of `workflow commands` that handle translation configuration.<br/>
Besides, `averos-translation` module could be used as a standalone multi-language enabler for any `angular` application; however we will not delve into this topic in this tutorial.<br/>

Shall we start adding `French` support to our `ToDoApplication` ? <br/>

In order to add a new language support to your application, **Averos** provides the workflow command `add-language`.

Go ahead and execute the following command. 
Do not forget to update `languageCode` command parameter with your preferred language code. The list of language codes is mentioned above.

```bash
    ng g @wiforge/averos:add-language --languageCode=fr
```
<br/>
The command output should look like the following:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/34-add-language.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/34-add-language.png" alt="Add New Language">
      <figcaption>Add New Language</figcaption>
  </a>
</figure>


By the end of the workflow execution, Your application will be able to speak french at a beginner level.<br/>
This means that all generated default user interfaces-including default labels, default actions, default validation messages, default process messages and default domain values- are already translated in `French`.<br/>
{: .notice--info}


Now we have added `French` support to our `ToDoApplication`, let's look at our application and see what have changed since the last time we looked at it.<br/>

Go ahead and re-build/re-deploy your application by following these steps:<br/>
   >  **1.** shutdown the running server `http-server`<br/>
      **2.** build and deploy `ToDoApplication` by running the following command: <br/>  
   >
   ```bash
   ng build ToDoApplication && http-server -p 8081 -c-1 dist/to-do-application
   ```

Once **ToDoApplication** is up and running, go ahead navigate to [http://localhost:8081](http://localhost:8081) <br/>

Here is what your application looks like:<br/>


<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/35-french-language-added.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/35-french-language-added.png" alt="French language is now available">
      <figcaption>French language is now available</figcaption>
  </a>
</figure>

The first thing you will notice is the new `French` flag which was added to the list of supported languages, available in the top right upper menu.<br/>

Go ahead and switch to your new language by selecting the appropriate flag.<br/>

Here is what the application looks like:

<figure align="center">
	<a href="{{ site.baseurl }}/assets/tutorial/developer/35-french-language-added.png">
    <img src="{{ site.baseurl }}/assets/tutorial/developer/35-french-language-added.png" alt="ToDoApplication - Speaks French">
      <figcaption>ToDoApplication - Speaks French</figcaption>
  </a>
</figure>

Notice the date which is written in `French`.<br/>

Now let's look at these default `averos components`: `View Component`, `Edit Component`, `Search Component`, `Default Sign in Component` and `Default Register Component`. <br/>

<div style="display: flex;flex-direction: row;justify-content: space-between;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/37-edit-layout-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/37-edit-layout-french.png" alt="Edit/Create Component - French">
        <figcaption>Edit/Create Component - French</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/38-view-layout-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/38-view-layout-french.png" alt="View Component - French">
        <figcaption>View Component - French</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/39-search-layout-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/39-search-layout-french.png" alt="Search Component - French">
        <figcaption>Search Component - French</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/40-login-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/40-login-french.png" alt="Default Sign In Component - French">
        <figcaption>Default Sign In Component - French</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/41-register-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/41-register-french.png" alt="Default Register Component - French">
        <figcaption>Default Register Component - French</figcaption>
    </a>
  </figure>
</div>
</div>


Notice that the following items have been already translated for you:
- action button labels
- default layout labels
- default application messages (try to create a new Task for example and check the message)
- entities' displayed values
- default sign in and register Component


Still, our **`entity attributes names`**, our **`menu labels`** and our **`use cases labels/titles`** have not been translated yet!<br/> 

Let's improve our application vocabulary and teach it new French words! 

### **III. Teach your application New Words**

With `Averos Framework`, your application can be tought new words related to its echosystem.<br/>

From **`components and use cases labels/titles`**, to **`entities and members labels`** throughout **`action labels`**; every thing can be tought to your application in a new language.<br/>

OK! Let's do this!<br/>

In order to teach your application new words in a specific language, **Averos** provides the following workflow command:

```bash
    ng g @wiforge/averos:add-translation-entry --key=[your Word generic id] --value=[Your word in the target language] --lang=[the target language]
```

>🚩 The command parameter **key** is described as the most natural, canonical word designation that identifies a specific element to be translated (ex. `todoarea.name` / `uc.create.todotask` / `uc.edit.todotask.title`).<br/>
   `Averos Framework` uses the following convention in order to identify its objects echosystem:
   - **Entity**
     - the entity name is defined by it's class name in lowercase (ToDoTask entity ==> `translationKey = todotask`)
     - entity members are defined by their names in lower case prefixed by their parent entity id (ex. ToDoTask.name ==> `translationKey = todotask.name`)
   - **use cases**: All use case `translationKeys` starts with `uc.[action]` followed by the entity name in lower case and the target position. The target position could be either ethe `title` or a `label` to show in the subtitle. `action` on the other hand can be one of the followinf values: `create`, `edit`, `view`, `delete`.
     - **search use case**: uses the following pattern: `uc.search.[entityNameInLowerCase].[title | label]` (ex. `uc.search.todotask.title`)
     - **edit use case**: uses the following pattern: `uc.edit.[entityNameInLowerCase].[title | label]` (ex. `uc.edit.todotask.label`)
     - **create use case**: uses the following pattern: `uc.create.[entityNameInLowerCase].[title | label]` (ex. `uc.create.todotask.title`)
   - **menu**:
     - **menuItem**: All menu items traslationKeys starts with `menu.` followed by the entity class name in lowercase followed by the action if any. (ex. a menuItem that leads to the creation of an entity named `ToDoTask` will have the following `translationKey`: `menu.todotask.add`). The grouping parent menu will have the following `translationKey`: `menu.todotask`.
     Thus, Menu item translation keys will follow the patter `menu.${entityNameInLowerCase}.[action]` where action is optional.
{: .notice--info}


Now you know how to teach your application new words in different language, go ahead and try to teach it how to say _"Search a Task"_ in `French` (or in whatever language you proceeded with) by executing the following commands:<br/>

ℹ️ Note that the first command will update the `Search ToDoTask Use Case Title` in french language; whereas the second one will update the `menu link item label` related to the previous use case also in French.
{: .notice--info}


```bash 
   ng g @wiforge/averos:add-translation-entry --key=uc.search.todotask.title --value='Rechercher des Tâches' --lang=fr

   ng g @wiforge/averos:add-translation-entry --key=menu.todotask.search --value='Recherche' --lang=fr
```
<br/>
The output of both commands should look like the following:

<figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/42-add-translation-entry.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/42-add-translation-entry.png" alt="Add Translation Entry - Command Output">
        <figcaption>Add Translation Entry - Command Output</figcaption>
    </a>
  </figure>

Now, let rebuild and redeploy our application.<br/>

Here is what the application looks like after learning these two words:

<figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/43-add-translation-entry-todoapplication-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/43-add-translation-entry-todoapplication-french.png" alt="ToDoApplication - French">
        <figcaption>ToDoApplication - French</figcaption>
    </a>
</figure>


Let's switch to `English` and see what it looks like:

<figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/44-todoapplication-english.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/44-todoapplication-english.png" alt="ToDoApplication - English">
        <figcaption>ToDoApplication - English</figcaption>
    </a>
</figure>


>If you want to change the default `English` labels as well just use the same command with the appropriate language code.<br>
>
>_Example_:
>```bash
>ng g @wiforge/averos:add-translation-entry --key=menu.todotask.search --value='Search' --lang=en
>```

Finally, go ahead and execute the following commands to finalize your application learning.<br/>

```bash
ng g @wiforge/averos:add-translation-entry --key=todoarea.todotasks --value='Tâches' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.status --value='Etat de la tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.name --value='Nom' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.description --value='Description' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.createdat --value='Date de Création' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.name --value='Nom' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.description --value='Description' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.createdat --value='Date de Création' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.updatedat --value='Date de mise à jour' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.updatedat --value='Date de mise à jour' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.create.todoarea.title --value='Créer un domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.create.todoarea.label --value='Details du domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.edit.todoarea.title --value='Editer un domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.edit.todoarea.label --value='Détail du domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.view.todoarea.title --value='Consulter un domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.view.todoarea.label --value='Details du domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.search.todoarea.title --value='Recherche de domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.search.todoarea.label --value='Critères de recherche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todoarea --value='Domaine' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todoarea.search --value='Rechercher' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todoarea.add --value='Ajouter' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.create.todotask.title --value='Créer Une Tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.create.todotask.label --value='Détails de la tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.edit.todotask.title --value='Editer une tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.edit.todotask.label --value='Détails de la tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.view.todotask.title --value='Consulter les Tâches' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.view.todotask.label --value='Détails de la Tâche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todotask --value='Tâches' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=menu.todotask.add --value='Ajouter' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=uc.search.todotask.label --value='Critères de Recherche' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.createdby --value='Créateur' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todotask.updatedby --value='Modificateur' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.createdby --value='Créateur' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.createdby --value='Créateur' --lang=fr && ng g @wiforge/averos:add-translation-entry --key=todoarea.updatedby --value='Modificateur' --lang=fr
```

**Congratulations! Your application now speaks French fluently!**
{: .notice--info}

<br/>

Let's rebuild and redeploy our application, and see what it looks like:

   >  **1.** shutdown the running server `http-server`<br/>
      **2.** build and deploy `ToDoApplication` by running the following command: <br/>  
   >
   ```bash
   ng build ToDoApplication && http-server -p 8081 -c-1 dist/to-do-application
   ```


Here is what our application now looks like (Everything is almost translated into the new language you chose-`French` in my case):

<div style="display: flex;flex-direction: row;justify-content: space-between;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/45-todoarea-create-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/45-todoarea-create-french.png" alt="Create ToDoArea - French">
        <figcaption>Create ToDoArea - French</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/46-todoarea-created-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/46-todoarea-created-french.png" alt="ToDoArea Created - French Message">
        <figcaption>ToDoArea Created - French Message</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/47-todoarea-search-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/47-todoarea-search-french.png" alt="Search ToDoArea - French">
        <figcaption>Search ToDoArea - French</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/48-todoarea-edit-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/48-todoarea-edit-french.png" alt="Edit ToDoArea - French">
        <figcaption>Edit ToDoArea - French</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/49-todotask-create-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/49-todotask-create-french.png" alt="ToDoArea Create - French">
        <figcaption>ToDoTask Create - French</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/50-todotask-search-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/50-todotask-search-french.png" alt="Search ToDoTask - French">
        <figcaption>Search ToDoTask - French</figcaption>
    </a>
  </figure>
</div>
</div>

You might notice that almost every label and title available in your application have been translated into `French`. <br/>

Now let's see another cool feature regarding entity values translation. Shall we ?


### **IV. Take Translation Even Further - Combo Values Translation**

Remember, we defined the member `status` of type `enumeration` in the entity `ToDoTask` as a set of pre-defined values, namely, `Active`, `Closed` and `New`. <br/>

Do you recall how this member is displayed in a `create/edit` layout ? <br/>
In a combo`ComboBox`! Yes!<br/>

Here is a reminder on what the member `status` of type `enumeration` looks like in `create/edit` layouts ?

<div style="display: flex;flex-direction: row;justify-content: space-between;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/51-todotask-status-create-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/51-todotask-status-create-french.png" alt="STATUS display in a CREATE layout - French">
        <figcaption>STATUS display in a CREATE layout - French</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/52-todotask-status-edit-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/52-todotask-status-edit-french.png" alt="STATUS display in an EDIT layout - French">
        <figcaption>STATUS display in an EDIT layout - French</figcaption>
    </a>
  </figure>
</div>
</div>

>ℹ️ Note that the defined values of the `status` member are displayed **as is** in `create` and `edit` layouts.<br/>

Since `status` has a meaning, it is worth displaying it in the users' language.<br/>
Naturally, users tend to spend much time with applications they understand but do not return to applications they do not understand.<br/>

Bringing a comprehensible application content to users, has the potential to considerably improve the user experience.<br/> 

So, how about we change that member content into something `French` users would understand better ?<br/>

Sound good ? Let's doi it then!<br/>

we are aiming to display a meaningful content for each `status` value instead of displaying the member values as they are defined.<br/>
Fortunately, `averos framework` comes handy for such a requirement.<br/>

>ℹ️ Note that when you create a member of type `enumeration` with a default set of values using `averos command workflow`, **averos frameworks** creates translation keys for each value in the default set.<br/>
Translation keys for `enumeration` values are created according to the following pattern:<br/>
> ```properties
> [entityname].lowercase().[memberName].lowercase().[enum_Value].uppercase()
> ```
> This means that if we want to create translations for the the three `status` values (`Active`, `Closed` and `New`) we will need to address the following translation keys:
> - `todotask.status.ACTIVE`
> - `todotask.status.CLOSED`
> - `todotask.status.NEW`
{: .notice--info}


In light of the preceding, let's create meaningful `French` translation values for the following translation keys:
- `todotask.status.ACTIVE`
- `todotask.status.CLOSED`
- `todotask.status.NEW`

Go ahead and execute the following three commands:

```bash
ng g @wiforge/averos:add-translation-entry --key=todotask.status.ACTIVE --value='Tâche Activée' --lang=fr 
```

```bash
ng g @wiforge/averos:add-translation-entry --key=todotask.status.CLOSED --value='Tâche Finalisée' --lang=fr 
```

```bash
ng g @wiforge/averos:add-translation-entry --key=todotask.status.NEW --value='Tâche Initiée' --lang=fr 
```

Let's rebuild and redeploy our application, and see how the member `status` is displayed now:

   >  **1.** shutdown the running server `http-server`<br/>
      **2.** build and deploy `ToDoApplication` by running the following command: <br/>  
   >
   ```bash
   ng build ToDoApplication && http-server -p 8081 -c-1 dist/to-do-application
   ```

Here is what the member `status` looks like in `create/edit` layouts ?

<div style="display: flex;flex-direction: row;justify-content: space-between;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/53-todotask-translated-status-create-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/53-todotask-translated-status-create-french.png" alt="Translated STATUS display in a CREATE layout - French">
        <figcaption>Translated STATUS display in a CREATE layout - French</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/developer/54-todotask-translated-status-edit-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/developer/54-todotask-translated-status-edit-french.png" alt="STATUS display in an EDIT layout - French">
        <figcaption>Translated STATUS display in an EDIT layout - French</figcaption>
    </a>
  </figure>
</div>
</div>

>🚩 So far, we have only translated fixed values related to `enumerations`. <br/>
In some cases, `enumeration` values are translated and displayed dynamically, depending on specific criteria.<br/>
This could be done using `averos domain controllers` which we won't go into in this tutorial.<br/>
Please refer to the documentation for further details about **Averos Domain Controllers**.
{: .notice--success}

Nice work! Your new application is humain friendly, supports multilanguage and cares about user experience.<br/>
You will find that, switching the application language to `English`, will modify the whole application language context and display almost instantly. <br/>

`Averos Framework` supports up to 11 languages out of the box, so you might want to experience with the framework by adding more languages and exposing your application to even wider audience.<br/>



**🎉🎉🎉 Congratulations and thank you for finishing this tutorial! 🎉🎉🎉**<br/> <br/>
Your **ToDoApplication** is now fully functional and ready to use!
<br/>
In this step-by-step tutorial you have first designed your **`ToDoApplication`** and defined your business requirement.<br/>
Then, you have used `averos framework` to generate your application entities along with relevant use cases according to your business requirements. <br/>
Finally, you have added a new language to your application making it available for a wider audience. <br/><br/>
In the next optional chapter, we are going to summarize what we have done so far.<br/>
Additionally, you will have the opportunity to learn how you can achieve all the things we have done in this tutorial in one shot.<br/>
{: .notice--info}


🔖 Please note that, since this tutorial is dedicated to developers, we have not mentioned [**`averos designer`**](https://appbuilder.wiforge.com/averosdesigner "averos designer") for **nocode** application development.<br/>
But if you are willing to know how `averos framework` addresses **nocode** topic, then you can check out our [tutorial]({{"/averos/getting-started-c-developer/" | relative_url }} "Tutorial For Citizen Developers") dedicated to **citizen developers**, into which, a simple user will create the same `ToDoApplication` you created in this tutorial using [**`averos designer`**](https://appbuilder.wiforge.com/averosdesigner "averos designer").<br/><br/>
**Hope to see you there!**
{: .notice--success}