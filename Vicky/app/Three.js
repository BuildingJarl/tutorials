import THREE from 'THREE';
//import OrbitControls from 'THREE.OrbitControls';
import Stats from 'Stats';

export default class Three {

	constructor(doc) {

		this.scene;
		this.renderer;
		this.camera;
		this.stats;
		this.toUpdate = [];


		this.scene = new THREE.Scene();
		var width = window.innerWidth;
		var height = window.innerHeight;

		this.renderer = new THREE.WebGLRenderer({ antialias:true, alpha: true });
		this.renderer.setSize(width,height);
		this.renderer.setClearColor(0x373737, 1);

		doc.body.appendChild(this.renderer.domElement);

		this.camera = new THREE.PerspectiveCamera(45,width/height,0.1,10000);
		this.camera.position.set(0,0,10);
		this.scene.add(this.camera);

		this.stats = new Stats();
		this.stats.domElement.style.position = 'absolute';
		this.stats.domElement.style.left = '0px';
		this.stats.domElement.style.top = '0px';

		doc.body.appendChild( this.stats.domElement );

		//var ambientLight = new THREE.AmbientLight(0xffffff);
      	//this.scene.add(ambientLight);

      	var light1 = new THREE.PointLight( 0xffffff, 1, 100 );
		light1.position.set( -5, -5, 2 );
		this.scene.add( light1 );
	
		var light2 = new THREE.PointLight( 0xffffff, 1, 100 );
		light2.position.set( 5, 5, 2 );
		this.scene.add( light2 );

	}

	update() {

		this.renderer.render(this.scene,this.camera);
		this.stats.update();

		 //console.log(this.toUpdate);
        this.toUpdate.map(function(element){
        	element();
        });
	}

	addToScene(obj) {
		this.scene.add(obj);
	}
}
