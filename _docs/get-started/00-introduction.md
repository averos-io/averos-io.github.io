---
title: "**🚀 Get Started - From Intent To a Running Application 🧑‍💻**"
permalink: /averos/get-started/introduction/
date: 2026-08-20
excerpt: ""
toc: false
classes: wide
---
**_AI defines. Averos builds._**


<div style="display: flex;">
    <div style="width: 22em;" align="center">
        <div id="averos-anim"></div>
     </div>
     <div>
          The fastest way to understand Averos is not to read about it.<br/>
          <strong> Run it.</strong><br/>
          Averos takes a structured application manifest, turns it into an explicit execution plan, and applies that plan through its deterministic execution pipeline.<br/>
          For your first experience, you don't need to design an application from scratch or configure an AI model.<br/>
          In this guide, you will take a ready-made <strong>ToDo application manifest</strong>
          and follow it through the complete Averos workflow—from validation and planning to deterministic execution and application evolution. <br/><br/>
          <strong>One manifest. One deterministic workflow. A running application.</strong>
     </div>
</div>

<br/>

# Build your first application with Averos

We'll use a ready-to-run **ToDo application manifest** and take it all the way from:

```mermaid
graph TD
    A[Application Manifest] --> B[Validate]
    B --> C[Preview Plan]
    C --> D[Deterministic Execution]
    D --> E[Angular Application]
    E --> F[Evolve]
```

## What you'll accomplish

By the end of this guide, you will have:

- Generated a real Angular application from an Averos manifest.
- Inspected the execution plan before making any changes.
- Experienced checkpointed execution, with each step tracked and reproducible.
- resumed an interrupted execution
- Evolved the application by changing its manifest and executing the new intent.
- Optionally used AI to generate a new manifest from natural-language requirements.

You don't need to design a manifest from scratch.

**The first example is ready to run**. Your job is simply to follow the workflow, see what Averos produces, and understand how intent becomes software.

>**The quickest way to understand Averos is to watch intent become software.**
>
>**Let's build. 🚀**

---

## The fastest path: generate a real application

Averos applications are defined by an Application Manifest.

For your first experience, we've prepared a complete ToDo application manifest that you can use immediately.

<div style="display: flex; flex-direction: row; justify-content: center; margin: 2em 0;"> <a href="/examples/todoapp-manifest.json" title="Download the ToDo Application Manifest" class="btn btn--green btn--small" download> Download the ToDo Manifest </a> </div>

You can also import this manifest into [Averos Designer](https://appbuilder.wiforge.com/averos-designer/averosdesigner){:target="_blank" rel="noopener noreferrer"} to explore the application definition visually.

This gives you two immediate ways to inspect the same application intent:

**Design it visually. Or execute it directly.**