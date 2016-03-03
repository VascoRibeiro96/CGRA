/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTable(scene) {
	CGFobject.call(this,scene);

	this.table = new MyUnitCubeQuad(this.scene);
	this.table.initBuffers();
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function () {
   
   //Tampo da mesa
   this.scene.pushMatrix();
   this.scene.translate(0,3.65,0);
   this.scene.scale(5,0.3,3);
   this.table.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
   this.scene.translate(-2.35,3.5/2,-1.35);
   this.scene.scale(0.3,3.5,0.3);
   this.table.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
   this.scene.translate(-2.35,3.5/2,1.35);
   this.scene.scale(0.3,3.5,0.3);
   this.table.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
   this.scene.translate(2.35,3.5/2,-1.35);
   this.scene.scale(0.3,3.5,0.3);
   this.table.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
   this.scene.translate(2.35,3.5/2,1.35);
   this.scene.scale(0.3,3.5,0.3);
   this.table.display();
   this.scene.popMatrix();
}