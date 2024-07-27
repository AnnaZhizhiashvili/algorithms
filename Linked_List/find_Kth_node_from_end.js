import { LinkedList} from './singly_linked_list.mjs';


let myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);



myLinkedList.findKthFromEnd = function (k) {
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
