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
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
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
        let curr = this.head;
        for(let i = 0; i < m -1; i++) {
            curr = curr.next;
        }
        let lastNodeOfFirstUnreversedList = curr;
        let headOfReversedList = lastNodeOfFirstUnreversedList.next;
        console.log(lastNodeOfFirstUnreversedList.value, "lastNodeOfFirstUnreversedList")
        console.log(headOfReversedList.value, "headOfReversedList")


        for (let i = 0; i < n - m + 1; i++) {
            curr = curr.next;
        }
        const lastNodeOfReversedList = curr;
        const headOfSecondUnreversedList = lastNodeOfReversedList.next;

        console.log(lastNodeOfReversedList.value, "lastNodeOfReversedList")
        console.log(headOfSecondUnreversedList, "headOfSecondUnreversedList")

        // let node = this.head;
        // this.head = this.tale;
        // this.tale = node;
        let next;
        let prev = null;
        let node = headOfReversedList;
        console.log("******************")
        for(let i = 0; i < n - m; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        console.log("******************")
        lastNodeOfFirstUnreversedList.next = node
        headOfReversedList.next = node;
        this.printList()
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

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
