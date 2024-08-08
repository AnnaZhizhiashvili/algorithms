export class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


export class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }


    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };

    pop() {
        if (!this.head) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;

    }

    unshift(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        const temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if (index < this.length / 2) {
            for (let i = 0; i < this.length / 2; i++) {
                if (index === i ) {
                    return temp;
                }
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i >= this.length / 2; i--) {
                if (i === index) {
                    return temp
                }
                temp = temp.prev;
            }
        }
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp ) {
            temp.value = value;
            return true;
        } else{
            return false;
        }
    }

    insert(index, value) {
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index >= this.length) return undefined;
        let before = this.get(index - 1);
        let after = before.next;
        const newNode = new Node(value);

        newNode.next = after;
        newNode.prev = before;
        before.next = newNode;
        after.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop;
        if (index < 0 || index >= this.length) return undefined;

        let temp = this.get(index)
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }

    reverse() {
        if (this.length === 0 || this.length === 1) return undefined;

        // Swap head and tail
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        // Iterate through the list and swap next and prev for each node
        let temp = null;
        while (current !== null) {
            // Swap next and prev pointers
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            // Move to the next node (which is actually the previous node in the original list)
            current = current.prev;
        }

        // At the end of the loop, temp will point to the new head's next node, so we need to correct the head and tail pointers
        this.head.prev = null;
        this.tail.next = null;

        return this;
    }


}


