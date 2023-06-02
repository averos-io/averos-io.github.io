---
title: "Explore Your Application"
permalink: /averos/getting-started-c-developer/explore-application/
excerpt: "Create Service Configurations"
toc: true
toc_sticky: true
---

## **I. Introduction**

Congratulations! Your application is now ready to be explored.<br/>
Remember, once you get used to the whole process, developing such an applications becomes next to nothing.<br/>

Now, let's look at what you have created in details!<br/>

Since your application supports two context modes, namely `public mode` and `private mode` we will organize this trip according to these two context modes.<br/>

Let's start examining the `public mode`.<br/>

🙋‍♂️Since i prefer `dark mod`e, all my print screens will be in that mode, but you are free to carry on with the `light mode` if you wish to.<br/>
{: .notice--success}

## **II. Public Context**

As we mentioned in this tutorial, `public context` is the application context where  anonymous unauthenticated users could use the application features.<br/>
lets see what is already available in this mode.<br/>

### **1. Default Sign In and Sign Up Pages**

These default pages are availables publicly.<br/>
here is what they look like:<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/70-todoapplication-signup.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/70-todoapplication-signup.png" alt="ToDoApplication - Sign Up">
        <figcaption>ToDoApplication - Sign Up</figcaption>
    </a>
  </figure>
</div>

<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/71-todoapplication-signin.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/71-todoapplication-signin.png" alt="ToDoApplication - Sign In">
        <figcaption>ToDoApplication - Sign In</figcaption>
    </a>
  </figure>
</div>
</div>

Later in this section, we are going to use these both pages to `register` a new user and to `sign into` his account in the `private context`.<br/>

### **2. My Public Page**

Remember, in the requirement phase, one of our requirements was to create a `public blank page`.<br/> 
This page should be accessible publicly via a link to the default application top menu.<br/>

Here is what our public page along with its menu entry look like:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/72-todoapplication-public-blank-page.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/72-todoapplication-public-blank-page.png" alt="ToDoApplication - Public Blank Page">
        <figcaption>ToDoApplication - Public Blank Page</figcaption>
    </a>
  </figure>
</div>
</div>

Note that your application support `English` and a second language as well (`French` in my case).

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/73-todoapplication-French.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/73-todoapplication-French.png" alt="ToDoApplication - French Supported">
        <figcaption>ToDoApplication - French Supported</figcaption>
    </a>
  </figure>
</div>
</div>

## **II. Private Context**

### **1. Authentication Feature**

Let's verify that our application supports `authentication`.<br/>

Go ahead and `sign in` with whatever user comes to your mind.<br/>
try this one for example:
>-  username = `testUser`
>-  password = `testUser00`

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/74-signin-error-French.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/74-signin-error-French.png" alt="Sign In Error - French">
        <figcaption>Sign In Error - French</figcaption>
    </a>
  </figure>
</div>
</div>


Notice that we are unable to sign into our application using unknown users.<br/>

One more thing you should notice here; it's the fact that default messages already comes in the current application language. <br/>
Let's switch the language to `Eglish` and see whether the error message changes when we attempt to sign in with an unknown user or not.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/75-signin-error-English.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/75-signin-error-English.png" alt="Sign In Error - English">
        <figcaption>Sign In Error - English</figcaption>
    </a>
  </figure>
</div>
</div>

Notice that the error message now comes in `English`.<br/>
All the framework component are already translated for you by default, not only messages.<br/>

However, you might override these translation if you wish using `Translation Entries`.<br/>

>💡 Please note that `averos framework` supports up to 11 languages out of the box.<br/>
{: .notice--info}


Well, it seems that our application does not authorize anonymous user to access private spaces.<br/>
So, let's register a new user and sign into the private context once again.<br/>

And for the fun, let's register the unknown user which we used earlier.<br/>

Go ahead and click on `Sign Up` then create a new user with the following credentials:

>-  username = `testUser`
>-  email = `testuser@test.com`
>-  password = `testUser00`

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/76-signup-English.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/76-signup-English.png" alt="Sign Up">
        <figcaption>Sign Up</figcaption>
    </a>
  </figure>
</div>
</div>

Click on `submit`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/77-signup-success-English.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/77-signup-success-English.png" alt="User Registered - English">
        <figcaption>User Registered - English</figcaption>
    </a>
  </figure>
</div>
</div>

Our new user is now registered successfully.<br/>

Let's go ahead and `sign into` our private space.



<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/78-signin-success-English.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/78-signin-success-English.png" alt="Private Space - English">
        <figcaption>Private Space - English</figcaption>
    </a>
  </figure>
</div>
</div>

Welcome to your private space !<br/>

lets switch to `French` and see what happens.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/79-signin-success-French.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/79-signin-success-French.png" alt="Private Space - French">
        <figcaption>Private Space - French</figcaption>
    </a>
  </figure>
