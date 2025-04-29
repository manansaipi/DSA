class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.head == null) {
            return undefined
        }
        let temp = this.head;
        let pre = this.head;

        while(temp.next){
            pre = temp
            temp = temp.next
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if(this.length == 0) 
        {
            this.head = null;
            this.tail = null;
        }

        return temp
        
    }

    unshift(value){
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            let temp = this.head
            this.head = newNode
            this.head.next = temp
        }
        this.length++
        return true
        
    }

    shift(){
        if (!this.head) {
            return null
        }
        let temp = this.head
        this.head = temp.next
        this.length--
        if (this.length == 0) {
            this.tail = null
        }
        return this

    }

    get(index){
        if(!this.checkIndex(index)) return undefined
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }

        return temp
    }
    checkIndex(index) {
        if (index < 0 || index >= this.length) {
            return false
        }
        return true
    }

    set(index, value){
        let temp = this.get(index) 
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {

        // if (index > this.length || index < 0) {
        //     return false
        // } else if (index == this.length) {
        //     this.push(value)
        //     return true
        // } else if (index == 0) {
        //     this.unshift(value)
        //     return true
        // } else {
        //     const newNode = new Node(value)
        //     let temp = this.head
        //     for (let i = 0; i < index-1; i++) {
        //         temp = temp.next
        //     }
        //     newNode.next = temp.next
        //     temp.next = newNode
        //     this.length++
        //     return true;
        // }
        // or
        if (index > this.length || index < 0) return false
        if (index == 0) return this.unshift(value)
        if (index == this.length) return this.push(value)

        const newNode = new Node(value)
        const temp = this.get(index - 1)
        if (temp) { // actualy this if statement is unnecesarry, because the get index will always returning a value because the index is always a valid index since we've alredy prevend the invalid index above 
            newNode.next = temp.next
            temp.next = newNode
            this.length++
        }
        return true;

    }

    remove(index) {
        if(!this.checkIndex(index)) return null
        if (index == 0) return this.shift()
        if (index == this.length -1 ) return this.pop()

        let before = this.get(index - 1)
        let temp = before.next
        if (temp) {
            before.next = temp.next
            temp.next = null
            this.length--
        }
        return temp
    }

    reverse(){
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let prev = null
        let next =null
        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev;
            prev = temp
            temp = next
        }
    }
    static print(list){
        let result = []
        let temp = list.head;

        while(temp !== null) {
            const element = temp.value;
            result.push(element)
            temp = temp.next;
        }
        // for (let index = 0; index < list.length; index++) {
        //     const element = temp.value;
        //     result.push(element)
        //     temp = temp.next;
        // }
        return (result.join(" -> "))
    }

    // findMiddleNode(){
    //     let slow = this.head;
    //     let fast = this.head;

    //     while (fast != null && fast.next != null) {
    //         fast =fast.next.next
    //         slow = slow.next
    //     }
        
    //     return slow.value;
    // }

     findMiddleNode(){
        let middle = this.head
        let lastItemPointer = this.head
        
        while(lastItemPointer != null && lastItemPointer.next != null) {
            middle = middle.next
            lastItemPointer = lastItemPointer.next.next
        }
        return middle.value

    }
    static mergeTwoLists(list1, list2 ){
        
        let mergedNode = new Node(0)
        let current = mergedNode

        let l1 = list1.head
        let l2 = list2.head

        while(l1 !== null && l2 !== null){
            if (l1.value < l2.value) {
                current.next = l1
                l1 = l1.next
            } else {
                current.next = l2
                l2 = l2.next
            }
            current = current.next

        }
        current.next = l1 !== null ? l1 : l2

        return mergedNode.next;
    }

    static removeDuplucates(list){
        
        let one = list.head
        let two = one.next

        while(one.next !== null){
            if (one.value == two.value) {
                one.next = two.next
                two = two.next
                list.length--
            }else {
                one = two
                two = two.next
            }
        }

        return list;
    }

    static reverseNode(list, k) {

        if (list == null) return list

        // can only use next & value

        let head = list.head
        let pointer = list.head
        let tail =  list.head
        while(pointer.next.next !== null){
            pointer = pointer.next;
            tail = pointer.next;
            
        }
        for (let index = 0; index < k; index++) {
            tail.next =  head
            head = tail.next
            pointer.next = null
            head = tail
            tail = pointer
            let secondPointer = head
            while(secondPointer.next.next !== null){
                secondPointer = secondPointer.next
                pointer = secondPointer

            }



            // while(secondPointer.next.next !== null){
            //     pointer = secondPointer
            //     tail = secondPointer.next
            //     secondPointer = secondPointer.next
            // }
        }

        return head
    }

    static rotateRight = function(head, k) {
        if (k == 0 || head === null || head.next === null) {
            return head;
        }

        let length = 1;
        let test = head;
        while (test.next !== null) {
            length++;
            test = test.next;
        }
        console.log(length);
        console.log(k);

        length = k % length;
        console.log(length)
    
        if (length == 0) {  
            return head;
        }
        
        for (let i=0; i<length; i++) {
            let temp = head;
    
            while(temp.next.next !== null) {
                temp = temp.next;
            }
            let tail = temp.next;
            temp.next = null;
            tail.next = head;
            head = tail;
        }
        return head;
    };

    findKthFromEnd(k) {

        let first = this.head
        let second = this.head

        for (let index = 0; index < k; index++) {
            if(!first) return null
            first = first.next
        }

        while(first){
            first = first.next
            second = second.next
        }
        console.log(second.value)
        return  second

    }

    partitionList(x) {
        let dummyOne = new LinkedList(0)
        let dummyTwo = new LinkedList(0)

        let pointerOne = dummyOne.head
        let pointerTwo = dummyTwo.head

        let pointerThis = this.head


        while(pointerThis){
            if (pointerThis.value < x) {
                // console.log(pointerThis.value)
                pointerOne.next = pointerThis
                pointerOne = pointerOne.next
            } else {
                pointerTwo.next = pointerThis
                pointerTwo = pointerTwo.next
            }
            pointerThis = pointerThis.next
        }
        // Important! Terminate the second list
        pointerTwo.next = null;

        pointerOne.next = dummyTwo.head.next;
        console.log(dummyOne.head.next)
        return dummyOne.head.next
    }
    removeDuplicates(){
        if (!this.head) return this; // If the list is empty, return as is

	    let storage = new Set();
        let prev = null
        let pointer =  this.head;
        while(pointer ){
            if(storage.has(pointer.value)){
                prev.next = pointer.next
            } else {
                storage.add(pointer.value)
                prev = pointer
            }
            pointer = pointer.next; // Move pointer forward in all cases
            
        }
        console.log(storage)
        return this
	}

    binaryToDecimal (){
        let power = this.length - 1
        let result = 0
        let pointer = this.head

        console.log(result)

        while(pointer){
            result = (2 ** power) * pointer.value + result  
            console.log(result)
            pointer = pointer.next
            power--
        }

        return result
    }

    // Function to reverse nodes in a linked list between positions m and n (0-based index)
    reverseBetween(m, n) {
        // Check if the list is empty. If it is, no action is needed.
        if (this.head === null) return;
    
        // Create a dummy node. This is a common technique used in linked list problems
        // to simplify edge cases, like when modifying the head of the list.
        const dummy = new Node(0);
    
        // Link this dummy node to the head of the list.
        // Now, dummy acts as a precursor to the head node.
        dummy.next = this.head;
    
        // 'prev' will eventually point to the node just before the start of the reversal.
        // Initially, 'prev' is set to the dummy node.
        let prev = dummy;
        console.log(prev)
    
        // Iterate to position 'prev' to the node just before where reversal begins.
        // Since indices are 0-based, this loop moves 'prev' 'm' nodes forward.
        for (let i = 0; i < m; i++) {
            prev = prev.next;
        }
    
        // 'current' points to the first node that will be reversed.
        // This is the mth node in the list (considering 0-based indexing).
        let current = prev.next;
    
        // The loop for the actual reversal of the segment between m and n.
        // It runs (n - m) times, moving each node in turn to the position after 'prev'.
        for (let i = 0; i < n - m; i++) {
            // 'temp' temporarily stores the next node in line to be moved.
            const temp = current.next;
    
            // Bypass 'temp' in the current positioning.
            current.next = temp.next;
    
            // Insert 'temp' between 'prev' and 'prev.next'.
            // This step effectively moves 'temp' to the front of the reversal segment.
            temp.next = prev.next;
            prev.next = temp;
        }
    
        // Update the head of the list if the head was part of the reversal.
        // This is where the dummy node becomes useful, as it simplifies this operation.
        this.head = dummy.next;
    }

    static removeElements = function(head, val) {
        while (head !== null && head.head.value === val) {
            head = head.next;
        }
        let pointer = head.head
        while(pointer && pointer.next){
            if (pointer.next.val == val) {
                pointer.next = pointer.next.next;
            } else {
                pointer = pointer.next
            }
            
        }
        return head
    };

}  

