/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define a class of Dice here - it should be a subclass of GrObject

class Die extends GrObject {

    constructor() {

      let geometry = new T.BufferGeometry();

      const vertices = new Float32Array([
        -.5, 0, -.5, .5, 0, -.5, .5, 0, .5,
        -.5, 0, -.5, .5, 0, .5, -.5, 0, .5,
        -.5, 1, -.5, .5, 1, .5, .5, 1, -.5,
        -.5, 1, -.5, -.5, 1, .5, .5, 1, .5,
        -.5, 0, .5, .5, 0, .5, .5, 1, .5,
        -.5, 0, .5, .5, 1, .5, -.5, 1, .5,
        .5, 0, -.5, -.5, 1, -.5, .5, 1, -.5,
        .5, 0, -.5, -.5, 0, -.5, -.5, 1, -.5,
        .5, 0, -.5, .5, 1, -.5, .5, 1, .5,
        .5, 0, -.5, .5, 1, .5, .5, 0, .5,
        -.5, 0, -.5, -.5, 1, .5, -.5, 1, -.5,
        -.5, 0, -.5, -.5, 0, .5, -.5, 1, .5,
      ]);
      geometry.setAttribute('position',new T.BufferAttribute(vertices, 3));
      geometry.computeVertexNormals();

      const uvs = new Float32Array([
        1/3, 2/3, 1/3, 1/3, 2/3, 1/3,
        1/3, 2/3, 2/3, 1/3, 2/3, 2/3,
        2/3, 1/3, 1, 0, 2/3, 0,
        2/3, 1/3, 1, 1/3, 1, 0,
        1/3, 1/3, 1/3, 0, 2/3, 0,
        1/3, 1/3, 2/3, 0, 2/3, 1/3,
        1/3, 1, 2/3, 2/3, 1/3, 2/3,
        1/3, 1, 2/3, 1, 2/3, 2/3,
        0, 2/3, 0, 1/3, 1/3, 1/3,
        0, 2/3, 1/3, 1/3, 1/3, 2/3,
        2/3, 2/3, 1, 1/3, 2/3, 1/3,
        2/3, 2/3, 1, 2/3, 1, 1/3
      ]);
      geometry.setAttribute("uv", new T.BufferAttribute(uvs, 2));

      let tl = new T.TextureLoader().load("../images/dice_texture.png");
      let material = new T.MeshStandardMaterial({
        color: "white",
        roughness: 0.75,
        map: tl
      });

      let mesh = new T.Mesh(geometry, material);

      super("Die", mesh);
    }
}

let world = new GrWorld();

// put the two dice into the world Here
// don't forget to orient them so they have different numbers facing up
let die1 = new Die();
die1.objects[0].translateX(-1);
world.add(die1);

let die2 = new Die();
die2.objects[0].translateX(1);
die2.objects[0].translateZ(-.5);
die2.objects[0].translateY(0.5);
die2.objects[0].rotation.set(Math.PI/2, 0, 0);
world.add(die2);

world.go();

