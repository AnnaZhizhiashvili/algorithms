function ListNode(val) {
    this.val = val;
    this.next = null;
}


    const getIntersectionNode = function(headA, headB) {
        if (!headA || !headB) return null; // If either list is empty, no intersection
        const nodes = new Set();
        let temp = headA;
        while(temp) {
            nodes.add(temp);
            temp = temp.next;
        }

        temp = headB;
        while(temp) {
            if(nodes.has(temp)) return temp;
            temp = temp.next;
        }
        return null;
    };

const list1 = new ListNode(4);
list1.next = 1;
list1.next = 8;
list1.next = 4;
list1.next = 5;


const list2 = new ListNode(5)
list2.next = 6;
list2.next = 1;
list2.next = 8;
list2.next = 4;
list2.next = 5;



console.log(getIntersectionNode(list1, list2))