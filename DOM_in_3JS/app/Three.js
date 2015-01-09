import THREE from 'three.js/build/three';
import Stats from 'stats.js/build/stats.min';

class Three {

	init() {

		this.scene;
		this.renderer;
		this.camera;
		this.stats;

		this.scene = new THREE.Scene();
		var width = window.innerWidth;
		var height = window.innerHeight;

		this.renderer = new THREE.WebGLRenderer({ antialias:true });
		this.renderer.setSize(width,height);

		document.body.appendChild(this.renderer.domElement);

		this.camera = new THREE.PerspectiveCamera(45,width/height,0.1,10000);
		this.camera.position.set(0,0,10);
		this.scene.add(this.camera);

		this.stats = new Stats();
		this.stats.domElement.style.position = 'absolute';
		this.stats.domElement.style.left = '0px';
		this.stats.domElement.style.top = '0px';

		document.body.appendChild( this.stats.domElement );

	}

	update() {

		this.renderer.render(this.scene,this.camera);
		this.stats.update();
	}
}

export default Three;