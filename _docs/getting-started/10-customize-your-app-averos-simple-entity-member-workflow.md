---
title: "Customize your application"
permalink: /averos/getting-started/customize-your-app-averos-simple-entity-member-workflow/
excerpt: "Customize your application - simple entity Workflow"
toc: false
classes: wide
---

### **IV- Simple Entity Member Creation Workflow**

At some point of our averos journey, one would like to add new simple member to his entities.
Besides, one of our ToDo Tracking application use cases is about updating the task status. A new member should therefore be added to `ToDoTask` entity in order to track the entity's status.

Averos framework allow to add new members to averos entities either by hand coding them or using one of the [**averos code generation worflow**]({{ "/averos/getting-started/reference-detailed-averos-worflow-commands/" | relative_url }}  "Averos Code GenerationWork Flow") that is dedicated to such use cases, and which is `add-simple-member`.

>🚩 Note that adding simple fields using `add-simple-member`, will by default include the new field into its related entity view layout. Entity Member creation comes out of the box with the averos framework. No further source code updates are required in most cases. Still, advanced setup could be brought on source code if needed.
{: .notice--info}

In order to add `taskStatus` to `ToDoTask` entity, go ahead and execute the averos command below.

```bash
ng g @wiforge/averos:add-simple-member --ename=ToDoTask --mname=taskStatus --member-type=enumeration --list-of-enum-values=closed,active,pending
```

>🚩 The workflow will ask you to specify the enumeration values used for this type of member. Those values should be **no-space comma separated valid javascript identifier** (`value1,value2,value3`).
Entries like `value1 ,value2, value3` or `value1 , value2 , value3` or `value1 , value2 , value3` or `value1 , value2 , value3` are not allowed.
{: .notice--danger}


