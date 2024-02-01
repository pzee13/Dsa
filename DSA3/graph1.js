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
            console.log('error')
            return
        }

        this.vertices.get(vertex1).add(vertex2)
    }

    delete(vertex){
        if(this.vertices.has(vertex)){
            this.vertices.delete(vertex)
        }
    }

    getadj(vertex){
        let arr=[]
        return this.vertices.has(vertex)? [...this.vertices.get(vertex)]:arr;
    }
    
}

const g = new Graph()

g.addVertex(10)
g.addVertex(9)
g.addVertex(8)
g.addVertex(7)

g.addEdge(10,7)
g.addEdge(10,8)

console.log(g)