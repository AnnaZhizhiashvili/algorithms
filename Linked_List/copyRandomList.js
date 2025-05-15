class Node {
  constructor(val, next = null, random = null) {
      this.val = val;
      this.next = next;
      this.random = random;
  }
}



const copyRandomList = (head) => {
    if(!head) return null;
    let map = new Map();
    let curr = head;
    while(curr) {
        map.set(curr, new Node(curr.val));
        curr = curr.next;
    };

    curr = head;
    while(curr) {
        let copy = map.get(curr);
        copy.next = map.get(curr.next) || null;
        copy.random = map.get(curr.random) || null;
        curr = curr.next;
    }
    return map.get(head)

}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(copyRandomList(head));