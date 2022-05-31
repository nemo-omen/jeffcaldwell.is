const A = new Set();

A.add(1);
A.add(2);
A.add(3);
A.add(4);
A.add(5);

const member = function(number, set) {
  return (set.has(number));
};

const addAll = function (set, ...members) {
  members.forEach((member) => set.add(member));
  
  return set;
};

const intersection = function(...sets) {
  const aIntersectionB = new Set();

  sets.forEach((set) => {
    set.forEach((member) => aIntersectionB.add(member));
  })

  return aIntersectionB;
};

console.log(`1 is a member of A: ${member(1, A)}`);

console.log(`6 is a member of A: ${member(6, A)}`);

console.log({A});

const B = addAll(new Set(), 6,7,8,9,10);

console.log({B});

const C = addAll(new Set(),2,4,6,8);

console.log({C});

console.log(intersection(A,B,C));