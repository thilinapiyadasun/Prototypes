//++++++++++++++++++++++++++++++++++

//property descriptors in prototypes
/**
 * Writable - override value or not
 * Enumerable - iterate by for in / display in keys
 * cofigurable - can delete or not
 *
 */

let person = { name: "Thilina" };

Object.defineProperty(person, "name", {
  enumerable: false,
  writable: false,
  configurable: false
});

console.log(Object.keys(person));

// person.name = "Chamod"; gives error due to wrtbale false

// delete person.name; cannot delete configurable false
