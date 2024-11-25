// ------------------------------------------------------------------------
// 1. Object Literal
// ------------------------------------------------------------------------

const st = {
    roll: 101,
    name: "John",
    cgpa: 7.7,

    study: function () {
        console.log("Study to upskill");
    },

    intro: function () {
        console.log("Roll: " + this.roll + " Name: " + this.name + " CGPA: " + this.cgpa);
    }
};

st.study();
st.intro();

/*
Expected Output:
Study to upskill
Roll: 101 Name: John CGPA: 7.7
*/

// ------------------------------------------------------------------------
// 2. Class with Constructor and Methods
// ------------------------------------------------------------------------

class Student {

    constructor(roll, name, cgpa) {
        this.roll = roll;
        this.name = name;
        this.cgpa = cgpa;
    }

    study() {
        console.log("\nStudy to upskill");
    }

    intro() {
        console.log("Roll: " + this.roll + " Name: " + this.name + " CGPA: " + this.cgpa);
    }
}

const s1 = new Student(101, "John", 7.7);
const s2 = new Student(102, "Smith", 8.1);

s1.study();
s1.intro();
s2.study();
s2.intro();

/*
Expected Output:
Study to upskill
Roll: 101 Name: John CGPA: 7.7

Study to upskill
Roll: 102 Name: Smith CGPA: 8.1
*/

// ------------------------------------------------------------------------
// 3. Inheritance with Method Overriding and Child-Specific Methods
// ------------------------------------------------------------------------

class ElectronicDevice {
    getCharged() {
        console.log("Plug in to charge");
    }

    use() {
        console.log("Use for making work easier");
    }
}

// Inheritance
class Laptop extends ElectronicDevice {
    // Method overriding
    use() {
        console.log("Use laptop for calculations and more");
    }

    // Child-specific method
    openBrowser() {
        console.log("Use browser to search on the internet");
    }
}

const laptop = new Laptop();
laptop.getCharged();
laptop.use();
laptop.openBrowser();

/*
Expected Output:
Plug in to charge
Use laptop for calculations and more
Use browser to search on the internet
*/

// ------------------------------------------------------------------------
// 4. Parent and Child Class Example with Constructor
// ------------------------------------------------------------------------

class Parent {
    constructor() {
        console.log("Parent constructor");
    }
}

class Child extends Parent {
    constructor() {
        super(); // Call parent constructor
        console.log("Child constructor");
    }
}

const childInstance = new
