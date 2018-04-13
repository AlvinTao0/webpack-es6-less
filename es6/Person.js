class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        return `Hello,我的名字是${this.name},我今年${this.age}岁！！`;
    }
}

export default Person;