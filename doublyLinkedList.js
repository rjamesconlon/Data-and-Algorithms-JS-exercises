class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if (this.length === 0) {
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
        if (this.length === 0) return undefined;

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
        if (this.length === 0) return undefined
        let node = this.head;
        if (this.length === 1) {
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
        if (this.length === 0) {
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

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;

        if(idx <= this.legnth/2) {
            var node = this.head;
            for (var count = 0; count < this.length; count++) {
                if (count === idx) return node;
                node = node.next;
            }
        }
        else {
            var node = this.tail;
            for (var count = this.length - 1; count >= 0; count--) {
                if (count === idx) return node;
                node = node.prev;
            }
        }
        return null;
    }

    set(idx, val) {
        let node = this.get(idx);
        if (node !== null) {
            node.val = val;
            return true;
        } 

        return false;
    }
}

// TESTING
var DLL = new DoublyLinkedList();

// PUSH
DLL.push(5);
DLL.push(10);

// POP
// console.log(DLL.pop());
// console.log(DLL.pop());

// SHIFT
// console.log(DLL.shift());
// console.log(DLL.shift());

// UNSHIFT
DLL.unshift(15);
DLL.unshift(20);

// GET
// console.log("index 2", DLL.get(2));
// console.log("index 1", DLL.get(1));

// SET 
console.log(DLL.set(2, 100));
console.log(DLL.set(1, 2000));
