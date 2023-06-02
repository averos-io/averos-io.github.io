---
title: "Download & Run Your Application"
permalink: /averos/getting-started-c-developer/download-run-application/
excerpt: "Download & Run Your Application"
toc: true
toc_sticky: true
---

## I. Introduction

In this section we are going to download and run our application so expect some technical manipulations ahead; but rest assured there is nothing to worry about if you follow the steps exactly as mentioned.<br/>

You may (or may not) know that web applications runs only on servers.<br/>
So for you to run your application you will need to deploy it on a `web server`.<br/>

We have also mentioned that our application services are bound to their related `external service backends` via the `Service Configurations` which we configured in previous steps.<br/>
This means that `external service backends` should be running when our application is executed.<br/>

As a result, in order to run our **`ToDoApplication`** three things should be done beforehand:<br/>
>1.  Download your application from **WiBuild**
>2.  run the `external service backends` (identified by the `averos service backend mock`)
>3.  deploy your `ToDoApplication` to a `web server`



## II. Download your Application - ToDoApplication

Go ahead and download your application as explained in the previous chapter.<br/>
You will get a `compressed file` that holds your application source code.<br/> 

Don't worry though you will not modify anything whatsoever in the source code.<br/>
You will just run it.<br/>

Save your application into one of your favorite folders.<br/>

Use the `download` action as pointed out in the picture below in order to get your application archive file:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/63-download-todoapplication.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/63-download-todoapplication.png" alt="Download ToDoApplication">
        <figcaption>Download ToDoApplication</figcaption>
    </a>
  </figure>
</div>
</div>

Lets place our application under a folder named `My Generated Applications` for example.<br/>

Note that you are free to place your application in wherever folder you want it to be provided that you dont forget its location.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/64-my-application-source-code.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/64-my-application-source-code.png" alt="ToDoApplication Source Code Archive File">
        <figcaption>ToDoApplication Source Code Archive File</figcaption>
    </a>
  </figure>
</div>
</div>

Now, leave the archive file there; we will get back to it shortly after running our `service backend mock`.<br/>

## III. Run Backend Services - Averos Service Backend Mock

If you have followed and executed all the instructions in this tutorial without exception, chance are you have already done this step.<br/>
In fact, as mentioned in the [prerequisites section]({{"averos/getting-started-c-developer/prerequisites/#3-averos-backend-mock" | relative_url}} "prerequisites section"), a `service backend Mock` called `averos-backend-mock` was provided for you so that you can test your application.<br/> 

Please if you haven't already done this step, you'll need to do it now by following these steps:

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
 3. Wait until the service starts. Leave the service up and do not close the `Terminal` window. (closing the terminal window will shutdown the service)

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


**Our application is now downloaded and our external service backend is up and running.**<br/><br/>
**Great ! 🚀🚀** <br/><br/>
**Now, let's deploy and run our application!**
{: .notice--success}


## IV. Deploy & Run ToDoApplication

In this final part, we are going to build and run our application using the source code that we have downloaded earlier.<br/>

🙋‍♂️Please make sure you have installed `nodejs` as instructed in the [prerequisites section]({{"/averos/getting-started-c-developer/prerequisites/#2-nodejs" | relative_url}} "prerequisites section") otherwise you will not be able to carry on with the next instructions.<br/>
{: .notice--danger}

Once `nodejs` is installed on your computer, go ahead and execute these instruction:<br/>

**1.** Open the folder where you saved your application archive file<br/>

**2.** Use your favorite `archive manager` to extract your application. You should end up with a folder named `ToDoApplication` as displayed below. Your application source code is inside that folder.

<div style="display: flex;flex-direction: row;justify-content: center;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/65-my-application-source-code.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/65-my-application-source-code.png" alt="ToDoApplication Source Code">
      <figcaption>ToDoApplication Source Code</figcaption>
    </a>
  </figure>
</div>



**2.** Open the extracted folder named `ToDoApplication` and run a `Terminal` inside it.

**3.** Type and execute the following command in the `terminal` which you have just opened within your application source code folder: <br/>  
```bash
npm install -g @angular/cli && npm install && ng serve ToDoApplication
```

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/66-build-and-run-todoapplication.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/66-build-and-run-todoapplication.png" alt="Build and Run ToDoApplication">
        <figcaption>Build and Run ToDoApplication</figcaption>
    </a>
  </figure>
</div>
</div>

Wait untill you see an output similar to the one in the picture below:<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/67-build-and-run-todoapplication-output.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/67-build-and-run-todoapplication-output.png" alt="Build and Run ToDoApplication - Command Output">
        <figcaption>Build and Run ToDoApplication - Command Output</figcaption>
    </a>
  </figure>
</div>
</div>


**🎉🎉🎉 Congratulations! Your ToDoApplication is now UP and RUNNING ! 🎉🎉🎉**<br/> <br/>
{: .notice--info}

Now, go ahead open your favorite `Web Browser` and navigate to [http://localhost:4200](http://localhost:4200). <br/>

Here is what your application looks like:<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/68-todoapplication-home.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/68-todoapplication-home.png" alt="ToDoApplication - Home - Light Mode">
        <figcaption>ToDoApplication - Home - Light Mode</figcaption>
    </a>
  </figure>
</div>
</div>

Since your application supports `light` and `dark` modes out of the box, you might want to `switch to dark mode` using the button pointed out in the following picture:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/69-todoapplication-home-darkmode.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/69-todoapplication-home-darkmode.png" alt="ToDoApplication - Home - Dark Mode">
        <figcaption>ToDoApplication - Home - Dark Mode</figcaption>
    </a>
  </figure>
</div>
</div>



**👏👏👏 Congratulations on making it this far! 👏👏👏**<br/> <br/>
You have successfully created a `web application` called **`ToDoApplication`** without any knowledge on software development whatsoever!<br/>
You have learnt how to use **WiBuild** along with **Averos Designer** in order to create web applications.<br/>
Your **ToDoApplication** is now ready to be explored at the finest detail!
<br/>
Next in the final section, we are going to explore our application and see how it does look and what are its features and capabilities.<br/>
<br/>
**Meet you there !**
{: .notice--info}

