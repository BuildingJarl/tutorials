import Three from './Three';

var three = new Three(document);


(function animate() {
	requestAnimationFrame(animate);

	three.update();
})();

export default {}
