---
title: Sets
date: 2022-05-26 12:42:28
updated: 2022-05-26 12:42:33
layout: '../../../../layouts/Note.astro'
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

### Member JS Function

```js
const A = new Set();
A.add(1);
A.add(2);
A.add(3);
A.add(4);
A.add(5);

const member = function(number, set) {
  return (set.has(number));
};

member(1, A); // true

member(6, A); // false
```

<script is:inline>
const A = new Set();
A.add(1);
A.add(2);
A.add(3);
A.add(4);
A.add(5);

const member = function(number, set) {
  return (set.has(number));
};

console.log(`1 is a member of A: ${member(1, A)}`);

console.log(`6 is a member of A: ${member(6, A)}`);
</script>

### Special Sets

$\emptyset$ — The empty set

$\mathbb{Z}$ — Integers, $\{...,-3,-2,-1,0,1,2,3,...\}$

$\mathbb{N}$ — Natural numbers, $\{0,1,2,3,4,5,6,...\}$


Next: [Graphs](/notes/discrete-math/graphs).
