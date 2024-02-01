class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head =null
        this.size=0
    }

    isEmpty(){
       return this.size === 0
    }

    getSize(){
        return this.size
    }

    preppend(value){
        const node = new Node(value)
        if(this.isEmpty())
        {
            this.head = node
        }else{
              node.next = this.head
              this.head = node                                                  
        }
        this.size++
    }

    append(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            let cur = this.head
            while(cur.next){
                cur = cur.next
            }
            cur.next = node
        }
        this.size++
    }

    insert(value,t){
       if(t<0||t>this.size){
        return 
       }
       if(t==0){
        this.preppend(value)
       }else{
        const node = new Node(value)
        let prev = this.head
        for(let i=0;i<t-1;i++){
            prev= prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
       }
    }

    remove(t){
        if(t<0&&t>this.size)
        {
            return
        }
        let removedNode
        if(t==0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<t-1;i++)
            {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
    }

    removeValue(value){
        if(this.isEmpty()){
            console.log("list is empty")
        }
        if(this.head&&this.head.value==value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next&&prev.next.value!=value)
            {
                prev = prev.next
            }
            if(prev.next){
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    toArray(){
        let arr=[]
        let cur = this.head
        while(cur){
            arr.push(cur.value)
            cur = cur.next
        }
        return arr

    }

    reverse(){
        let prev = null
        let cur = this.head
        while(cur){
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }
        this.head = prev
    }



    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let cur = this.head
            let list = ''
            while(cur){
                list += `${cur.value} `
                cur = cur.next
            }
            console.log(list)
        }
    }


}

const l = new LinkedList()

l.preppend(1)
l.append(2)
l.preppend(3)
l.append(4)
l.append(5)

l.remove(3)
l.removeValue(2)
l.reverse()
l.print()

console.log(l.toArray())