</div>
</div>

Great! This is what we have already expected!<br/>
Our menu comes in `French` along with default layout labels.<br/>

Let's change our `avatar`, shall we ?

Edit your profile using the button `number 1` then click on the button **number 2** as pointed out in the picture below:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/80-change-avatar.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/80-change-avatar.png" alt="My Profile - French">
        <figcaption>My Profile - French</figcaption>
    </a>
  </figure>
</div>
</div>

The `avatar selection panel` will pop up as described below:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/81-avatar-selection-panel.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/81-avatar-selection-panel.png" alt="Avatar Selection Panel">
        <figcaption>Avatar Selection Panel</figcaption>
    </a>
  </figure>
</div>
</div>

Go ahead and select your favorite avatar then click on `save`.<br/>


### **2. ToDoTask Use Cases**

Now, let's explore **`ToDoTask`** use cases.<br/>

Open the page identified by the menu link item `To Do Task > Search To Do Task`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/82-todotask-search-input-english.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/82-todotask-search-input-english.png" alt="ToDoTask - Search Input - English">
        <figcaption>ToDoTask - Search Input - English</figcaption>
    </a>
  </figure>
</div>
</div>

let's switch to `French`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/83-todotask-search-input-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/83-todotask-search-input-french.png" alt="ToDoTask - Search Input - French">
        <figcaption>ToDoTask - Search Input - French</figcaption>
    </a>
  </figure>
</div>
</div>

Notice how the entity `members` along with the use case `actions` has been translated to `French` as configured with **Averos Designer** using `Translation Entries`.<br/>

Now go ahead and fetch all ToDoTask object by clicking the `search` button.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/84-todotask-search-result.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/84-todotask-search-result.png" alt="ToDoTask - Search Result">
        <figcaption>ToDoTask - Search Result</figcaption>
    </a>
  </figure>
</div>
</div>

wow such empty!<br/>

Ok, let's create some Tasks then!

Go to `To Do Task` and click on the menu item link `Add To Do Task`. <br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/85-todotask-Create-english.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/85-todotask-Create-english.png" alt="ToDoTask - Create - English">
        <figcaption>ToDoTask - Create - English</figcaption>
    </a>
  </figure>
</div>
</div>

Do you remember the member `status` ?<br/>
We have seen that this member is of type `enumeration` and that it is described by the following fixed values: `Active`, `Closed` and `New`.<br/>
However, we did not configure a `translation entries` in `English` for these values. <br/>
That's way the list is displayed as is.<br/>

Now let's switch to `French`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/86-todotask-Create-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/86-todotask-Create-french.png" alt="ToDoTask - Create - French">
        <figcaption>ToDoTask - Create - French</figcaption>
    </a>
  </figure>
</div>
</div>

Notice how the use case `title`, the entity `members` and the use case `action labels` comes translated to `French`.<br/>  
Also we are expecting the member `status` to have its values translated to `French` as well.<br/>

Let's check it!<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/87-todotask-Create-status-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/87-todotask-Create-status-french.png" alt="ToDoTask - status- French">
        <figcaption>ToDoTask - status- French</figcaption>
    </a>
  </figure>
</div>
</div>


Great ! 🎉🎉<br/>
Everything was translated to `French` as configured and expected.<br/>

Now, let's create the following three tasks:
>- `Task1`
>- `This is my first Task`
>- `New` 

>- `Task2`
>- `This is my second Task`
>- `New` 

>- `Task3`
>- `This is my third Task`
>- `New` 

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/88-todotask-task1.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/88-todotask-task1.png" alt="ToDoTask - Task1">
        <figcaption>ToDoTask - Task1</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/89-todotask-task2.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/89-todotask-task2.png" alt="ToDoTask - Task2">
        <figcaption>ToDoTask - Task2</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/90-todotask-task3.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/90-todotask-task3.png" alt="ToDoTask - Task3">
        <figcaption>ToDoTask - Task3</figcaption>
    </a>
  </figure>
</div>
</div>

Click on `save`

Notice how after saving a task the page automatically switch to the `view` layout with the possibility to either `edit` your saved entity or to `clone` it in case you would like to create a new instance.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/91-todotask-task3-clone.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/91-todotask-task3-clone.png" alt="ToDoTask - Clone">
        <figcaption>ToDoTask - Clone</figcaption>
    </a>
  </figure>
</div>
</div>

This behaviour comes handy especially when you have the possibility to create multiple instances without leaving the page.<br/>

After creating your `first task`, go ahead and use the `clone` action to create the remaining ones.<br/>


