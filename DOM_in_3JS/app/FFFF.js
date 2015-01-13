import THREE from 'three.js/build/three';

export default class FFFF {

	constructor() {

        var particleSystem, uniforms, geometry;    

        //var particles = 100000; 
        var particles = 10000; 

        var attributes = {

            size:        { type: 'f', value: null },
            customColor: { type: 'c', value: null }

        };

        var uniforms = {

            color:     { type: "c", value: new THREE.Color( 0xffffff ) },
            texture:   { type: "t", value: THREE.ImageUtils.loadTexture( "./app/spark1.png" ) }

        };

        var shaderMaterial = new THREE.ShaderMaterial( {

            uniforms:       uniforms,
            attributes:     attributes,
            vertexShader:   document.getElementById( 'vertexshader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentshader' ).textContent,

            blending:       THREE.AdditiveBlending,
            depthTest:      false,
            transparent:    true

        });


        var radius = 500;

        var geometry = new THREE.BufferGeometry();

        var positions = new Float32Array( particles * 3 );
        var values_color = new Float32Array( particles * 3 );
        var values_size = new Float32Array( particles );

        var color = new THREE.Color();

        for( var v = 0; v < particles; v++ ) {

            values_size[ v ] = 20;

            positions[ v * 3 + 0 ] = ( Math.random() * 2 - 1 ) * radius;
            positions[ v * 3 + 1 ] = ( Math.random() * 2 - 1 ) * radius;
            positions[ v * 3 + 2 ] = ( Math.random() * 2 - 1 ) * radius;

            color.setHSL( v / particles, 1.0, 0.5 );

            values_color[ v * 3 + 0 ] = color.r;
            values_color[ v * 3 + 1 ] = color.g;
            values_color[ v * 3 + 2 ] = color.b;

        }

        geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
        geometry.addAttribute( 'customColor', new THREE.BufferAttribute( values_color, 3 ) );
        geometry.addAttribute( 'size', new THREE.BufferAttribute( values_size, 1 ) );

        particleSystem = new THREE.PointCloud( geometry, shaderMaterial );

        particleSystem.userData.update = function render() {

            var time = Date.now() * 0.001;

            //particleSystem.rotation.y = 0.01 * time;

            var size = geometry.attributes.size.array;

            for( var i = 0; i < particles; i++ ) {

                size[ i ] = 10 * ( 1 + Math.sin( 0.1 * i + time ) );

            }

            geometry.attributes.size.needsUpdate = true;

    }

        return particleSystem;
    }

};