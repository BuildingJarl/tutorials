import Three from './Three';
import ThreeText from './Text';


var three = new Three(document);

//add resize event to window
window.addEventListener('resize', (event) => {

	three.renderer.setSize( window.innerWidth, window.innerHeight );
	// update the camera
	three.camera.aspect	= window.innerWidth / window.innerHeight;
	three.camera.updateProjectionMatrix();
});

var text1 = new ThreeText('Alles Gute');
var text2 = new ThreeText('Zum');
var text3 = new ThreeText('Geburtstag');

text1.position.set(0,2,0);
text2.position.set(0,0,0);
text3.position.set(0,-2,0);

three.addToScene(text1);
three.addToScene(text2);
three.addToScene(text3);

//start animation
(function animate() {
	requestAnimationFrame(animate);

	three.update();
})();

export default {}
