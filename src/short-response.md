# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

In your own words, define what **inheritance** is in object-oriented programming. Then, explain what benefits it provides to developers who use it. Consider what problem it solves — what would be harder or messier without inheritance?

## Response 1
Inheritance in object-oriented programming is how you can pass down the properties and methods of a parent class to a child class.

---

## Prompt 2

Consider these classes:

```js
class Animal {
  eat() { return "eating"; }
}

class Dog extends Animal {
  bark() { return "woof"; }
}

class Puppy extends Dog {
  play() { return "playing"; }
}

const rex = new Puppy();
```

Explain what happens when `rex.eat()` is invoked. In your answer, describe the role of **inheritance** and the **prototype chain**.

## Response 2

When ``rex.eat()`` is invoked, JavaScript looks for the eat method on the ``rex`` object. Since ``rex`` is an instance of ``Puppy``, it first checks ``Puppy.prototype``. The method isn’t there, so it moves up the **prototype chain**: ``rex -> Puppy.prototype -> Dog.prototype -> Animal.prototype -> Object.prototype -> Null``.`

It finds ``eat()`` defined on ``Animal.prototype`` and executes it, returning ``"eating"``.

This happens because of **inheritance** the ``Puppy`` class **inherits** from ``Dog``, which **inherits** from ``Animal``. Through this chain, ``rex`` gains **access** to all methods defined in its parent and ancestor classes, even though those methods aren’t directly defined in ``Puppy``.

---

## Prompt 3

Look at these classes:

```js
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getDetails() {
    return `${this.name} earns $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    // YOUR CODE HERE
    super(name, salary)
    this.department = department;
  }
  getDetails() {
    // YOUR CODE HERE - should include both the Employee details 
    // AND the department info
    return `${super.getDetails()} department: ${this.department}`
  }
}
```

Complete the `Manager` class by filling in the `constructor` and `getDetails` methods. Explain why you need to use `super` in each method and what would happen if you didn't use it.

## Response 3

We use ``super(name, salary)`` in the constructor to call the parent class’s constructor and initialize the ``name`` and ``salary`` properties inherited from ``Employee``. This prevents repeating code that already exists in the parent class.

In the ``getDetails()`` method, we use ``super.getDetails()`` to access and reuse the parent version of the method, then extend it by adding the department information.

If we didn’t use super in the constructor, JavaScript would throw an error because a subclass must call ``super()`` before using this. And without ``super.getDetails()``, we’d have to rewrite the entire method logic instead of reusing the one from Employee.