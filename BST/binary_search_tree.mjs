export class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;
        while(true) {
            if(temp.value === newNode.value) {
                return undefined;
            }
            if(newNode.value > temp.value) {
                if(temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            } else {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
        }
    }

    rInsert(value, currentNode) {
        if(currentNode === null) return new Node(value)
        if (value < currentNode.value) {
            currentNode.left = this.rInsert(value, currentNode.left)
        } else if(value > currentNode.value) {
            currentNode.right = this.rInsert(value, currentNode.right)
        }
        return currentNode;
    }

    contains(value){
        if(this.root === null) return false;

        let temp = this.root;

        while(temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right
            } else {
                return true;
            }
        }
        return false;
    }
    rContains(value, currentNode) {
        if(currentNode === null) return false;
        if(value === currentNode.value) return true;

        if(value <  currentNode.value) {
            return this.rContains(value, currentNode.left)
        } else {
            return this.rContains(value, currentNode.right)
        }
    }

    depthFirstValues(root) {
        const stack = [root];
        const values = [];
        while(stack.length !== 0) {
            let lastNodeInStack = stack[stack.length - 1];
            values.push(lastNodeInStack)
            if(lastNodeInStack.right) {
                stack.push(lastNodeInStack.right)
            }
            if(lastNodeInStack.left) {
                stack.push(lastNodeInStack.left)
            }
            stack.pop()
        }
        return values;
    }

}