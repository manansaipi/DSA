class Node {
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
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;

        while (true) {
            if (newNode.value === temp.value) return undefined;

            if (newNode.value > temp.value) {
                if (temp.right == null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            } else {
                if (temp.left == null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
        }
    }

    contains(value) {
        let temp = this.root;

        while (temp) {
            if (temp.value === value) return true;

            if (value > temp.value) {
                temp = temp.right;
            } else {
                temp = temp.left;
            }
        }

        return false;
    }

    BFS() {
        let currentNode = this.root;
        let queue = [];
        let result = [];
        queue.push(currentNode);
        while (queue.length) {
            currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return result;
    }

    DFSPreOrder() {
        let result = [];
        function travarse(currentNode) {
            result.push(currentNode.value);
            if (currentNode.left) travarse(currentNode.left);
            if (currentNode.right) travarse(currentNode.right);
        }
        travarse(this.root);
        return result;
    }
    DFSPostOrder() {
        let result = [];
        function travarse(currentNode) {
            if (currentNode.left) travarse(currentNode.left);
            if (currentNode.right) travarse(currentNode.right);
            result.push(currentNode.value);
        }
        travarse(this.root);
        return result;
    }
    DFSInOrder() {
        let result = [];
        function travarse(currentNode) {
            if (currentNode.left) travarse(currentNode.left);
            result.push(currentNode.value);
            if (currentNode.right) travarse(currentNode.right);
        }
        travarse(this.root);
        return result;
    }
}

let myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);
console.log(myTree.BFS());
console.log(myTree.DFSPreOrder());
console.log(myTree.DFSPostOrder());
console.log(myTree.DFSInOrder());
