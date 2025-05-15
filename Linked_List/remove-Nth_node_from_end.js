import { LinkedList} from './singly_linked_list.mjs';


let myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);

const removeNthFromEnd = function(head, n) {
    let dummy = new Node(null);
    dummy.next = head;
    let left = dummy;
    let right = head;
    for(let i = 0; i < n; i++){
        right = right.next;
    };

    while(right) {
        left = left.next;
        right = right.next;
    }
    left.next = left.next.next;

    //should return dummy.next instead of head, because what if the head is the nth node from the end?
    return dummy.next;

}