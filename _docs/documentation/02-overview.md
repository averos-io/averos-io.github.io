---
title: "Averos Overview"
permalink: /averos/documentation/overview/
excerpt: "averos overview"
toc: true
classes: wide
---


<br/>

**Averos** framework is the ultimate [Rapid](https://en.wikipedia.org/wiki/Rapid_application_development), fully [responsive](https://en.wikipedia.org/wiki/Responsive_web_design) [Angular](https://angular.io/)-powered web application development framework that is aimed to simplify web application development while hiding complex technical aspects; providing a full control on [time to market (TTM)](https://en.wikipedia.org/wiki/Time_to_market). 
Averos let you create a fully angular blown multipurpose and highly responsive applications in only five steps: Design, Integrate, Customize, Test and Deploy.

<div align="center">
<figure align="center">
	<a href="{{ site.baseurl }}/assets/arch/averos-usage-pattern.png">
    <img src="{{ site.baseurl }}/assets/arch/averos-usage-pattern.png" alt="averos framework usage pattern">
  </a>
</figure>
</div>

## 1.	Design

The first step, while working with **averos**, is designing your application. <br/>
This could be achieved by means of several design principles and techniques that helps defining expected entity models, their obvious relationships, rules, services and controllers managing these entities, workflows and use cases into which those entities will participate or be subject of actions and finally the target user interface layout that the user is keen to put in place. <br/>
There are several designing tools that could be used for this purpose. <br/>
UML is one of them and could be considered as the main design language that could efficiently define business entities, their interactions and their target use cases or processes into which they are involved.

## 2.	Integrate

The design step will result in a full application specification functional description that is expressed in a human readable diagrams that genuinely describes the target application requirements in terms of entities, actions and user interface.<br/>
The integrate step will then accept all the design aspects and transform them to a machine readable data, thus shaping your application by putting in the first bricks.<br/>
The integration phase will require the developer to implement the different design aspects via a set of averos workflows and configuration commands. <br/>
This will technically result in a deployable angular application that almost includes the major aspects defined in design step, out of the box.<br/>  


## 3.	Customize

The customize step is considered as an advanced optional step into which experienced developers could add several customizations to their averos application generated in the integrate step, using the angular ecosystem.<br/>
 Users running through this step should have a good grasp of the frontend development principle using angular, typescript, scss, HTML5 and obviously javascript.<br/>
The customize step will put the developer into a regular angular project context without having to deal with averos framework principles.<br/>
 This step will thus allow developer to dig into their knowledge towards enriching their applications with an extendable open architecture that leverages all available frontend framework technologies and thus go beyond averos framework.<br/>

## 4.	Test

By the end of the customize step, averos users will have their business requirement developed and ready for test.<br/>
Tests includes unit tests, end to end tests and friendly user tests.<br/>
Each of the test types will require further actions, either by stepping back to the customize step in case of unit tests failure or reiterate through design and customize steps if one or many of the functional aspects where not implemented. <br/>
Thus, developer can at any time step back to one of the previous steps in order to add or correct some of the application aspects whose test were failed.

## 5.	Deploy

Once the application is fully tested, averos users can deploy their application binaries to production using all kinds of available technologies. <br/>
The front end application is accessed through whatever device that supports HTML5 and Javascript.