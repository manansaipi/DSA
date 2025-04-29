class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    printGraph() {
        if (Object.keys(this.adjacencyList).length !== 0) {
            console.log("{");
            for (const [key, value] of Object.entries(this.adjacencyList)) {
                console.log(" ", `${key}: ${value}`);
            }
            console.log("}");
        } else {
            console.log("{}");
        }
    }

    addVertex(vertext) {
        if (!this.adjacencyList[vertext]) {
            this.adjacencyList[vertext] = [];
            console.log(true);
            return true;
        }
        console.log(false);
        return false;
    }

    addEdge(vertext1, vertext2) {
        if (this.adjacencyList[vertext1] && this.adjacencyList[vertext2]) {
            this.adjacencyList[vertext1].push(vertext2);
            this.adjacencyList[vertext2].push(vertext1);
            return true;
        }
        return false;
    }
    removeEdge(vertext1, vertext2) {
        if (this.adjacencyList[vertext1] && this.adjacencyList[vertext2]) {
            this.adjacencyList[vertext1] = this.adjacencyList[vertext1].filter(
                (v) => v !== vertext2
            );
            this.adjacencyList[vertext2] = this.adjacencyList[vertext2].filter(
                (v) => v !== vertext1
            );
            return true;
        }
        return false;
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            let vertexEdges = this.adjacencyList[vertex];

            // Remove all edges that point to this vertex
            for (let i = 0; i < vertexEdges.length; i++) {
                let edge = vertexEdges[i];

                // Check if the edge exists in the adjacency list before attempting to remove
                if (this.adjacencyList[edge]) {
                    const index = this.adjacencyList[edge].indexOf(vertex);

                    // Only splice if the vertex is found in the edge's adjacency list
                    if (index !== -1) {
                        this.adjacencyList[edge].splice(index, 1);
                    }
                }
            }

            // Finally, remove the vertex itself from the adjacency list
            delete this.adjacencyList[vertex];
            return true;
        }

        return false;
    }

    removeVertex(vertext) {
        if (!this.adjacencyList[vertext]) return undefined;
        while (this.adjacencyList[vertext].length) {
            let temp = this.adjacencyList[vertext].pop();
            this.removeEdge(vertext, temp);
        }
        delete this.adjacencyList[vertext];
        return this;
    }
}

let myGraph = new Graph();

console.log(myGraph.addVertex(1));
console.log(myGraph.addVertex(2));
console.log(myGraph.addVertex(3));
console.log(myGraph.addEdge(1, 2));
console.log(myGraph.removeEdge(1, 2));
console.log(myGraph.addEdge(1, 2));
console.log(myGraph.addEdge(1, 3));
console.log(myGraph.addEdge(2, 3));
console.log(myGraph.removeVertex(3));

console.log(myGraph);
