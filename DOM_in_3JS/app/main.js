import Three from './Three';
import CirclePackLayout from './CirclePackLayout';
import GetData from './Data';

var three = new Three(document);

//console.log(GetData());
//var circlePackLayout = new CirclePackLayout();

(function animate() {
	requestAnimationFrame(animate);

	three.update();
})();

//es6
export default {}