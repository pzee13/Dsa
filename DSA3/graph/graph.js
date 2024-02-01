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
        if(!this.vertices.has(vertex1) || !this.vertices.has(vertex2)){
            return
        }
        this.vertices.get(vertex1).add(vertex2)
    }
    containdVertex(vertex){
        return this.vertices.has(vertex)
    }
    printGraph(){
        for(let [vertex,edge] of this.vertices){
            const edgeList = [...edge].join(", ")
            console.log(`${vertex},[${edgeList}]`);
        }
    }
}

const graph = new Graph()
graph.addVertex(10)
graph.addVertex(23)
graph.addEdge(10,23)
// console.log(graph.containdVertex(18));
graph.printGraph()