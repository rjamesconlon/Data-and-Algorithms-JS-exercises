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
        return this;
    }

    pop() {
        if(this.head === null) return undefined;
        else if (this.length === 1) {
            let n = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return n;
        }
        else
        {
            let n = this.head;
            while(n.next.next !== null) {
                n = n.next;
            }

            n.next = null;
            this.tail = n;
            this.length--;
            return n;
        }
    }

    shift() {
        if(this.head === null) return undefined;
        let head = this.head;

        this.head = this.head.next;
        this.length--;

        if (this.length === 0) this.tail = null;

        return head;
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

// POP

// console.log(list.head, list.tail, list.length);
// list.pop();
// console.log(list.head, list.tail, list.length);
// list.pop();
// console.log(list.head, list.tail, list.length);

// SHIFT
console.log("SHIFT");
console.log(list.head, list.tail, list.length);
console.log(list.shift());
console.log(list.head, list.tail, list.length);
console.log(list.shift());
console.log(list.head, list.tail, list.length);

