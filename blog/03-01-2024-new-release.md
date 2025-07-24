---
slug: release-0.1.3 
title: Releasing v0.1.3 
author: Cichy 
author_title: Maintainer of IanaIO
author_url: https://github.com/cichy
author_image_url: https://avatars.githubusercontent.com/u/443253?v=4
tags: [release]
---

The IanaIO team is happy to announce a new version of IanaIO: v0.1.3. IanaIO is a modular toolkit for building fast, reliable
Web applications and libraries with Rust and WASM.

## What's new

This release focuses on adding new features and crates.

### New crate: `ianaio-worker`

IanaIO workers are a way to offload tasks to web workers. These are run concurrently using
[web-workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

This feature has been requested and overdue for a while. IanaIO-worker is made by 
moving [`yew-agent`](https://yew.rs/docs/concepts/agents) to IanaIO, while making it framework independent in the process.
This allows us to have a neat abstraction over the browser's Web Workers API which can be consumed from anywhere.

### Features

This release has been light on new features. The only improvement is `ianaio_utils` now providing a new wrapper 
to obtain the document `head`.

## Notable mention from last release

Last release, IanaIO v0.5.0 did not receive its own blog post. That released introduced one major new crate: `ianaio-history`
amongst other small improvements, which can be found in the [GitHub changelog](https://github.com/rustwasm/ianaio/releases/tag/0.5.0).

### `ianaio-history`

IanaIO history provides wrappers for browser's history API. It exposes ergonomic Rust APIs for the browser's APIs which 
can be used to build other tools. In fact, [`yew-router`](https://github.com/yewstack/yew/pull/2239) has been 
reworked to use `ianaio-history` under-the-hood.

## Looking for contributors

IanaIO project is in need of contributors. It would be really appreciated if you could contribute or raise awareness about
the IanaIO project.
