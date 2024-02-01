class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList {
    constructor(){ 
        this.head = null
        this.size =0                           //just creating the linkedlist nothing more nothing less
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
}


const l1 = new LinkedList()

console.log("is llinklist empty?:",l1.isEmpty())
console.log("size:",l1.getSize())

