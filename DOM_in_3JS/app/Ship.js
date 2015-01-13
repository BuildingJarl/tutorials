import THREE from 'three.js/build/three';
import THREEx from 'threex.keyboardstate/threex.keyboardstate';

export default class Ship {

	constructor(camera) {
        
        var keyboard = new THREEx.KeyboardState();
        
        var shipMesh = new THREE.MeshNormalMaterial();
        var shipGeo = new THREE.BoxGeometry( 10, 15, 20 );
        var ship = new THREE.Mesh( shipGeo, shipMesh );
        
        var clock = new THREE.Clock();
        
        ship.userData.update = function () {
            
            var delta = clock.getDelta(); // seconds.
            var moveDistance = 200 * delta; // 200 pixels per second
            var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second

            // local transformations

            // move forwards/backwards/left/right
            if ( keyboard.pressed("W") )
                ship.translateZ( -moveDistance );
            if ( keyboard.pressed("S") )
                ship.translateZ(  moveDistance );
            if ( keyboard.pressed("Q") )
                ship.translateX( -moveDistance );
            if ( keyboard.pressed("E") )
                ship.translateX(  moveDistance );
            
            if ( keyboard.pressed("up") )
                ship.rotateX(-rotateAngle);
            if ( keyboard.pressed("down") )
                ship.rotateX(rotateAngle);
            
            

            // rotate left/right/up/down
            var rotation_matrix = new THREE.Matrix4().identity();
            if ( keyboard.pressed("A") )
                ship.rotateOnAxis( new THREE.Vector3(0,1,0), rotateAngle);
            if ( keyboard.pressed("D") )
                ship.rotateOnAxis( new THREE.Vector3(0,1,0), -rotateAngle);
            if ( keyboard.pressed("R") )
                ship.rotateOnAxis( new THREE.Vector3(1,0,0), rotateAngle);
            if ( keyboard.pressed("F") )
                ship.rotateOnAxis( new THREE.Vector3(1,0,0), -rotateAngle);

            if ( keyboard.pressed("Z") )
            {
                ship.position.set(0,25.1,0);
                ship.rotation.set(0,0,0);
            }

            var relativeCameraOffset = new THREE.Vector3(0,50,200);

            var cameraOffset = relativeCameraOffset.applyMatrix4( ship.matrixWorld );

            camera.position.x = cameraOffset.x;
            camera.position.y = cameraOffset.y;
            camera.position.z = cameraOffset.z;
            camera.lookAt( ship.position );

            //camera.updateMatrix();
            //camera.updateProjectionMatrix();

        };
        
        return ship;
    }
    
    


};