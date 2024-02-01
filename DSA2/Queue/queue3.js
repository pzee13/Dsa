class Node{
    constructor(value){
        this.value =value
        this.next = null
    }
}


class Queue{
    constructor(value){
        const node = new Node(value)
        this.first = node
        this.last = node
    }

    enqueue(value){
        const node = new Node(value)
        if(this.length===0){
            this.first=node
            this.last= node
        }else{
            this.last.next = node
            this.last = node
        }
        this.length++
        return this
    }

    dequeue(){
        if(this.length===0){
            return undefined
        }
        let temp = this.first
        this.first = this.first.next
        temp = null
        this.length--
        return temp
    }

    display(){
        let cur = this.first
        while(cur){
            console.log(cur.value)
            cur = cur.next
        }
    }
}

const queue = new Queue(5)

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(40)

queue.dequeue()
queue.dequeue()
queue.display()