---
title: "**⚙️ Layer 3 - Orchestration**"
permalink: /averos/how-averos-works/layer-3-orchestration/
date: 2026-08-19
excerpt: ""
toc: true
toc_sticky: true
# classes: wide
---

**_Deciding what actually needs to change, and in what order._**

Layer 3 takes a **validated desired state** and determines how the current application can be brought to that state.

It does not regenerate the application from scratch.

It does not guess what changed.

It determines the **semantic difference between the current and desired application states**, resolves the dependencies between the resulting operations, and produces an explicit **execution plan** before anything is applied.

Conceptually:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold

    A[/"`**CURRENT APPLICATION STATE**<br/>Observed System Model`"/]:::artifact
    B[/"`**VALIDATED DESIRED STATE**<br/>Target Manifest Spec`"/]:::artifact

    C["`**SEMANTIC DIFF**<br/>Model Delta Engine`"]:::process
    D[/"`**REQUIRED CHANGES**<br/>Atomic Delta Actions`"/]:::artifact

    E[["`**DEPENDENCY GRAPH**<br/>DAG Resolution Node`"]]:::engine
    F[/"`**EXECUTION PLAN**<br/>Ordered Action Sequence`"/]:::artifact

    G[["`**EXECUTION**<br/>Adapter Pipeline Engine`"]]:::engine

    A & B --> C
    C --> D
    D --> E
    E --> F
    F --> G
```

The result is a plan that can be inspected, reviewed, and — when desired — executed.

> **Layer 3 does not decide what the application should be. It determines how to move from the current state to the validated desired state.**

---

# Semantic Change Detection

Applications evolve.

The important question is therefore not:

> **What files should be regenerated?**

It is:

> **What has actually changed in the application?**

Suppose the application currently contains:

```mermaid
graph TD
    A[Task] --> B[title]
    A --> C[description]
    A --> D[completed]
```

The new requirement is:

> "Add priority to tasks."

The desired application model becomes:

```mermaid
graph TD
    A[Task] --> B[title]
    A --> C[description]
    A --> D[completed]
    A --> E["priority (new)"]
```

A conventional AI coding workflow may respond by generating or modifying source files directly.

Averos approaches the change at the application-model level.

It compares:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f

    A[/"`**CURRENT STATE**<br/>Observed System Model`"/]:::artifact
    B[/"`**DESIRED STATE**<br/>Target Manifest Spec`"/]:::artifact

    C["`**SEMANTIC DIFF**<br/>Model Delta Engine`"]:::process
    D[/"`**REQUIRED CHANGES**<br/>Atomic Delta Actions`"/]:::artifact

    A & B --> C
    C --> D
```

The difference is not primarily a difference between files.

It is a difference between **application states**.

A change to one manifest element can have consequences across multiple generated or dependent components. The purpose of semantic change detection is therefore to identify the relevant change set and its downstream effects without treating unrelated source code as changed simply because it was regenerated.

For example:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef badge fill:#e8eaf6,stroke:#3f51b5,stroke-width:1.5px,color:#1d1d1f,font-weight:bold

    A[/"`**Task.priority**`"/]:::artifact

    B["`**Task Model**`"]:::process
    C["`**Task Service**`"]:::process
    D["`**Task Views**`"]:::process
    E["`**Task Translations**`"]:::process

    A -- "ADDED" --> B
    A -- "AFFECTED" --> C
    A -- "AFFECTED" --> D
    A -- "POTENTIALLY AFFECTED" --> E
```

The objective is not to regenerate everything.

It is to determine:

> **What must change, and what does that change affect?**

# From Change Set to Operations

Once the semantic differences are known, Averos translates them into operations.

For example:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f

    A[/"`**Task.priority**`"/]:::artifact

    B["`**Task Model**`"]:::process
    C["`**Task Service**`"]:::process
    D["`**Affected Views**`"]:::process
    E["`**Affected Translations**`"]:::process

    A -- "ADD" --> B
    A -- "UPDATE" --> C
    A -- "UPDATE" --> D
    A -- "UPDATE" --> E
```

These operations are not necessarily independent.

An operation may depend on another operation being completed first.

For example:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold

    A[/"`**TASK ENTITY**<br/>Domain Definition`"/]:::artifact
    B[/"`**TASK MODEL**<br/>Data Representation`"/]:::artifact

    C[["`**TASK SERVICE**<br/>State & Business Logic`"]]:::engine
    D["`**TASK USE CASE**<br/>Application Logic`"]:::process

    E["`**TASK VIEWS**<br/>UI Components`"]:::process

    A --> B
    B --> C & D
    C & D --> E
