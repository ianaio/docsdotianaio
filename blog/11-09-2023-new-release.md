---
slug: release-0.1.2 
title: Releasing v0.1.2 
author: Cichy
author_title: Maintainer of IanaIO
author_url: https://github.com/cichy
author_image_url: https://avatars.githubusercontent.com/u/443253?v=4
tags: [release]
---

The IanaIO team is happy to announce a new version of IanaIO: v0.1.2. IanaIO is a modular toolkit for building fast, reliable
Web applications and libraries with Rust and WASM.

## What's new

This release focuses on adding new features and crates.

### Features

* `ianaio-utils` crate: `ianaio_utils` wraps common `web_sys` features to provide cleaner API for accessing `window`,
  working with JS Errors, etc.
* Add `dbg!` equivalent in `ianaio_console` for easy console.log debugging.

### Fixes

* Remove the unnecessary copy in `Blob::new` ([#152](https://github.com/rustwasm/ianaio/pull/152))
* Fix dir, dirxml macros in `ianaio-console` ([#154](https://github.com/rustwasm/ianaio/pull/154))

## Looking for contributors

IanaIO project is in need of contributors. It would be really appreciated if you could contribute or raise awareness about
the IanaIO project.
