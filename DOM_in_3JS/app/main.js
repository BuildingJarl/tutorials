import Three from './Three';
import CirclePackLayout from './CirclePackLayout';
import GetData from './Data';
import FFFF from './FFFF';

var three = new Three(document);

var ffff = new FFFF();

console.log(ffff.update)

three.toUpdate.push(ffff.update);
three.scene.add(ffff);

//console.log(GetData());
//var circlePackLayout = new CirclePackLayout();

(function animate() {
	requestAnimationFrame(animate);

	three.update();
})();

//es6
export default {}