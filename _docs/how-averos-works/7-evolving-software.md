---
title: "**🧬 The Result: Software That Can Evolve**"
permalink: /averos/how-averos-works/evolving-software/
date: 2026-08-19
excerpt: ""
toc: true
toc_sticky: true
# classes: wide
---

**_Change becomes a revision — not a rewrite._**


The purpose of the Averos architecture is not simply to generate an application once.

It is to establish a system in which an application can be **described, validated, compared, planned, executed, and evolved repeatedly**.

That makes the complete pipeline an **evolution pipeline**, not merely a generation pipeline.

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef success fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1d1d1f,font-weight:bold

    A["`**Intent**`"]:::process
    B[/"`**Manifest**`"/]:::artifact
    C["`**Validate**`"]:::process
    D["`**Semantic Diff**`"]:::process
    E[/"`**Plan**`"/]:::artifact
    F[["`**Execute**`"]]:::engine
    G(["`**Application**`"]):::boundary
    H["`**New Desired State**`"]:::success

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G -->|evolves| H
    H -->|Next cycle| B
```

The important property is not that Averos can generate an application.

It is that the same application can become the input to the **next controlled change**.

The application therefore does not have to be treated as a disposable output of a generation process.

It becomes a system with a persistent, structured model that can be evolved over time.

---

## From change request to application change

Consider a simple evolution:

> **Add `priority` to tasks.**

The desired change is represented in the application manifest.

The Averos pipeline then determines how that desired state differs from the current application state and what must be done to realize the difference.

Conceptually:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef success fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1d1d1f,font-weight:bold

    A["`**Add priority to tasks**`"]:::process
    B[/"`**Manifest revision**`"/]:::artifact
    C["`**Validated desired state**`"]:::process
    D["`**Semantic diff**`"]:::process
    E[/"`**Execution plan**`"/]:::artifact
    F[["`**Execution adapter**`"]]:::engine
    G(["`**Updated application**`"]):::boundary

    A --> B
    B --> C
    C --> D
    D -->|Task.priority added| E
    E -->|Add Task.priority| F
    F --> G
```

The important point is that the system is reasoning about the **application change**, rather than treating the entire application as something that must be generated again.

A small semantic change can therefore produce a correspondingly small execution plan.

For example:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold

    A(["`**Current application**`"]):::boundary
    B[/"`**Manifest revision**`"/]:::artifact
    C["`**Semantic Diff**`"]:::process
    D["`**Task.priority added**`"]:::process
    E["`**Required operation**`"]:::process
    F[["`**Execution**`"]]:::engine

    A --> C
    B --> C
    C --> D
    D --> E
    E --> F
```

This is the architectural consequence of having a structured application manifest, semantic diffing, dependency-aware orchestration, and controlled execution.

> **The objective is not to regenerate the application. It is to determine and apply the changes required to reach the desired state.**

---

## Evolution rather than regeneration

Traditional code generation is often naturally expressed as:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f

    A[/"`**Input**`"/]:::artifact
    B["`**Generate**`"]:::process
    C(["`**Output**`"]):::boundary

    A --> B
    B --> C
```

Averos is designed around a different lifecycle:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef success fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1d1d1f,font-weight:bold

    A(["`**Current State**`"]):::boundary
    B[/"`**Desired State**`"/]:::artifact
    C["`**Semantic Difference**`"]:::process
    D["`**Required Operations**`"]:::process
    E[/"`**Execution Plan**`"/]:::artifact
    F[["`**Controlled Execution**`"]]:::engine
    G["`**New Application State**`"]:::success

    A --> C
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
```

The distinction is important.

The application is not merely the output of the previous run.

Its established state becomes the **baseline for the next evolution**.

This enables a repeated lifecycle:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef success fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1d1d1f,font-weight:bold

    subgraph IterationA ["Cycle 1: Initial Bootstrap"]
        A[/"`**Desired State A**`"/]:::artifact
        E1[["`**Execute**`"]]:::engine
        S1["`**Application State A**`"]:::success

        A --> E1
        E1 --> S1
    end

    subgraph IterationB ["Cycle 2: First Evolution"]
        B[/"`**Desired State B**`"/]:::artifact
        D1["`**Semantic Diff**`"]:::process
        E2[["`**Execute**`"]]:::engine
        S2["`**Application State B**`"]:::success

        S1 -->|Baseline| D1
        B --> D1
        D1 --> E2
        E2 --> S2
    end

    subgraph IterationC ["Cycle 3: Continuous Evolution"]
        C[/"`**Desired State C**`"/]:::artifact
        D2["`**Semantic Diff**`"]:::process
        Next(["`**...**`"]):::boundary

        S2 -->|Baseline| D2
        C --> D2
        D2 --> Next
    end
```

Each iteration can be reasoned about independently while remaining connected to the application's persisted state.

This is what makes the model suitable for applications that are expected to change continuously rather than be generated once and discarded.

---

## A governed evolution loop

The same architecture also provides a natural boundary for AI-driven development.

When an AI agent is involved, the agent does not need to operate directly on the application's files.

Instead, it can participate in the same governed lifecycle:

