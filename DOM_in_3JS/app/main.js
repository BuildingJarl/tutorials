import Three from './Three';
import CirclePackLayout from './CirclePackLayout';
import GetData from './Data';
import d3 from 'd3';
import F3 from './ThreeObjectFactory'
import THREE from 'three.js/build/three';

var three = new Three(document);


(function animate() {
	requestAnimationFrame(animate);

	three.update();
})();


var w = window.innerWidth;
var h = window.innerHeight;

var packlayout = d3.layout.pack()
	.size([w,h])
	.value(function(d) {return d.size});

var tree = packlayout(GetData());

var fac = new F3();

makePositionsRelativeToZero(tree);

tree.map(function(obj){
	three.addToScene(fac.createCircle(obj.x,obj.y,obj.r));
});

export default {}


function makePositionsRelativeToZero( nodes ) {
		
		//use this to have vis centered at 0,0,0 (easier for positioning)
		var offsetX = nodes[0].x;
		var offsetY = nodes[0].y;

		for( var i = 0; i < nodes.length; i ++ ) {

			var node = nodes[i];

			node.x -= offsetX;
			node.y -= offsetY;
		}
	};