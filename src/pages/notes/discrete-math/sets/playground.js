const isMember = function(number, set) {
  return (set.has(number));
};

const addAll = function (set, ...members) {
  members.forEach((member) => set.add(member));
  return set;
};

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

const A = addAll(new Set(), 1,2,3,4,5);
const B = addAll(new Set(), 6,7,8,9,10);
const C = addAll(new Set(),1,3,5,7,9,11);
const D = addAll(new Set(),2,4,6,8,10);
const E = addAll(new Set(),12,14,16,18);
const U = new Set();

for (let i = 0; i < 30; i++) {
  U.add(i);
}

console.log(union(A,B,C));

console.log(intersection(A,C));

console.log(intersection(A,D));

console.log(isSubset(A,U));
console.log(isSubset(A,C));