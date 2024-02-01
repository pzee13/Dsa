class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(value){
        const node = new Node(value)
        this.top = node
        this.length = 1
    }

    push(value){
        const node = new Node(value)
    }
}