```mermaid
%%{init: {"flowchart": {"subGraphTitleMargin": {"top": 10, "bottom": 15}}}}%%
flowchart TD
    classDef ai fill:#ede7f6,stroke:#512da8,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef gate fill:#fff3e0,stroke:#ef6c00,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef success fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1d1d1f,font-weight:bold

    subgraph Proposal["1. AI Proposal Domain"]
        AI[["`**AI Agent**`"]]:::ai
        M[/"`**Application Manifest**`"/]:::artifact
    end

    subgraph Verification["2. Engine Verification Domain"]
        V["`**Validation**`"]:::process
        D["`**Semantic Diff**`"]:::process
        P[/"`**Execution Plan**`"/]:::artifact
    end

    subgraph Governance["3. Human Governance Domain"]
        G{"`**Approval Gate**`"}:::gate
    end

    subgraph ExecutionDomain["4. Execution Domain"]
        E[["`**Execute**`"]]:::engine
        A(["`**Application State**`"]):::success
    end

    AI -->|Proposes intent| M
    M --> V
    V --> D
    D --> P
    P --> G
    G -->|Approved| E
    E --> A
```

The important distinction is between **proposal** and **execution**.

An AI agent can propose a change.

The Averos engine can validate the resulting manifest.

Orchestration can determine the semantic difference and construct the execution plan.

A human or governing process can inspect or approve that plan.

Only then does execution modify the application.

> **The agent proposes. The engine validates and plans. You control what executes.**

---

## MCP-driven evolution

When an AI agent interacts with Averos through `@averos/mcp`, this lifecycle can be exposed as an explicit sequence of governed tool calls.

Conceptually:

```mermaid
flowchart TD
    classDef mcp fill:#ede7f6,stroke:#512da8,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef gate fill:#fff3e0,stroke:#ef6c00,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef success fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1d1d1f,font-weight:bold

    subgraph ProposalPhase ["1. Proposal Phase"]
        T1["`**update_ir**`"]:::mcp
    end

    subgraph ValidationPhase ["2. Verification Phase"]
        T2["`**validate_ir**`"]:::mcp
        T3["`**build_execution_plan**`"]:::mcp
    end

    subgraph GovernancePhase ["3. Governance Phase"]
        T4{"`**approve_plan**`"}:::gate
    end

    subgraph ExecutionPhase ["4. Execution Phase"]
        T5[["`**execute_plan**`"]]:::engine
        App(["`**Updated Application**`"]):::success
    end

    T1 -->|propose manifest change| T2
    T2 -->|validate desired state| T3
    T3 -->|"compute semantic diff & resolve dependencies"| T4
    T4 -->|execution gate passed| T5
    T5 -->|apply approved operations| App
```

Each step has a distinct responsibility.

The agent is not silently editing arbitrary files and then asking whether the result looks correct.

Instead, the agent participates in the same structured lifecycle used by the rest of the system.

This makes the interaction **observable, inspectable, and governable**.

The exact authorization policy can vary by environment, but the architectural boundary remains the same:

**proposal does not imply execution.**

---

## The application as an evolving system

This leads to a different way of thinking about generated software.

A generated application is often treated as a final artifact:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef legacy fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#1d1d1f,font-weight:bold

    subgraph OneShot ["Traditional One-Shot Generation (Fragile)"]
        A[/"`**Specification**`"/]:::artifact
        B["`**Generator**`"]:::legacy
        C(["`**Application**`"]):::process
        D["`**Done**`"]:::boundary

        A --> B
        B --> C
        C --> D
    end
```

Averos treats the application as an evolving system:

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef success fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1d1d1f,font-weight:bold

    subgraph EvolutionLoop ["Continuous Application Lifecycle"]
        A[/"`**Desired Application State**`"/]:::artifact
        V["`**Validate**`"]:::process
        O[["`**Orchestrate**`"]]:::engine
        E[["`**Execute**`"]]:::engine
        S["`**Application State**`"]:::success
        N[/"`**New Desired State**`"/]:::artifact

        A --> V
        V --> O
        O --> E
        E --> S
        S -->|evolves| N
        N -->|Feeds next iteration| V
    end
```

The application can therefore be:

- described;
- validated;
- versioned;
- compared;
- planned;
- executed;
- inspected;
- changed;
- and evolved again.

That is the central consequence of the architecture.

> **Averos is not only a system for creating software. It is a system for managing the controlled evolution of software.**

---

## The result

The result is not simply a generated codebase.

It is a repeatable mechanism for moving an application from one well-defined state to another.

```mermaid
flowchart TD
    classDef boundary fill:#1d1d1f,stroke:#1d1d1f,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef artifact fill:#ffffff,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef process fill:#f5f5f7,stroke:#86868b,stroke-width:1.5px,color:#1d1d1f
    classDef engine fill:#e8eaf6,stroke:#3f51b5,stroke-width:2px,color:#1d1d1f,font-weight:bold
    classDef success fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1d1d1f,font-weight:bold

    subgraph CorePipeline ["State Transition Pipeline"]
        M[/"`**Manifest**`"/]:::artifact
        V["`**Valid State**`"]:::process
        D["`**Semantic Difference**`"]:::process
        P[/"`**Execution Plan**`"/]:::artifact
        E[["`**Controlled Execution**`"]]:::engine
        S["`**New Application State**`"]:::success
        N(["`**Next Evolution**`"]):::boundary

        M -->|1. Validation establishes admissibility| V
        V -->|2. Orchestration determines transition| D
        D -->|3. Resolves operations| P
        P -->|4. Adapter executes with checkpoints & events| E
        E -->|5. Persists baseline| S
        S -->|6. Continuous loop| N
        N -->|Feeds next manifest update| M
    end
```

The manifest provides the durable representation of intent.

Validation establishes that the desired state is admissible.

Orchestration determines the transition.

Execution applies it through an adapter.

Checkpoints make execution recoverable.

Events make execution observable.

State persistence provides the baseline for the next change.

Together, these layers turn application generation into **application evolution**.

> **The goal is not to generate software once. The goal is to make software that can evolve.**
