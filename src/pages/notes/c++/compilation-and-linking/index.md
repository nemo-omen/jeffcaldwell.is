---
title: Compilation and Linking
date: 2022-06-01 10:07:35
updated: 2022-06-01 10:07:41
layout: '$layouts/Note.astro'
draft: false
order: 1
setup:
  import Mermaid from '$components/Mermaid.astro'
---

Writing C++ programs involves a multi-step process.

<Mermaid>
flowchart LR
  id1[Write Code] --> Compile --> Link --> Test --> id1
</Mermaid>

## Compiling

The compiler goes through each source (_.cpp_) file in your program and:

1. Checks the code for errors.
2. Translates the source code into machine language, called an __object file__.

<Mermaid>
flowchart TD
  Main.cpp --> Main.o
  Set.cpp --> Set.o
</Mermaid>

## Linking

Once the compiler is finished, the linker takes over and:
1. Combines all of the generated object files into a single executable
2. Links external libraries like the __C++ Standard Library__

<Mermaid>
flowchart TD
  id1((Linker))
  Main.o ==> id1
  Set.o --> id1
  id2[Standard Library] --> id1
  id1 --> id3[Main/Main.exe]
</Mermaid>