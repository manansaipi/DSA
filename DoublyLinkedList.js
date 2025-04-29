class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null

    }
}

class DLinkedList {
    constructor(value){
        this.length = 0
        let nodeArray = []

        if( typeof(value) == "object"){
            nodeArray = value
        } else{
            nodeArray.push(value)
        }

        for (let i = 0; i < nodeArray.length; i++) {
            const newNode = nodeArray[i];
            this.push(newNode)
        }

    }

    static print (list) {
        let elements = []
        let temp = list.head;

        while(temp){
            elements.push(temp.value)
            temp = temp.next
        }
        elements.push("null")
        return elements.join(" <-> ")
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        let temp = this.tail
        if (this.length === 0)  return undefined
        
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next.prev = null
            this.tail.next = null
        }
        this.length--
        return temp
    }

    unshift(value){
        if (this.length === 0) {
            this.push(value)
        } else {
            const newNode = new Node(value)
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
            this.length++
        }
        return this.head
    }

    shift(){
        if (this.length == 0 ) return undefined
        let temp = this.head
        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else{
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        return temp
    }

    get(index){
        if (index < 0 || index >= this.length) return undefined;

        let temp = this.head
        if (index < this.length /2) { // loop from head
            for (let i = 0; i < index; i++) {
                temp = temp.next
            }
        } else { // loop from tail
            temp = this.tail
            for (let i = this.length -1; i > index; i--) {
                temp = temp.prev
            }
        }
        return temp
    }

    set(index, value){
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false
    }
    
    insert(index, value){
        if (index < 0 || index > this.length) return false;
        if (index == 0) return this.unshift(value)
        if (index == this.length) return this.push(value)

        let newNode = new Node(value)
        let temp = this.get(index)

        newNode.next = temp
        newNode.prev = temp.prev
        temp.prev.next = newNode
        temp.prev = newNode
        this.length++

        return true
    }

    remove(index){
        if (index == 0) return this.shift() 
        if (index == this.length - 1) return this.pop() 

        let temp = this.get(index)
        if (temp) {
            temp.prev.next = temp.next
            temp.next.prev = temp.prev
            temp.next = null
            temp.prev = null
        }
        this.length--
        return temp

    }

    swapFirstLast(){
        if (this.length < 2) return 

        let nextHead = this.head.next
        let prevTail = this.tail.prev

        this.head.next  = null
        this.head.prev  = prevTail
        
        this.tail.prev = null
        this.tail.next = nextHead
        
        nextHead.prev = this.tail
        prevTail.next = this.head

        this.tail = this.head
        this.head = nextHead.prev
        
        return this
        // udemy answer
        // if (this.length < 2) return;
        // const temp = this.head.value;
        // this.head.value = this.tail.value;
        // this.tail.value = temp;
    }
    reverse(){
        if (this.length < 2) return 
        
        let temp = this.head
        
        this.head = this.tail
        this.tail = temp
        
        temp = this.head
        let next = this.head.next
        let prev = this.head.prev

        while(prev){
            prev = temp.prev
            temp.next = prev
            temp.prev = next
            temp = temp.next
        }

        // GPT SOLUTION
        // if (this.length < 2) return;
    
        // let temp = this.head;
        
        // this.head = this.tail;
        // this.tail = temp;
        
        // let current = this.head;
    
        // while (current) {
        //     let next = current.next;
        //     current.next = current.prev;
        //     current.prev = next;
        //     current = next;  // Move to the next node (which was originally prev)
        // }

        // UDEMY SOLUTION
        // let current = this.head;
        // let temp = null;
 
        // while (current !== null) {
        //     temp = current.prev;
        //     current.prev = current.next;
        //     current.next = temp;
        //     current = current.prev;
        // }
 
        // temp = this.head;
        // this.head = this.tail;
        // this.tail = temp;
    }

    isPalindrome(){
        let headpointer = this.head
        let tailPointer = this.tail

        while(headpointer){

            if (headpointer.value != tailPointer.value ) {
                return false
            }
            headpointer = headpointer.next
            tailPointer = tailPointer.prev
        }
        return true
    }

    swapPairs(){
        let temp = this.head

        while (temp !== null && temp.next !== null) {
            let next = temp.next;
    
            // Swap values
            let tempVal = temp.value;
            temp.value = next.value;
            next.value = tempVal;
    
            // Move to the next pair
            temp = next.next;
        }
    }

 
}

let myDoublyLinkList = new DLinkedList([1, 2, 3])
myDoublyLinkList.push(4)
myDoublyLinkList.pop()
myDoublyLinkList.unshift(0)
myDoublyLinkList.shift()
console.log(myDoublyLinkList.get(2))
myDoublyLinkList.set(2, 4)
myDoublyLinkList.insert(2, 3)
myDoublyLinkList.insert(3, 5)
myDoublyLinkList.remove(3)
myDoublyLinkList.swapFirstLast()
console.log(DLinkedList.print(myDoublyLinkList))
myDoublyLinkList.reverse()
console.log(DLinkedList.print(myDoublyLinkList))




let myList2 = new DLinkedList([1, 2, 3, 2, 1])

console.log(DLinkedList.print(myList2))
console.log(myList2.isPalindrome())
myList2.push(40)
myList2.swapPairs()
console.log(DLinkedList.print(myList2))
console.log(myList2.isPalindrome())



// let myList = new DLinkedList(1)
// myList.push(4)
// console.log(myList.head)
// console.log(DLinkedList.print(myList))

