class Queue{
    constructor(){
        this.items =[]
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(element){
        return this.items.shift()
    }

    isEmpty(){
       return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }else{
            return null
        }
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()

console.log(queue.isEmpty())

queue.enqueue(45)
queue.enqueue(65)
queue.enqueue(5)
queue.enqueue(25)
queue.dequeue()



queue.print()

console.log(queue.peek())