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
    // isSymmetric(root) {
    //     let temp = root;
    //
    //
    //     while(true) {
    //         if(temp.right !== temp.left) {
    //             return false;
    //         }
    //
    //     }
    //
    // }

}