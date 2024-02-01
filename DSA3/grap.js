class Graph{
    constructor(){
        this.vertices = new Map()
    }

    addVertex(vertex){
        if(!this.vertices.has(vertex)){
            this.vertices.set(vertex,new Set())
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.vertices.has(vertex1)||!this.vertices.has(vertex2)){
            console.log("error")
            return
        }

        this.vertices.get(vertex1).add(vertex2)
    }

    delete(vertex){
        if(this.vertices.has(vertex)){
            this.vertices.delete(vertex)
        }
    }

    printGraph(){
        for(let [vertex,edge] of this.vertices){
            const edgeList = [...edge].join(", ")
            console.log(`${vertex}->[${edgeList}]`)
        }
    }

    hasVertex(vertex) {
        return this.vertices.has(vertex);
      }

      hasEdge(vertex1, vertex2) {
        return this.vertices.has(vertex1) && this.vertices.get(vertex1).has(vertex2);
      }

      getNeighbors(vertex) {
        let arr=[]
        return this.vertices.has(vertex) ? [...this.vertices.get(vertex)] : arr;
      }

      getAllVertices() {
        return Array.from(this.vertices.keys());
      }

      getDegree(vertex) {
        return this.vertices.has(vertex) ? this.vertices.get(vertex).size : 0;
      }

      breadthFirstSearch(startVertex) {
        const queue = [startVertex]; // Initialize the queue with the starting vertex
        const visited = new Set(); // Keep track of visited vertices
      
        while (queue.length > 0) {
          const currentVertex = queue.shift(); // Dequeue the first vertex
          visited.add(currentVertex); // Mark it as visited
      
          console.log(currentVertex); // Process the current vertex (e.g., print it)
      
          // Enqueue the unvisited neighbors of the current vertex
          for (const neighbor of this.getNeighbors(currentVertex)) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }


      depthFirstSearch(startVertex) {
        const stack = [startVertex]; // Initialize the stack with the starting vertex
        const visited = new Set(); // Keep track of visited vertices
      
        while (stack.length > 0) {
          const currentVertex = stack.pop(); // Pop the last vertex from the stack
          visited.add(currentVertex); // Mark it as visited
      
          console.log(currentVertex); // Process the current vertex (e.g., print it)
      
          // Push unvisited neighbors onto the stack in reverse order (for DFS)
          const neighbors = [...this.getNeighbors(currentVertex)].reverse();
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              stack.push(neighbor);
            }
          }
        }
      }
      
      
}

const graph = new Graph()

graph.addVertex(10)
graph.addVertex(9)
graph.addVertex(8)
graph.addEdge(10,9)
graph.addEdge(10,8)
graph.addVertex(7)
graph.addEdge(9,7)


graph.printGraph()

console.log(graph.hasVertex(7))
console.log(graph.hasEdge(10,9))
console.log(graph.getNeighbors(9))
console.log(graph.getAllVertices())
console.log(graph.getDegree(10))
graph.breadthFirstSearch(10)
graph.depthFirstSearch(10)
