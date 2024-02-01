class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      return key.toString().length % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (this.table[index]) {
        let curr = this.table[index];
  
        while (curr.next) {
          if (curr.key === key) {
            curr.value = value;
            return;
          }
          curr = curr.next;
        }
  
        if (curr.key === key) {
          curr.value = value;
        } else {
          curr.next = new Node(key, value);
        }
      } else {
        this.table[index] = new Node(key, value);
      }
    }
  
    get(key) {
      const index = this.hash(key);
      let curr = this.table[index];
  
      while (curr) {
        if (curr.key === key) {
          return curr.value;
        }
        curr = curr.next;
      }
  
      return undefined;
    }
  
    remove(key) {
      const index = this.hash(key);
      let curr = this.table[index];
      let prev = null;
  
      while (curr) {
        if (curr.key === key) {
          if (prev === null) {
            this.table[index] = curr.next;
          } else {
            prev.next = curr.next;
          }
          return curr.value;
        }
        prev = curr;
        curr = curr.next;
      }
  
      return undefined;
    }
  
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }
  
  const table = new HashTable(50);
  
  table.set("name", "aswin");
  table.set("age", 150);
  table.set("naem", "niwsa");
  table.set("nema","asw")
  
  table.remove("naem")
  table.display();
  
  console.log(table.get("name"));
  