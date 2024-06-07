/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

/*
 * Define your 3 objects here. If the objects fit inside +/- 1,
 * the world code below will place them nicely.
 * Otherwise, you need to modify the world code below to make the
 * world bigger and space the objects out differently.
 */

class Object1 extends GrObject {
  constructor(width) {
    
    let geometry = new T.BufferGeometry();

    let height = width * Math.sqrt(3) / 2;
    let a = width / 2;
    let b = height / 3;
    let r = width * Math.sqrt(6) / 4;
    let h = Math.sqrt(r**2 - a**2);

    const vertices = new Float32Array([
      -b, 1, a,
      2*b, 1, 0,
      -b, 1, -a,
      0, 1+2*h, 0
    ]);

    const colors = new Float32Array([
      1, 0, 0,
      1, 1, 0,
      0, 0, 1,
      0, 1, 0
    ]);

    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new T.BufferAttribute(colors, 3));
    geometry.setIndex([0,2,1, 2,3,1, 0,1,3, 0,3,2]);
    geometry.computeVertexNormals();

    let mesh = new T.Mesh(geometry, new T.MeshStandardMaterial({
      roughness: 0.7,
      vertexColors: true
    }));

    super('vertexTetrahedron', mesh);
  }
}
class Object2 extends GrObject {
  constructor(width) {
    
    let geometry = new T.BufferGeometry();

    let height = width * Math.sqrt(3) / 2;
    let a = width / 2;
    let b = height / 3;
    let r = width * Math.sqrt(6) / 4;
    let h = Math.sqrt(r**2 - a**2);

    const vertices = new Float32Array([
      -b, 2*h, a,
      2*b, 2*h, 0,
      0, 4*h, 0,

      2*b, 2*h, 0,
      -b, 2*h, -a,
      0, 4*h, 0,

      -b, 2*h, -a,
      -b, 2*h, a,
      0, 4*h, 0,

      -b, 2*h, a,
      0, 0, 0,
      2*b, 2*h, 0,

      2*b, 2*h, 0,
      0, 0, 0,
      -b, 2*h, -a,

      -b, 2*h, -a,
      0, 0, 0,
      -b, 2*h, a,
    ]);

    const colors = new Float32Array([
      1,0,0, 1,0,0, 1,0,0,
      1,1,0, 1,1,0, 1,1,0,
      0,1,0, 0,1,0, 0,1,0,
      0,1,1, 0,1,1, 0,1,1,
      0,0,1, 0,0,1, 0,0,1,
      1,0,1, 1,0,1, 1,0,1
    ]);

    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new T.BufferAttribute(colors, 3));
    geometry.computeVertexNormals();

    let mesh = new T.Mesh(geometry, new T.MeshStandardMaterial({
      roughness: 0.7,
      vertexColors: true
    }));

    super('faceHexahedron', mesh);
  }
}
class Object3 extends GrObject {
  constructor(width) {

    let geometry = new T.BufferGeometry();

    let height = width * Math.sqrt(3) / 2;
    let a = width / 2;
    let b = height / 3;
    let r = width * Math.sqrt(6) / 4;
    let h = Math.sqrt(r**2 - a**2);

    const vertices = new Float32Array([
      -b, 2*h, a,
      2*b, 2*h, 0,
      0, 4*h, 0,

      2*b, 2*h, 0,
      -b, 2*h, -a,
      0, 4*h, 0,

      -b, 2*h, -a,
      -b, 2*h, a,
      0, 4*h, 0,

      -b, 2*h, a,
      0, 0, 0,
      2*b, 2*h, 0,

      2*b, 2*h, 0,
      0, 0, 0,
      -b, 2*h, -a,

      -b, 2*h, -a,
      0, 0, 0,
      -b, 2*h, a,
    ]);

    const colors = new Float32Array([
      1,0,0, 1,0,0, 1,0,0,
      1,1,0, 1,1,0, 1,1,0,
      0,1,0, 0,1,0, 0,1,0,
      0,1,1, 0,1,1, 0,1,1,
      0,0,1, 0,0,1, 0,0,1,
      1,0,1, 1,0,1, 1,0,1
    ]);

    let c = Math.cos(Math.PI/6);
    let s = Math.sin(Math.PI/6);
    const normals = new Float32Array([
      -c, 0, s,
      1, 0, 0,
      0, 1, 0,

      1, 0, 0,
      -c, 0, -s,
      0, 1, 0,

      -c, 0, -s,
      -c, 0, s,
      0, 1, 0,

      -c, 0, s,
      0, -1, 0,
      1, 0, 0,

      1, 0, 0,
      0, -1, 0,
      -c, 0, -s,

      -c, 0, -s,
      0, -1, 0,
      -c, 0, s
    ]);

    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new T.BufferAttribute(colors, 3));
    geometry.setAttribute('normal', new T.BufferAttribute(normals, 3));

    let mesh = new T.Mesh(geometry, new T.MeshStandardMaterial({
      roughness: 0.7,
      vertexColors: true
    }));

    super('smoothHexahedron', mesh);
  }
}

// translate an object in the X direction
function shift(grobj, x) {
    grobj.objects.forEach(element => {
        element.translateX(x);
    });
  return grobj;
}

// Set the Object's Y rotate
function roty(grobj, ry) {
    grobj.objects.forEach(element => {
        element.rotation.y = ry;
    });
  return grobj;
}

/*
 * The world making code here assumes the objects are +/- 1
 * and have a single mesh as their THREE objects.
 * If you don't follow this convention, you will need to modify
 * the code below.
 * The code is a little funky because it is designed to work for
 * a variety of demos.
 */
let mydiv = document.getElementById("div1");

let box = InputHelpers.makeBoxDiv({ width: mydiv ? 640 : 820 }, mydiv);
if (!mydiv) {
    InputHelpers.makeBreak(); // sticks a break after the box
}
InputHelpers.makeHead("Three Different Objects", box);

let world = new GrWorld({ width: mydiv ? 600 : 800, where: box });
let tt = shift(new Object1(2), -3);
world.add(tt);

let t2 = shift(new Object2(2), 0);
world.add(t2);

let t3 = shift(new Object3(2), 3);
world.add(t3);

let div = InputHelpers.makeBoxDiv({}, box);

let sl = new InputHelpers.LabelSlider("ry", { min: -2, max: 2, where: div });

InputHelpers.makeBreak(box);

sl.oninput = function(evt) {
    let v = sl.value();
    roty(tt,v);
    roty(t2,v);
    roty(t3,v);
};

world.go();
