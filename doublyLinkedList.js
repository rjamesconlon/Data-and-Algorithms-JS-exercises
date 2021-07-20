class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let node = new Node(val);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(this.length === 0) return undefined;

        let node = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            node.prev = null;
        }

        this.length--;
        return node;
    }

    shift() {
        if(this.length === 0) return undefined
        let node = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
            node.next = null;
        }
        this.length--;
        return node;
    }

    unshift(val) {
        let node = new Node(val);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }
}

// TESTING
var DLL = new DoublyLinkedList();

// PUSH
console.log(DLL.push(5));
console.log(DLL.push(10));

// POP
// console.log(DLL.pop());
// console.log(DLL.pop());

// SHIFT
// console.log(DLL.shift());
// console.log(DLL.shift());

// UNSHIFT
console.log(DLL.unshift(15));
console.log(DLL.unshift(20));
