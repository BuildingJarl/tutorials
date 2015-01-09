import THREE from 'three.js/build/three';
import Stats from 'stats.js/build/stats.min';
import Three from './Three';

var three = new Three();
three.init();

(function animate() {
	requestAnimationFrame(animate);

	three.update();
})();

//es6
export default {}