class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    preppend(value){
        const node = new Node(value)
        if(this.isEmpty())
        {
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }

    }

    removefront(){
        if(this.isEmpty()){
            return null
        }

        
    }

    removeend(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size==1)
        {
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next!==this.tail)
            {
                prev = prev.next
            }
            prev.next = null
            this.size--


        }
    }




    print(){
        if(this.isEmpty())
        {
            console.log('link list is empty')
        }
        let cur = this.head
        let listvalues = ''
        while(cur)
        {
            listvalues += `${cur.value} `
            cur= cur.next
        }
        console.log(listvalues)
    }




}

const list = new LinkedList()

list.preppend(2)
list.preppend(4)
list.preppend(6)

list.append(1)
list.append(3)
list.append(5)

list.removeend()

list.print()