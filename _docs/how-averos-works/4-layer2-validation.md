---
title: "**🛡️ Layer 2 - Validation**"
permalink: /averos/how-averos-works/layer-2-validation
date: 2026-08-19
excerpt: "Layer 3 never sees anything Layer 2 hasn't cleared."
toc: true
toc_sticky: true
# classes: wide
---

**_Nothing proceeds on a hope._**

Layer 2 is the **validation boundary** between a proposed application state and the systems that may act on it.

Every candidate manifest must pass three validation tiers before it is allowed to influence anything real:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f

    A[/"`**CANDIDATE MANIFEST**<br/>Input specification`"/]:::artifact

    B["`**1. STRUCTURAL VALIDATION**<br/>Is it well-formed?`"]:::process
    C["`**2. REFERENTIAL VALIDATION**<br/>Do references exist?`"]:::process
    D["`**3. CONSTRAINT VALIDATION**<br/>Is the state valid?`"]:::process

    E[/"`**VALIDATED MANIFEST**<br/>Verified specification`"/]:::artifact

    F(["`**LAYER 3**<br/>Orchestration & Planning`"]):::boundary

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
```

## 1. Structural validation

Structural validation determines whether the manifest is well-formed according to the manifest definition.

It checks things such as:

- required elements are present;
- values have the expected types;
- structures follow the required shape;
- declarations conform to the manifest specification.

In other words:

>**Is this a valid manifest?**

---

## 2. Referential validation

A structurally valid manifest can still describe something that does not exist.

Referential validation checks the relationships between the elements declared in the manifest.

For example:

- a field references an entity that is not defined;
- a relationship points to a missing entity;
- a service references an undeclared resource;
- a dependency points to an unavailable application element.

In other words:

>**Do the things this manifest refers to actually exist?**

---

## 3. Constraint validation

A manifest can be structurally correct and all of its references can exist, while the resulting application state is still invalid.

Constraint validation checks the rules governing the application model.

This can include:

- valid relationships;
- prohibited or duplicate declarations;
- incompatible combinations of features;
- dependency constraints;
- consistency of the application model;
- domain-level rules.

In other words:

>**Even if the manifest is well-formed and internally connected, is the described application state allowed?**

---

## Validation is a gate, not a repair mechanism

Validation is governed by the **Averos DAG Rules Specification V1.6**, which is part of the **Averos Framework Specifications**.

A manifest that fails validation is not silently patched, partially accepted, or interpreted on a best-effort basis.

It is **rejected with an explainable reason** and returned to whoever — human or AI — proposed it.

Only a manifest that clears Layer 2 is allowed to proceed to Layer 3.

>**Invalid state does not cross the validation boundary.**

This distinction is fundamental.

Layer 2 does not decide what the application *should be*. That intent comes from upstream.

Layer 2 determines whether the proposed state is **structurally valid, internally coherent, and permitted by the rules of the system.**

The purpose is simple:

>**Do not execute an invalid application state.**

---

# The validation boundary

Layer 2 therefore establishes a hard boundary between **describing a desired system** and **changing a real system.**

```mermaid
        flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef error fill:#ffebee,stroke:#c62828,stroke-width:1.5px,color:#1d1d1f

    A(["`**DESIRED STATE**<br/>Target Application Intent`"]):::boundary
    
    B[/"`**CANDIDATE MANIFEST**<br/>Unverified System Spec`"/]:::artifact

    C[["`**LAYER 2: VALIDATION**<br/>Structural, Referential & Constraint Checks`"]]:::engine

    D(["`**LAYER 3**<br/>Orchestration & Planning`"]):::boundary
    E[["`**EXECUTION**<br/>DAG Pipeline & Adapters`"]]:::engine

    F["`**REJECTED**<br/>Validation Failure`"]:::error
    G[/"`**EXPLAINABLE FEEDBACK**<br/>Diagnostic Error Report`"/]:::artifact

    A --> B
    B --> C
    
    C -- Valid --> D
    D --> E

    C -- Invalid --> F
    F --> G
```

>**Layer 3 never sees anything Layer 2 hasn't cleared.**

---