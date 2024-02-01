class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class TrieTree {
    constructor() {
        this.root = new TrieNode();
        this.end = Symbol('end'); // Added a unique symbol for end marker
    }

    trie(str) {
        this.populateSuffixTrie(str);
    }

    populateSuffixTrie(str) {
        for (let i = 0; i < str.length; i++) {
            this.insertSubStringStartingAt(i, str);
        }
    }

    insertSubStringStartingAt(index, str) {
        let trieNode = this.root;
        for (let i = index; i < str.length; i++) {
            const letter = str.charAt(i);
            if (!trieNode.children.has(letter)) {
                const newNode = new TrieNode();
                trieNode.children.set(letter, newNode);
            }
            trieNode = trieNode.children.get(letter);
        }
        trieNode.isEnd = true;
    }

    hasWord(str) {
        let trieNode = this.root;
        for (let i = 0; i < str.length; i++) {
            let letter = str.charAt(i);
            if (!trieNode.children.has(letter)) {
                return false;
            }
            trieNode = trieNode.children.get(letter);
        }
        return trieNode.isEnd;
    }

    findCommonPrefix() {
        let commonPrefix = '';
        let trieNode = this.root;
        while (trieNode.children.size === 1 && !trieNode.isEnd) {
            let letter = trieNode.children.keys().next().value;
            commonPrefix += letter;
            trieNode = trieNode.children.get(letter);
        }
        console.log('common', commonPrefix);
    }

    traversal(node = this.root, currentString = '', prefix = '', result = []) {
        if (node.isEnd && currentString.includes(prefix)) {
            result.push(currentString);
        }

        for (let [letter, child] of node.children) {
            this.traversal(child, currentString + letter, prefix, result);
        }

        return result;
    }
}

const trieString = new TrieTree();
trieString.trie("Hello");
trieString.trie("eat");
trieString.trie("elephant");

console.log(trieString.hasWord('Hello'));
trieString.findCommonPrefix();
const strings = trieString.traversal(trieString.root, '', 'el', []);
console.log(strings);
