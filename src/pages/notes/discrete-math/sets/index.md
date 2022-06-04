---
title: Sets
pubDate: 2022-05-26 12:42:28
updated: 2022-06-01 08:03:09
layout: '$layouts/Note.astro'
setup:
  import Playground from './Playground.svelte';
---

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

## Special Sets

The empty set: $\phi$

$\mathbb{N}$ - The Natural Numbers, $\{0,1,2,3,4,...\}$ or $\{1,2,3,4,...\}$

$\mathbb{Z}$ - Integers, $\{...,-3,-2,-1,0,1,2,3,...\}$

$\mathbb{Q}$ - The rational numbers

$\mathbb{R}$ - The real numbers

$U$ - Universe set, the set of all elements

$P()$ - The power set of any set

## Set Relationships

## Set Operations


## JavaScript Set Operations
Sets in JavaScript are data structures that replicate, more or less, some of the basic behavior of mathematical sets. They are collections of _unique_ elements.

I'm not going to go over everything you can do with JS sets, just a few set operations. If you wantt to read more head over to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

Let's set up some simple exercises so we can play around with sets.

### addAll Function
It can feel like a real pain to add individual items to js sets. Here's a function that accepts a set and any number of objects and adds all the objects to the set.

```js
const addAll = function (set, ...members) {
  members.forEach((member) => set.add(member));
  return set;
};
```

After creating the above function, it's pretty easy to instantiate new sets. I'm going to go ahead and create a few and then use them for some exercises.

```js
const U = new Set(); // the universe for this exercise

for (let i = 0; i < 50; i++) {
  U.add(i);
}

const A = addAll(new Set(), 1,2,3,4,5);
const B = addAll(new Set(), 6,7,8,9,10);
const C = addAll(new Set(),1,3,5,7,9,11);
const D = addAll(new Set(),2,4,6,8,10);
const E = addAll(new Set(),12,14,16,18);

```

With the above code we have:

<!-- $U=\{x : x \in \mathbb{Z}, 0 < x < 50 \}$ - the universe, or the domain for all sets to follow. -->
$U=\{x : x \in \mathbb{Z}, 50 > x > 0 \}$ - the universe, or the domain for all sets to follow.

$A=\{1,2,3,4,5\}$

$B=\{6,7,8,9,10\}$

$C=\{1,3,5,7,9,11\}$

$D=\{2,4,6,8,10\}$

$E=\{12,14,16,18\}$



```js
const isSubset = function(lhs, rhs) {
  for (let member of lhs) {
    if (!rhs.has(member)) {
      return false;
    }
  }

  return true;
};

const isSuperSet = function(lhs,rhs) {
  for (let member of rhs) {
    if (!lhs.has(member)) {
      return false;
    }
  }

  return true;
}

const cardinality = function(set) {
  return set.size;
}

const union = function(...sets) {
  const setUnion = new Set();

  sets.forEach((set) => {
    set.forEach((member) => setUnion.add(member));
  })

  return setUnion;
};

const intersection = function (...sets) {
  const setIntersection = new Set();

  sets.reduce((previous, current) => {
    current.forEach((member) => {
      if(previous.has(member)) {
        setIntersection.add(member);
      }
    });
  });

  return setIntersection;
};
```

<!-- <Playground client:load /> -->