class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output)
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    reverseBetween(m, n) {
        if (this.head === null || m === n) return this;

        const dummy = new Node(0);
        dummy.next = this.head;
        let prev = dummy;

        // Move prev to the node just before the m-th node
        for (let i = 0; i < m - 1; i++) {
            prev = prev.next;
        }

        let current = prev.next; // m-th node
        let next = current.next; // (m+1)-th node

        // Swap nodes in the segment from m to n
        for (let i = 0; i < n - m; i++) {
            current.next = next.next;
            next.next = prev.next;
            prev.next = next;
            next = current.next;
        }

        // Update the head of the list
        this.head = dummy.next;
        return this;
    }
}



let myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");

const m = 2;
const n = 4;
myLinkedList.reverseBetween(m, n);

// console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
// myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5
    List after reversing between indexes of 2 and 4:
    1 -> 2 -> 5 -> 4 -> 3
*/
