import Three from './Three';
import CirclePackLayout from './CirclePackLayout';
import GetData from './Data';
import d3 from 'd3';
import F3 from './ThreeObjectFactory'
import THREE from 'three.js/build/three';
import FFFF from './FFFF';
import Ship from './Ship';

var three = new Three(document);

var ffff = new FFFF();
three.toUpdate.push(ffff.userData.update);
three.scene.add(ffff);

var ship = new Ship(three.camera);
three.toUpdate.push(ship.userData.update);
three.scene.add(ship);

(function animate() {
	requestAnimationFrame(animate);

	three.update();
})();


export default {}