Now let's get back to `ToDoTask` `search` use case and fetch all the available `Tasks`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/92-todotask-search.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/92-todotask-search.png" alt="ToDoTask - Search">
        <figcaption>ToDoTask - Search</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/93-todotask-search-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/93-todotask-search-french.png" alt="ToDoTask - Search - French">
        <figcaption>ToDoTask - Search - French</figcaption>
    </a>
  </figure>
</div>
</div>

>🙋‍♂️ Notice how everything is translated to `French`.<br/>
{: .notice--success}

ℹ️ You might want to switch languages back and forth each time you select a page and verify that the translations are as expected.<br/>
{: .notice--info}


Brilliant!
This is the `search result` use case.<br/>
All our Tasks are there.<br/>

Besides, you can make the following actions without leaving this use case:
>-  create
>-  refresh
>-  export
>-  view
>-  edit
>-  delete

Go ahead, test your use case and have a walk through all the provided actions.<br/>


### **3. ToDoArea Use Cases**

Now, let's create an Area of interest as follows:<br/>

>-  `Area1`
>-  `My first Area of interest`

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/94-todoarea-create.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/94-todoarea-create.png" alt="ToDoArea - Create">
        <figcaption>ToDoArea - Create</figcaption>
    </a>
  </figure>
</div>
</div>

Click `save`. <br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/95-todoarea-view.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/95-todoarea-view.png" alt="ToDoArea - view">
        <figcaption>ToDoArea - view</figcaption>
    </a>
  </figure>
</div>
</div>

Your instance have been saved and you were taken to the `view` layout.<br/>

Now do not leave this page; there is one more thing we need to do.<br/>

Do you remember, in the design phase, we said that `ToDoArea` has a relationship with `ToDoTask` ?
This relationship is described by the fact that `ToDoArea` can contain zero, one or many `ToDoTask` instances.<br/>

Well, this relation is depicted by tha `tab` labeled `To Do Tasks` in the `Create` `ToDoArea` use case.<br/>

Let's assign `Task1` and `Task2` to `Area1`.<br/>

While in the previous `view` page click `edit`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/96-todoarea-edit.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/96-todoarea-edit.png" alt="ToDoArea - edit">
        <figcaption>ToDoArea - edit</figcaption>
    </a>
  </figure>
</div>
</div>

Click on the `tab` `To Do Tasks`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/97-todoarea-edit-relationship-english.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/97-todoarea-edit-relationship-english.png" alt="ToDoArea - edit relationship - English">
        <figcaption>ToDoArea - edit relationship - English</figcaption>
    </a>
  </figure>
</div>
</div>

Let's look at the `French` version of this page while we're at it.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/98-todoarea-edit-relationship-french.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/98-todoarea-edit-relationship-french.png" alt="ToDoArea - edit relationship - English">
        <figcaption>ToDoArea - edit relationship - French</figcaption>
    </a>
  </figure>
</div>
</div>

Brilliant!<br/>

Even the relationship name was translated to `French`.<br/>

Actually, that was expected since we have already configured a `traslation entry` in `French` for the relationship between `ToDoArea` and `ToDoTask`.<br/>

Still, it's always a relief when your application behave as expected.<br/>

Now go ahead and assign `Task1` and `Task2` to `Area1` by clicking on the button pointed out below:<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/99-todoarea-add-relationship.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/99-todoarea-add-relationship.png" alt="ToDoArea - Add ToDoTasks">
        <figcaption>ToDoArea - Add ToDoTasks</figcaption>
    </a>
  </figure>
</div>
</div>

Select `Task1` and `Task2` then click on `select many` button as displayed in the picture below:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/100-todoarea-add-relationship-select-many.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/100-todoarea-add-relationship-select-many.png" alt="ToDoArea - Add ToDoTasks - Select Many">
        <figcaption>ToDoArea - Add ToDoTasks - Select Many</figcaption>
    </a>
  </figure>
</div>
</div>

You should be taken to the following display:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/101-todoarea-add-relationship-instances.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/101-todoarea-add-relationship-instances.png" alt="ToDoArea - Add ToDoTasks - Select Many">
        <figcaption>ToDoArea - Add ToDoTasks - Select Many</figcaption>
    </a>
  </figure>
</div>
</div>

🙋‍♂️ Check the `save` button. <br/>
If it is disabled after adding `Task1` and `Task2` (like in my case!) just go to the `To Do Area Details` `tab` and update the `description` (add `v2` for example) in order to trigger the button update to `visible`.<br/>
{: .notice--info}

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/102-todoarea-add-relationship-save.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/102-todoarea-add-relationship-save.png" alt="ToDoArea - Add ToDoTasks - Save">
        <figcaption>ToDoArea - Add ToDoTasks - Save</figcaption>
    </a>
  </figure>
