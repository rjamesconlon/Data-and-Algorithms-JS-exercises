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
}

// TESTING
var DLL = new DoublyLinkedList();

// PUSH
console.log(DLL.push(5));
console.log(DLL.push(10));

// POP
console.log(DLL.pop());
console.log(DLL.pop());