let listremoveElements = new LinkedList(1);

listremoveElements.push(3)
listremoveElements.push(2)
listremoveElements.push(3)
listremoveElements.push(3)
listremoveElements.push(4)
listremoveElements.push(5)

// console.log(LinkedList.print(listremoveElements))
// let varListremoveElementsAfterRemove = LinkedList.removeElements(listremoveElements, 1) 
// console.log(LinkedList.print(varListremoveElementsAfterRemove))


console.log("---------------------------------------------------------------------")
let reverseBetween = new LinkedList(1);
reverseBetween.push(2)
reverseBetween.push(3)
reverseBetween.push(4)
reverseBetween.push(5)
// from : 1 -> 2 -> 3 -> 4 -> 5
// expected : 1 -> 4 -> 3 -> 2 -> 5
let revBetw = reverseBetween.reverseBetween(1, 3)
// console.log(LinkedList.print(revBetw));
// console.log(revBetw)


console.log("---------------------------------------------------------------------")
let binaryLS = new LinkedList(1);
binaryLS.push(0)
binaryLS.push(1)
binaryLS.push(1)
console.log(binaryLS.binaryToDecimal(binaryLS))


console.log("---------------------------------------------------------------------")
let listRemoveDups = new LinkedList(3);
listRemoveDups.push(3)
listRemoveDups.push(3)
listRemoveDups.push(1)
listRemoveDups.push(1)
console.log(LinkedList.print(listRemoveDups))

