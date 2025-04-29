class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }
    print(){
        let result = []
        let temp = this.top;

        while(temp !== null) {
            const element = temp.value;
            result.push(element)
            temp = temp.next;
        }
        return (result.join(" -> "))
    }
    

    push(value){
        const newNode = new Node(value)

        if(!this.top) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }

        this.length++
        return this
    }

    pop(){
        if (this.length == 0) return undefined
       
        let temp = this.top
        this.top = temp.next
        temp.next = null

        this.length--
        return temp
    }
}

let myStack = new Stack(1)
myStack.push(2)
myStack.push(3)
myStack.pop()
console.log(myStack.print())
console.log(myStack)




class Stack2 {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }
    
}



function reverseString(string) {
    // Your implementation goes here
    let storage = new Stack2()
    
    let strArr = string.split("")    
    let length = strArr.length
    
    for(let i = length-1; i>=0; i--){
        storage.push(strArr[i])
    }

    return storage.getStackList().join("")
}


function isBalancedParentheses(string) {
    // Your implementation goes here
    let storage = new Stack2()

    let strArr = string.split("")    
    let length = strArr.length

    for (let index = 0; index < length; index++) {
        const element = strArr[index];

        if (element == "(") {
            storage.push(element)
        } else {
            if (storage.isEmpty()) {
                return false // Unmatched closing parenthesis
            }
            storage.pop() // Match found, pop from stack
        }
    }
    
    return storage.isEmpty(); // Stack should be empty if balanced

}
function sortStack(stack) {
    let storage = new Stack2(); // Additional stack

    while (!stack.isEmpty()) {
        let temp = stack.pop();

        // Move elements from storage back to stack if they are greater than temp
        while (!storage.isEmpty() && storage.peek() > temp) {
            stack.push(storage.pop());
        }

        storage.push(temp);
    }

    // Move elements back to the original stack
    while (!storage.isEmpty()) {
        stack.push(storage.pop());
    }

    return stack.getStackList();
}

console.log(reverseString("halloo"));
console.log(isBalancedParentheses("(()()())"));

let myInputStack = new Stack2(-3)
myInputStack.push(0)
myInputStack.push(7)
myInputStack.push(1)
myInputStack.push(-2)

console.log(sortStack(myInputStack));
