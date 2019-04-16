class Element {
    constructor(value) {
        this.value = value;
        this.next = value === 1 ? null : value;
    }
}

class List {
    constructor(arg = []) {
        this.length = arg.length;
    }
    add(value) {
        this.list.push(value);
    }
}

export { Element, List };