let removeDuplicate = listRemoveDups.removeDuplicates(5)
console.log(LinkedList.print(removeDuplicate))


console.log("---------------------------------------------------------------------")
let listPartitionList = new LinkedList(3);
listPartitionList.push(8)
listPartitionList.push(5)
listPartitionList.push(10)
listPartitionList.push(2)
listPartitionList.push(1)
let partitionList =  listPartitionList.partitionList(5)
// from : 3 -> 8 -> 5 -> 10 -> 2 -> 1 
// expected : 3 -> 2 -> 1 -> 8 -> 5 -> 10
console.log("---------------------------------------------------------------------")






let list1 = new LinkedList(1);

list1.push(1)
list1.push(2)
list1.push(3)
list1.push(3)
list1.push(3)
list1.push(4)
list1.push(5)
let tempList = list1.findKthFromEnd(1)



console.log(LinkedList.print(list1))
let removeDups = LinkedList.removeDuplucates(list1) 
console.log(LinkedList.print(removeDups))

let reverseNode = LinkedList.reverseNode(list1, 2) 
console.log(reverseNode)
// console.log(LinkedList.print(reverseNode))

let testList = new LinkedList(1)
testList.push(2)
testList.push(3)
testList.push(4)
testList.push(5)
console.log(LinkedList.print(testList))
let result = LinkedList.rotateRight(testList.head, 25)
console.log(result)




let list2 = new LinkedList(1);
list2.push(3)
list2.push(4)

console.log(LinkedList.mergeTwoLists(list1, list2))

let removeDups2 = LinkedList.removeDuplucates(list1)

console.log(LinkedList.print(removeDups2))







let myLinkedList = new LinkedList(1);
myLinkedList.push(2)
myLinkedList.push(3)
console.log(LinkedList.print(myLinkedList))

console.log(myLinkedList.findMiddleNode())
myLinkedList.reverse()
console.log(LinkedList.print(myLinkedList))

let newLinkedList = new LinkedList(2);
newLinkedList.push(24)
newLinkedList.unshift(28)

console.log(LinkedList.print(newLinkedList))

console.log(newLinkedList.length)

myLinkedList.unshift(20)
myLinkedList.unshift(2)
myLinkedList.set(2, 30)







// myLinkedList.unshift(200)
// myLinkedList.unshift(20)
// myLinkedList.unshift(2)
// myLinkedList.shift()
// console.log(myLinkedList.set(1, 30))
// console.log(myLinkedList.insert(1, 9))
// console.log(myLinkedList.remove(1))

console.log(myLinkedList)
console.log(myLinkedList.get(1))

// var hasCycle = function(head) {
//     let slow = head
//     let fast = head

//     while(fast && fast.next) {
        
//         slow = slow.next
//         fast = fast.next.next

//         if(slow == false) {
//             return true
//         }
//         return false

//     }
// };