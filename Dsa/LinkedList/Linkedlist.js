// add new node at start of the list 
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
        return this.size === 0      // checking if empty 
    }

    getSize(){
        return this.size            // finding the size of linked list 
    }

    prepend(value){
        const node = new Node(value) 
        if(this.isEmpty())
        {
            this.head = node
        }else{
            node.next = this.head              // adding value to the front of linked list [preppend 
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty())
        {
            this.head = node
        }
        else{
            let prev = this.head
            while(prev.next)                   //inserting node at last of the linked list 
            {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value,index){
        if(index<0||index>this.size)
        {
            return
        }
        if(index===0)
        {
            this.prepend(value)
        }else{
            const node = new Node(value)      // inserting a node at a index
            let prev = this.head
            for(let i=0;i<index-1;i++)
            {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }

    }

    remove(index){
        if(index<0||index>this.size){
            return
        }
        let removedNode
        if(index===0)
        {
            removedNode= this.head
            this.head = this.head.next
        }else{                                             // remove a node from an index 
            let prev = this.head
            for(let i=0;i<index-1;i++)
            {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value){
        if(this.isEmpty())
        {
            return null
        }
        if(this.head.value===value)
        {
            this.head=this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next&&prev.next.value!=value){
                prev = prev.next                               // removing a node that has a specific value
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
        while(cur)
        {
            arr.push(cur.value)                // converting linked list to array
            cur= cur.next
        }
        return arr
    }


    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let cur = this.head
        while(cur){
            if(cur.value===value)           // searching a node with a specified value 
            {
                return i
            }
            cur = cur.next
            i++
        }
        
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

    findMiddle() {
        let slow = this.head;
        let fast = this.head;
    
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
    
        return slow.value;
    }

    
    // printInReverseOrder() {
    //     if (this.isEmpty()) {
    //         console.log('The list is empty');
    //     } else {
    //         let cur = this.head;
    //         let listValues = '';
    //         while (cur) {
    //             listValues = `${cur.value} ${listValues}`;
    //             cur = cur.next;
    //         }
    //         console.log('In Reverse Order:', listValues);
    //     }
    // }

    removeDuplicates() {
        let current = this.head;
        let uniqueValues = new Set();
        let prev = null;

        while (current !== null) {
            if (uniqueValues.has(current.value)) {
               
                prev.next = current.next;
                this.size--;
            } else {
                uniqueValues.add(current.value);
                prev = current;
            }
            current = current.next;
        }
    }


    print(){
        if(this.isEmpty())
        {
           console.log('The list is empty')
        }
        else{
            let cur = this.head
            let listValues =''
            while(cur)
            {
                listValues +=`${cur.value} `        // to print the linked list 
                cur = cur.next
            }
            console.log(listValues)
        }
    }

}

let arr =[1,4,2,7,5,8]
const l1 = new LinkedList()





console.log("is llinklist empty?:",l1.isEmpty())
console.log("size:",l1.getSize())

l1.print()

l1.prepend(4)

l1.print()

l1.prepend(3)

l1.print()

l1.prepend(5)

l1.print()

l1.append(78)

l1.print()

l1.append(14)

l1.print()

l1.insert(41,3)

l1.print()

console.log(l1.remove(3))

l1.print()

console.log(l1.removeValue(3))

l1.print()

for(let i=0;i<arr.length;i++)
{
    l1.append(arr[i])
}

l1.print()

console.log(l1.toArray())

l1.print()

console.log(l1.search(2))


l1.print()

console.log(l1.findMiddle())

l1.removeDuplicates();

console.log(l1.getSize())

l1.print()