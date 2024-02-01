class Queue{
    constructor(){
        this.items ={}
        this.rear = 0
        this.first = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        const item = this.items[this.first]
        delete this.items[this.first]
        this.front++
        return item 
    }

    isEmpty(){
        return this.rear-this.first === 0
    }

    peek(){
        return this.items[this.first]
    }

    size(){
        return this.rear - this.first
    }

    print(){
        console.log(this.items)
    }
}

const queue = new Queue()

queue.enqueue(45)
queue.enqueue(2)
queue.enqueue(4)

console.log(queue.size())

queue.print()

console.log(queue.dequeue())

console.log(queue.peek())