// 1 > 2 > 3 > 4 > 5   k = 2
// 2 > 1 > 4 > 3 > 5

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseKGroup = (head, k) => {
  // we need dummy node, becaue we always need to have a reference to the previous group's tail
  // because we need to connect the previous group's tail to the next group's head
  // and for the first group, we don't have a previous group's tail, so we need to use a dummy node
  // to start with
  const dummy = new ListNode();
  dummy.next = head;
  let groupPrev = dummy;
  while (true) {
    let kth = this.findKthNode(groupPrev, k);
    if (!kth) break;

    // we need to find the next group's head
    // because after reversing we will need to connect newly reversed group's tail to the next group's head
    let groupNext = kth.next;

    // we need to reverse the current group
    // This is the tricky part Anna! Do u remember why I need to use groupNext as the prev?
    // because after reversing we will need to connect newly reversed group's tail to the next group's head
    // Take a look at the while block, you are saying that curr.next = prev, and for the first iteration
    // prev is groupNext, so curr.next = groupNext, which is the next group's head
    // example: 1 > 2 > 3 > 4 > 5, k = 2
    // after reversing 2 > 1 > 3 > 4 > 5, we need to connect 1 > 3, so we need to use groupNext as the prev
    // in ordinary reverse linked list, we use prev = null null > 1 > 2 > 3 > 4 > 5  would be 5 > 4 > 3 > 2 > 1 > null
    let prev = groupNext;
    let curr = groupPrev.next;
    while (curr !== groupNext) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    // and this one is even trickier :D
    // remember what is left to do after reversing the current group?
    // we need to connect groupPrev to the newly reversed group's head, which is kth (but for now groupPrev is pointing to the previous group's tail)
    // that's why we are doing groupPrev.next = kth, which is the newly reversed group's head;
    // but we also need to update groupPrev to the next group's head, which is groupNext
    // groupPrev should become groupPrev.next, because initially groupPrev.next was the head of the current group, but after reversing it is the tail of the current group and tail of the current group should become new groupPrev;
    // but since we are setting groupPrev.next = kth, we need to save the old groupPrev.next
    // so we can use it to update groupPrev to the next group's head
    let tmp = groupPrev.next;
    groupPrev.next = kth;
    groupPrev = tmp;
  }
  return dummy.next;
};

const findKthNode = (curr, k) => {
  while (curr && k > 0) {
    curr = curr.next;
    k--;
  }
  return curr;
};
