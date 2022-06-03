---
title: Compilation and Linking
date: 2022-06-01 10:07:35
updated: 2022-06-02 07:53:18
layout: '$layouts/Note.astro'
draft: false
order: 1
setup:
  import Mermaid from '$components/Mermaid.astro'
---

Writing C++ programs involves a multi-step process.

## Compiling

The compiler goes through each source (_.cpp_) file in your program and:

1. Checks the code for errors.
2. Translates the source code into machine language, called an __object file__.


## Linking

Once the compiler is finished, the linker takes over and:
1. Combines all of the generated object files into a single executable
2. Links external libraries like the __C++ Standard Library__
