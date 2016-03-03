/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
            -0.5,0.5,0.5, //a -0
            0.5, 0.5, 0.5, //b -1
            -0.5, -0.5, 0.5, //c -2
            0.5, -0.5, 0.5, //d -3
            -0.5, 0.5, -0.5, //e -4
   			 0.5, 0.5, -0.5, //f -5
   			 -0.5, -0.5, -0.5, //g -6
   			 0.5,-0.5,-0.5 //h -7
			];

	this.indices = [
            0, 2, 1, 
			1, 2, 3,
			4, 5, 6,
			5 ,7, 6,
			0, 1, 4,
			5, 4, 1,
			5, 1, 3,
			5, 3, 7,
			3, 2, 6,
			3, 6, 7,
			0, 4, 2,
			6, 2, 4
        ];

	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};