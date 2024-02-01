class PrefixNode{
    constructor(){
        this.children={}
        this.isEnded=false
    }
}

class PrefixTree{
    constructor(){
        this.root= new PrefixNode()
        this.word=null
    }

    buildPrefixTree(word){
        this.word=word
        let node= this.root
        for(let i=0;i<word.length;i++){
            const char=word[i]
            if(!node.children[char]){
                node.children[char]=new PrefixNode()
            }
            node=node.children[char]
            node.isEnded=true
        }
    }
    contains(word){
        let node=this.root
        for(let i=0;i<word.length;i++){
            const char= word[i]
            if(!node.children[char]) return false
            node=node.children[char]
        }
        return node.isEnded
    }
}

const pref= new PrefixTree()
pref.buildPrefixTree('adwaith')
console.log(pref.contains('aith'));