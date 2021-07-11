class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    push(val) {
        let n = new Node(val);
        if(this.head === null && this.tail === null) {
            this.head = n;
            this.tail = n; 
        }
        else {
            this.tail.next = n;
            this.tail = n;
        }

        this.length++;
    }
}

// TESTING
// PUSH

var list = new SinglyLinkedList();
console.log(list.head, list.tail, list.length);
list.push(5);
console.log(list.head, list.tail, list.length);
list.push(10);
console.log(list.head, list.tail, list.length);