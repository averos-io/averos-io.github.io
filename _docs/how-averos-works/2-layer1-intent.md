---
title: "**🧠 Layer 1 - intent**"
permalink: /averos/how-averos-works/layer-1-intent
date: 2026-08-19
excerpt: ""
toc: false
classes: wide
---

**_Everything starts as a claim about what should exist. Nothing here is trusted yet._**

Everything begins with intent.
Intent can enter Averos several ways:

- **Describe it** — in conversation with an AI agent, through `@averos/ai` using the Averos CLI (`@averos/cli`) or any MCP-compatible tool (`@averos/mcp`)
- **Design it** — visually, through [**Averos Designer**](https://appbuilder.wiforge.com/averos-designer/averosdesigner){:target="_blank" rel="noopener noreferrer"}
- **Write it** — by hand, directly as a manifest, for full manual control - or using another tool capable of producing the Averos application model

All ways converge on the same output: a **candidate application manifest.** Averos doesn't care which door intent came through — an AI agent, a visual designer, and a developer typing JSON are all just different ways of answering the same question: *what should this application be?*

The important point is that these interfaces do not directly become the application.
They produce or modify application intent.

For example:
>"Create a task management application with users, projects, and tasks. A task belongs to a project and has a title, description, priority, and completion status."

An AI system can interpret that requirement.
But Averos does not ask the AI to invent the resulting source files.
Instead, the requirement becomes structured application state.

Nothing is built at this stage. Nothing is even assumed to be correct yet. Layer 1's only job is to produce a structured candidate — Layer 2 decides whether it's trustworthy.

---