</div>
</div>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/103-todoarea-add-relationship-saved.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/103-todoarea-add-relationship-saved.png" alt="ToDoArea - Add ToDoTasks - Saved">
        <figcaption>ToDoArea - Add ToDoTasks - Saved</figcaption>
    </a>
  </figure>
</div>
</div>


Now, go ahead and fetch all `ToDoArea` object using the menu `To Do Area > Search To Do Area`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/104-todoarea-search.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/104-todoarea-search.png" alt="ToDoArea - Search">
        <figcaption>ToDoArea - Search</figcaption>
    </a>
  </figure>
</div>
</div>


Let's unassign `Task1` and assign `Task3` to `Area1`.<br/>

From the `Search Result`, click on `edit` button located in the table row actions.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/105-todoarea-search-edit.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/105-todoarea-search-edit.png" alt="ToDoArea - Search - Edit">
        <figcaption>ToDoArea - Search - Edit</figcaption>
    </a>
  </figure>
</div>
</div>

Click on the relationship `tab` and `remove` `Task1` from the list of assigned tasks using the action `remove` pointed out in the picture below:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/106-todoarea-unassign-task.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/106-todoarea-unassign-task.png" alt="ToDoArea - Unassign Task">
        <figcaption>ToDoArea - Unassign Task</figcaption>
    </a>
  </figure>
</div>
</div>

Assign `Task3` just like as you did earlier.<br/>
Update the `description` (by adding `v3` for example) and save your instance.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/107-todoarea-task3.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/107-todoarea-task3.png" alt="ToDoArea - Updated">
        <figcaption>ToDoArea - Updated</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/108-todoarea-updated.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/108-todoarea-updated.png" alt="ToDoArea - Updated Tasks">
        <figcaption>ToDoArea - Updated Tasks</figcaption>
    </a>
  </figure>
</div>
</div>


Now go ahead and fetch all `ToDoTask` instance as you did earlier.<br/>

Delete `Task3`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/109-todotask-delete.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/109-todotask-delete.png" alt="ToDoTask - Delete">
        <figcaption>ToDoTask - Delete</figcaption>
    </a>
  </figure>
</div>
</div>

Accept the confirmation message (which is also available in the second language that we have added).<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/110-todotask-delete-confirmation.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/110-todotask-delete-confirmation.png" alt="ToDoTask - Confirm Delete">
        <figcaption>ToDoTask - Confirm Delete</figcaption>
    </a>
  </figure>
</div>
</div>

Now, fetch again all the Tasks.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/111-todotask-deleted.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/111-todotask-deleted.png" alt="ToDoTask - Deleted">
        <figcaption>ToDoTask - Deleted</figcaption>
    </a>
  </figure>
</div>
</div>

Notice that `Task3` does not exist any more.<br/>

And...Voilaa! We are done! 🎉

ℹ️ Note that there is still topics which we haven't come across yet in this tutorial.<br/>
These topics will be discussed in next tutorials.<br/>
Advanced topics on the other hand, will require a fair amount of knowledge regarding software development.<br/>
But we think that what you have seen all along this tutorial is more than enough for you to start creating your applications.<br/>
{: .notice--info}


**🎉🎉🎉 Congratulations and thank you for finishing this tutorial! 🎉🎉🎉**<br/> <br/>
Your **ToDoApplication** is now fully functional and ready to use!
<br/>
In this step-by-step tutorial you have first designed your **`ToDoApplication`** and defined your business requirement.<br/>
Then, you have used **`Averos Designer`** to design your application entities along with relevant use cases according to your business requirements. <br/>
Finally, you had the opportunity to test and explore your application at its finest details.<br/>
You really must be proud of what you did ! 👏👏👏
{: .notice--info}



ℹ️ This tutorial was intended to give citizen developers an overview of the main capabilities offered by our lowcode platform **WiBuild** along with **Averos Designer**.<br/>
Nevertheless, a lot of topics and advanced features was not mentioned in this tutorial.<br/>
These features could the subject of other dedicated tutorials in the future.<br/>
Also, it is worth mentioning that since you are using `averos framework`, your generated applications are by default fully responsive and progressive-ready.<br/>
So, you might want to test your applications on your mobile so that you take a look at what the responsive layout looks like on mobile devices.<br/><br/>
Besides, if you are an experienced developer, with good knowledge of software development, you might want to know more about `averos framework` technical details by checking out our step-by-step tutorial for developers available via the link below.<br/><br/>
[Averos Tutorial For Developers]({{ "/averos/getting-started-developer/" | relative_url }} "Averos Tutorial For Citizen Developers"){: .btn .btn--green .btn--small}
{: .notice--success}

<br/>

------

<div style="display: flex;flex-direction: row;justify-content: center;"> 
   <div style="width: 22em;" align="center">
         <div id="averos-anim"></div>
   </div>
</div>