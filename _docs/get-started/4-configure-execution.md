---
title: "**Configure execution**"
permalink: /averos/get-started/configure-execution
date: 2026-08-20
excerpt: ""
toc: true
toc_sticky: true
---

Now create an Averos configuration file `averos.config.json` in your working folder with the following content::

```json
{
  "mode": "resilient",
  "timeoutMs": 1800000,
  "maxAttempts": 1,
  "workspaceRoot": "./generated-app",
  "manifestPath": "../todoapp-manifest.json",
  "logsDir": "./generated-app/averos-logs",
  "statePath": "./generated-app/state.json",
  "checkpointPath": "./generated-app/checkpoints.json"
}
```

>🙋‍♂️ **This configuration tells Averos where the application is defined, where it should be generated, and where execution state should be persisted.**
{: .notice--info}


## Configuration at a glance

| Setting          | Purpose                                           |
| ---------------- | ------------------------------------------------- |
| `mode`           | Controls failure behaviour during execution       |
| `timeoutMs`      | Maximum duration of an execution session          |
| `maxAttempts`    | Number of attempts allowed for each node          |
| `workspaceRoot`  | Root directory where the application is generated |
| `manifestPath`   | Location of the application manifest              |
| `logsDir`        | Directory containing execution logs               |
| `statePath`      | Persistent execution state                        |
| `checkpointPath` | Checkpoint information used for resumability      |



## Execution modes

Averos supports two execution modes.

**Resilient** is the default:

>If a node fails, its transitive dependants are skipped while independent branches can continue executing.

This maximizes the amount of work completed before execution stops.

The objective is simple:

>Complete as much independent work as possible before stopping.

**Strict** takes the opposite approach:

>A failure immediately stops the execution and remaining nodes are skipped.

```mermaid
graph TD
    subgraph Resilient Mode
        A[Failure] --> B[affected dependants]
        A --> C[independent branches]
        B --> B_res[skipped]
        C --> C_res[continue]
    end

    subgraph Strict Mode
        D[Failure] --> E[execution stops]
        E --> F[remaining nodes → skipped]
    end
```

For the first example, keep:

```json
"mode": "resilient"
```

