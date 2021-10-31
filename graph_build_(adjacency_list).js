function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	for (var i = 0; i < this.vertices; ++i) {
		this.adj[i] = [];
		this.adj[i].push("");
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
}

// для направленных графов
function addEdge(v,w) {
	this.adj[v].push(w);
	this.edges++;
}

// для ненаправленных графов
/*function addEdge(v,w) { 
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}*/

function showGraph() {
	for (var i = 0; i < this.vertices; ++i) {
		process.stdout.write(i + " -> ");
		for (var j = 0; j < this.vertices; ++j) {
			if (this.adj[i][j] !== undefined && this.adj[i][j] !== "")
				process.stdout.write(this.adj[i][j] + ' ' );
		}
		console.log("");
	}
}

let g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,0);
g.addEdge(1,3);
g.addEdge(2,4);
g.addEdge(3,1);
g.addEdge(4,1);
g.addEdge(4,3);
g.addEdge(4,4);
g.showGraph();