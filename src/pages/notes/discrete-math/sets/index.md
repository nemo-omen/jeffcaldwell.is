---
title: Sets
date: 2022-05-26 12:42:28
updated: 2022-05-26 12:42:33
layout: '$layouts/Note.astro'
setup:
  import playground from './playground.js'
---

1. [Roster Notation](#roster-notation)
2. [Set Membership](#set-membership)
   1. [Special Sets](#special-sets)
   2. [Set Relationships](#set-relationships)
   3. [Set Operations](#set-operations)
   4. [JavaScript Set Operations](#javascript-set-operations)
   5. [addAll Function](#addall-function)
   6. [Union Function](#union-function)
   7. [Intersection Function](#intersection-function)

<dl>
  <dt>Set</dt>
<dd>An unordered collection of objects.</dd>
</dl>

## Roster Notation

The easiest way to express a set is to use [roster notation](#roster-notation) — this basically lists all of the _unique_ objects belonging to the set. It looks like this:

$$
A=\{1,2,3,4,5\}
$$

Pretty simple, right?

## Set Membership

An object that is in a set is considered a __member__ of that set. Membership is denoted by the $\in$ symbol. If we take set $A$ above as an example, we could say $4 \in A$, or $4$ is a member of $A$. Conversely, we could say that $6 \notin A$, or $6$ is _not_ a member of $A$.

### Special Sets

$\emptyset$ — The empty set

$\mathbb{N}$ — Natural numbers, $\{0,1,2,3,4,5,6,...\}$

$\mathbb{Z}$ — Integers, $\{...,-3,-2,-1,0,1,2,3,...\}$

$\mathbb{Q} — The rational numbers$

$\mathbb{R} — The real numbers$

$U$ - Universe set, the set of all elements

$P()$ - The power set of any set

### Set Relationships

### Set Operations


### JavaScript Set Operations
Sets in JavaScript are data structures that replicate, more or less, some of the basic behavior of mathematical sets. They are collections of _unique_ elements.

I'm not going to go over everything you can do with JS sets, just a few set operations. If you wantt to read more head over to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

### addAll Function
It can feel like a real pain to add individual items to js sets. Here's a function that accepts a set and any number of objects and adds all the objects to the set.

```js
const addAll = function (set, ...members) {
  members.forEach((member) => set.add(member));
  return set;
};

const A = addAll(new Set(), 1,2,3,4,5);
const B = addAll(new Set(), 6,7,8,9,10);
const C = addAll(new Set(),1,3,5,7,9,11);
const D = addAll(new Set(),2,4,6,8,10);
const E = addAll(new Set(),12,14,16,18);
```

### Union Function
$A \cup B$

```js
const union = function(...sets) {
  const unionSet = new Set();

  sets.forEach((set) => {
    set.forEach((member) => unionSet.add(member));;
  });

  return unionSet;
}

console.log(union(A,B,C)); // { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 }

```

### Intersection Function

$A \cap B$

Next: [Graphs](/notes/discrete-math/graphs).
