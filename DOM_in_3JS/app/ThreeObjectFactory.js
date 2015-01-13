import THREE from 'three.js/build/three';

export default class ThreeObjectFactory {

	constructor(doc) {

	}

	createCircle(x,y,r) {

		var radius = r;
		var seg = 64;
		var material = new THREE.MeshBasicMaterial({color: 0x006600});
		var geo = new THREE.CircleGeometry(radius,seg);
		
		geo.vertices.shift(); //only with line geo
		var li = new THREE.Line(geo,material);
		
		//var li = new THREE.Mesh(geo,material);

		li.position.set(x,y,-1000);
		return li;
	}
}