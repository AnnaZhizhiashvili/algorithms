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
        this.tail = this.head;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.heaud.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // WRITE THE FINDKTFROMEND METHOD HERE //
    findKthFromEnd(k) {
        let slow = this.head;
        let fast = this.head;
        for(let i = 0; i < k; i++) {
            if(fast === null) return null;
            fast = fast.next;
        }

        // When the loop terminates, the fast pointer has reached the end of the list.
        // Since the fast pointer started k steps ahead of the slow pointer,
        // the slow pointer now points to the kth node from the end of the list.
        while(fast) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow;

    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
    console.log(kthNodeFromEnd.value);
} else {
    console.log("Not found");
}


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    2th node from the end:
    4
*/
