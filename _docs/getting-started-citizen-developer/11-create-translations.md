---
title: "New Language Support & Translations"
permalink: /averos/getting-started-c-developer/create-translations/
excerpt: "New Language Support & Translations"
toc: true
toc_sticky: true
---

### **I. Introduction**

So far, you have created your **ToDoApplication** and implemented all of your business entities along with the business requirements.<br/>
Your **ToDoApplication** is now ready to be generated and deployed.<br/> 
However, seeing as your default application language is `English`, none english speakers will not understand your application.<br/> 
And since we are also targetting `French` speakers, we will need to add `French` support to our appication.(you coud pick whatever one from the 11 supported languages instead of `French`)<br/>

But how can you do it knowing that your application only supports `English` ?
Should you consider re-writing the whole application display in your target language ? Or shouldn't you ?<br/>

What if you want your application to support more than two languages ?<br/>
Should you re-write an application instance for each language ?<br/>

Well, believe it or not, your **ToDoApplication** already supports **multi-language**!<br/>
Better! Learning new languages is a matter of configurations. <br/> 

Now, your application is ready, what if you take it to the next level and let it speak multiple languages so that you can target a wider audience ?<br/>

Sounds brilliant ? Then let's GO!

🙋‍♂️ For the sake of this tutorial, we are going to add `French` support to our **`ToDoApplication`**, but you might procede with any language from the list of supported ones.<br/>

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

This means that the default user interfaces, including labels, actions, validation messages, actions messages and domain values, are already translated for you in these languages.<br/>

Any additional translations should be added to an **`Averos Language`** configuration, but we will come to **translations** later on.<br/>

Shall we start adding `French` support to our `ToDoApplication` ? <br/>

Ok! <br/>
Go back to **Averos Designer** and expand the **`Locales & Translation`** components set located in the `Averos Components` panel.<br/>
Drag and drop one **`Language`** component into the canvas as shown in the picture below:<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/42-snew-language.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/42-snew-language.png" alt="New Language">
        <figcaption>New Language</figcaption>
    </a>
  </figure>
</div>
</div>
<br/>


Select your language component then go to `Language Properties` and choose `French` (or your chosen language) from the list of languages.<br/>

Click `apply`.<br/>

Your `language component` should look like the one in the following picture:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/42-french-language.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/42-french-language.png" alt="French Language">
        <figcaption>French Language</figcaption>
    </a>
  </figure>
</div>
</div>
<br/>



🎉 Congratulations! Your application now speaks french at a beginner level.<br/
This means that all generated default user interfaces-including default **labels**, default **actions**, default **validation messages**, default **process messages** and default **domain values**- are already translated in `French` for you (or in the language you've chosen to procede with).<br/>
{: .notice--info}

At this point, with this configuration the following items will be translated for you
- action button labels
- default layout labels
- default application messages (success messages, error messages...)
- entities' displayed values
- default sign in and register Component


Still, our **`entity attributes names`**, our **`menu labels`** and our **`use cases labels/titles`** have not been translated yet! (they were introduced by you, remember ?<br/> 

Let's improve our application vocabulary and teach it new French words! 

### **III. Teach your application New Words**

With `Averos Framework`, your application can be tought new words related to its echosystem.<br/>

From **`components and use cases labels/titles`**, to **`entities and members labels`** throughout **`action labels`**; every thing can be tought to your application in a new language.<br/>

OK! Let's do this!<br/>

In order to teach your application new words in a specific language, you need to create a `translation entry` to the `language` configuration that you have just created.<br/>

Go ahead and select your `Language` component.<br/>
From the `Language Properties` panel go to the tab `Translation Entries` and click on `add`.<br/>

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/43-add-translation-entry.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/43-add-translation-entry.png" alt="Add Translation Entry">
        <figcaption>Add Translation Entry</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/44-new-translation-entry.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/44-new-translation-entry.png" alt="New Translation Entry">
        <figcaption>New Translation Entry</figcaption>
    </a>
  </figure>
</div>
</div>

Notice that a `Translation entry` is composed a `Target Entity`, a `locale identifier` and a `Translation Value`.<br/>

Go ahead and open `Target Entity`.<br/>
You will notice that a `Target Entity` to be translated could be either an `Averos Entity` or an `Averos Use Case`.<br/>
Let's try to translate `ToDoArea`.<br/>

From the `New Translation Entry` page select open `Target Entity` and select `ToDoArea`.<br/>
Now, open `Locale Identifier`.<br/>
`Averos Designer` dynamically brings all possible translations related to the `Target Entity` that you have selected.<br/>
Notice that all the member names along with the enumeration values are subject to translation.<br/>

Knowing that `name` in `French` is `Nom`, go ahead and translate the `name` for example, .<br/>

>🔖 since `name` is a member part of `ToDoArea`, the `Locale Identifier` of `name` would be `todoarea.name`.
{: .notice--success}

You translation entry should look like this one:
<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/45-new-translation-entry-name.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/45-new-translation-entry-name.png" alt="Translation Entry - Name">
        <figcaption>Translation Entry - Name</figcaption>
    </a>
  </figure>
</div>
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/46-new-translation-entry-saved-name.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/46-new-translation-entry-saved-name.png" alt="Translation Entry Added - Name">
        <figcaption>Translation Entry Added - Name</figcaption>
    </a>
  </figure>
</div>
</div>

Now carry on with all the available `Translation Keys`.<br/>
One you finish all the translations in the language of your choice, you should have something like the following:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/47-language-fr.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/47-language-fr.png" alt="French Language Configuration">
        <figcaption>French Language Configuration</figcaption>
    </a>
  </figure>
</div>
</div>

🙋‍♂️ Don't worry, In the next section, I will leave a link to [download]({{ site.baseurl }}/examples/ToDoApplication.json) the full averos design project so that you will be able to import it to **Averos Designer** and generate a **`ToDoApplication`**.
{: .notice--info}


**Congratulations! Your application now speaks `French` fluently!**
{: .notice--info}

Your final diagramm should look like the following:

<div style="display: flex;flex-direction: row;justify-content: center;"> 
<div style="padding: 10px;">
  <figure align="center">
    <a href="{{ site.baseurl }}/assets/tutorial/c-developer/48-final-diagram.png">
      <img src="{{ site.baseurl }}/assets/tutorial/c-developer/48-final-diagram.png" alt="ToDoApplication - Final Averos Diagram">
        <figcaption>ToDoApplication - Final Averos Diagram</figcaption>
    </a>
  </figure>
</div>
</div> 


<br/>

You have done a nice work so far! Your new application is humain friendly, supports multilanguage and cares about user experience.<br/>
You will find that, switching the application language to `English`, will modify the whole application language context and display almost instantly. <br/>

`Averos Framework` supports up to 11 languages out of the box, so you might want to experience with the framework by adding more languages and exposing your application to even wider audience.<br/>



**🎉🎉🎉 Congratulations and thank you for reaching this far in this tutorial! 🎉🎉🎉**<br/> <br/>
Your **ToDoApplication** is now fully functional and ready to be generated!
<br/>
So far, in this step-by-step tutorial you have first designed your **`ToDoApplication`** and defined your business requirement.<br/>
Then, you have used `averos designer` to create your application entities and to implement your business requirement. <br/>
Finally, you have added a new language to your application, using **Averos Designer**, making it available for a wider audience. <br/><br/>
In the next sections, you are going to generate, download and run your **`ToDoApplication`**.<br/>
Finally we are going to explore our application then I will let you do it yourself.<br/>
<br/>
**See you in the next section!**
{: .notice--info}
