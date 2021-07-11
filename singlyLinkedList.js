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

    unshift(val) {
        let n = new Node(val);
        if(this.length === 0) {
            this.head = n;
            this.tail = n;
        }
        else {
            n.next = this.head;
            this.head = n;
        }
        
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        else {
            var node = this.head;
            for(var count = 0; count < this.length; count++) {
                if(count === idx) return node; 
                node = node.next;
            }
        }

        return null;
    }

    set(idx, val) {
        let n = this.get(idx);
        if (n !== null) {
            n.val = val;
            return true;
        } 

        return false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;

        if (idx === this.length) {
            this.push(val);
            return true;
        }

        if (idx === 0) {
            this.unshift(val);
            return true;
        }

        var newNode = new Node(val);
        var tmpNode = this.get(idx - 1);

        newNode.next = tmpNode.next.next;
        tmpNode.next = newNode;
        return true;
    }
}

// TESTING

var list = new SinglyLinkedList();

//  // PUSH
console.log("PUSH");
console.log(list.push(5));
console.log(list.push(10));

// // POP

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// // SHIFT
// console.log("SHIFT");
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());

// UNSHIFT
console.log("UNSHIFT");
console.log(list.unshift(3));
console.log(list.unshift(6));

// GET
console.log("GET");
console.log(0, list.get(0));
console.log(1, list.get(1));
console.log(10, list.get(10));
console.log(-1, list.get(-1));

// SET
console.log("SET");
console.log(0, list.set(0, 100));
console.log(1, list.set(1, 30));
console.log(1, list.set(2, 40));
console.log(1, list.set(3, 50));

// INSERT
console.log("INSERT");
console.log(list.insert(3, 100));
console.log(list.insert(1, 50));



// SHOW LIST
console.log("LIST:");
for(let n = list.head; n !== null; n = n.next) {
    console.log(n);
};