class Node{
    constructor(){
        this.children = new Map()
        this.end = false
    }
}
class TrieNode{
    constructor(){
        this.root =  new Node()
    }


    insert(str){
        for(let i=0;i<str.length;i++){
            this.insertsuffixtree(i,str)
        }
    }

    insertsuffixtree(index,str){
        let trieNode = this.root
        for(let i=index;i<str.length;i++){
            const letter = str.charAt(i)
            // if(trieNode ==null){
            //     trieNode.children.set(letter)
            // }
            if(!trieNode.children.has(letter)){
                const node = new Node()
                trieNode.children.set(letter,node)
            }
            trieNode.children.get(letter)
        }
        trieNode.end = true
        return trieNode
    }

    search(str){
        let trieNode = this.root
        for(let i=0;i<str.length;i++){
            const letter = str.charAt(i)
            if(!trieNode.children.has(letter)){
                return false
            }
            trieNode.children.get(letter)
        }
        return trieNode.end
    }

}

const l = new TrieNode()

l.insert('aswin')
console.log(l.search('asw'))
console.log(l)

