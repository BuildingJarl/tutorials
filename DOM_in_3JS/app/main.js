import Three from './Three';
import CirclePackLayout from './CirclePackLayout';
import GetData from './Data';
import d3 from 'd3';
import F3 from './ThreeObjectFactory'
import THREE from 'three.js/build/three';
import FFFF from './FFFF';

var three = new Three(document);

var ffff = new FFFF();
three.toUpdate.push(ffff.userData.update);
three.scene.add(ffff);

(function animate() {
	requestAnimationFrame(animate);

	three.update();
})();


export default {}