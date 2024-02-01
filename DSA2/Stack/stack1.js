class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    reverse() {
      this.items = this.items.reverse();
    }
  }
  
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function printPrimesUsingStack(limit) {
    const primeStack = new Stack();
  
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        primeStack.push(i);
      }
    }
  
    console.log("Prime numbers up to", limit, "using a stack:");
  

    primeStack.reverse();
  
    while (!primeStack.isEmpty()) {
      console.log(primeStack.pop());
    }
  }
  

  printPrimesUsingStack(20);
  