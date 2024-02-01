class Node{
    constructor(data ,next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    //insert first node

    insertFirst(data){
        this.head = new Node(data,this.head)
    }

    //insert last node

    //insert at index

    //Get at index

    //Remove at index 

    //Clear list 

    //Print list data


}


const lst = new LinkedList()

lst.insertFirst(100)
lst.insertFirst(300)

console.log(lst)