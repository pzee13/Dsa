class Node{
    constructor(){
        this.children = new Map()
        this.end = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
        
    }

    insert(str){
        this.populateSuffixTrie(str)
    }




    populateSuffixTrie(str){
        for(let i=0;i<str.length;i++){
            this.insertAtSubstring(i,str)
        }
    }

    insertAtSubstring(index,str){
        let trieNode = this.root
        for(let i=index;i<str.length;i++){
            const letter = str.charAt(i)
            if(!trieNode.children.has(letter)){
                const newNode = new Node()
                trieNode.children.set(letter,newNode)
            }
            trieNode = trieNode.children.get(letter)
        }
        trieNode.end = true
    }




    has(str){
        let trieNode = this.root
        for(let i=0;i<str.length;i++){
            let letter = str.charAt(i)
            if(!trieNode.children.has(letter)){
                return false
            }
            trieNode = trieNode.children.get(letter)
        }
        return trieNode.end
    }

//     traversal(node = this.root,currentString = '',prefix = '',result = []){
//         if(node.isEnd && currentString.includes(prefix)){
//             result.push(currentString);
//         }

//         for(let [letter,child] of node.children){
//             this.traversal(child,currentString + letter,prefix,result)
//         }

//         return result;
//    }

    traversal(node = this.root,currentString='',prefix='',result=[]){
        if(node.end && currentString.includes(prefix)){
            result.push(currentString)
        }

        for(let [letter,child] of node.children){
            this.traversal(child,currentString+letter,prefix,result)
        }
        return result
    }

}

const trie = new Trie()

trie.insert("aswin")
trie.insert("arjun")
trie.insert("junaid")

console.log(trie)

console.log(trie.has("sh"))
console.log(trie.traversal())

console.log(trie.traversal(trie.root,'','jun',[]))