```

The orchestration layer makes these dependencies explicit.

This creates an important distinction:

* The **manifest** describes the desired application state.
* The **semantic diff** describes what changed between application states.
* The **dependency graph** describes how the required changes depend on one another.
* The **execution plan** describes the ordered operations required to apply those changes.

# Dependency Resolution

Real applications contain dependencies.

A service may depend on an entity.

A use case may depend on a service.

A page may depend on a use case.

A generated component may depend on several other application elements.

These relationships determine the order in which changes can safely be applied.

Averos represents these dependencies as a **Directed Acyclic Graph (DAG)**.

**Averos DAG** is governed by the **Averos DAG Rules Specification V1.6**, which is part of the **Averos Framework Specifications**.

For example:

```mermaid
 flowchart LR
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold

    A["`**OPERATION A**<br/>Prerequisite Action`"]:::process
    B[["`**OPERATION B**<br/>Parallel Step`"]]:::engine
    C[["`**OPERATION C**<br/>Parallel Step`"]]:::engine
    D["`**OPERATION D**<br/>Dependent Action`"]:::process

    A --> B & C
    B & C --> D
```

Here, Operation D cannot be performed until both B and C have been completed.

The DAG engine resolves these relationships and derives a valid execution order using **topological ordering**.

Conceptually:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold

    A[/"`**DEPENDENCY GRAPH**<br/>Graph Representation`"/]:::artifact

    B[["`**DEPENDENCY RESOLUTION**<br/>Cycle & Link Resolution`"]]:::engine
    C["`**TOPOLOGICAL ORDERING**<br/>Deterministic Sequence Computation`"]:::process

    D[/"`**EXECUTION PLAN**<br/>Ordered Action Manifest`"/]:::artifact

    A --> B
    B --> C
    C --> D
```

The graph is therefore not simply a list of tasks.

It represents the **constraints between tasks**.

This matters because software changes are rarely isolated.

A change to an entity can affect:

* services;
* relationships;
* use cases;
* views;
* generated files;
* configuration;
* translations;
* other application components.

The dependency graph provides the structure required to account for those effects and establish a controlled execution order.

# The Execution Plan

The output of orchestration is an **execution plan**: an explicit, ordered, inspectable representation of the operations required to reconcile the current application with the validated desired state.

For example:

```text
Execution Plan

1. Add Task.priority
2. Update Task model
3. Update Task service
4. Update affected use case
5. Update affected views
6. Update affected translations
```

The actual plan may contain more detailed operations and dependencies, but the principle is the same:

> **The work is determined before the work is performed.**

This separation is important.

Averos can reason about the consequences of a manifest change without immediately applying them.

The plan can therefore be:

* inspected;
* reviewed;
* compared;
* logged;
* validated;
* executed;
* or discarded.

# Planning Without Execution

Planning and execution are separate operations.

A plan can be generated without changing the application:

```bash
averos plan --config=averos.config.js
```

A dry run can also be requested through the execution command:

```bash
averos run --config=averos.config.js --dry-run
```

A dry run produces the planned operations without applying them.

This provides a true separation between:

```text
"What would Averos do?"
```

and:

```text
"Do it."
```

The plan is therefore not merely an internal implementation detail.

It is an inspectable artifact of the orchestration process.

# Orchestration as a Controlled Transition

Layer 3 establishes a controlled transition between two application states:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f

    A[/"`**CURRENT STATE**
    Observed System Model`"/]:::artifact

    B[/"`**CHANGE SET**
    Calculated Deltas`"/]:::artifact

    C[/"`**EXECUTION PLAN**
    Ordered Action Manifest`"/]:::artifact

    D(["`**DESIRED STATE**
    Target Application Intent`"]):::boundary

    A -- "Semantic Comparison" --> B
    B -- "Dependency Resolution" --> C
    C -- "Execution" --> D
```

The important property is that **execution is derived from state differences and dependencies**, rather than from an unconstrained sequence of generated code changes.

Layer 2 answers:

> **Is the desired state valid?**

Layer 3 answers:

> **What must happen to reach it?**

Only after those questions have been answered does the system move toward execution.

> **Layer 3 turns a validated application state into a deterministic, inspectable plan for reaching it.**

| Layer       | Core question                           | Primary artifact   |
| ----------- | --------------------------------------- | ------------------ |
| **Layer 1** | What does the application intend to be? | Manifest           |
| **Layer 2** | Is that desired state valid?            | Validated Manifest |
| **Layer 3** | What must change to reach it?           | Execution Plan     |


---
