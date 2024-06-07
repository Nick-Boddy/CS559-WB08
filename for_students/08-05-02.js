/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

class Domino extends GrObject {

    constructor(type) {

      let geometry = new T.BufferGeometry();

      const vertices = new Float32Array([
        -1, .25, -.5, 0, .25, .5, 0, .25, -.5, // top
        -1, .25, -.5, -1, .25, .5, 0, .25, .5, //
        1, .25, -.5,  0, .25, -.5, 0, .25, .5, //
        1, .25, -.5,  0, .25, .5, 1, .25, .5,  //
        -1, 0, -.5, 1, 0, -.5, 1, 0, .5,
        -1, 0, -.5, 1, 0, .5, -1, 0, .5,
        -1, 0, .5, 1, 0, .5, 1, .25, .5,
        -1, 0, .5, 1, .25, .5, -1, .25, .5,
        1, 0, -.5, -1, .25, -.5, 1, .25, -.5,
        1, 0, -.5, -1, 0, -.5, -1, .25, -.5,
        1, 0, -.5, 1, .25, -.5, 1, .25, .5,
        1, 0, -.5, 1, .25, .5, 1, 0, .5,
        -1, 0, -.5, -1, .25, .5, -1, .25, -.5,
        -1, 0, -.5, -1, 0, .5, -1, .25, .5
      ]);
      geometry.setAttribute('position',new T.BufferAttribute(vertices, 3));
      geometry.computeVertexNormals();

      let uvs;
      if (type == 1) {
        uvs = new Float32Array([
          2/3, 1/3, 1, 0, 2/3, 0,
          2/3, 1/3, 1, 1/3, 1, 0,
          2/3, 1/3, 2/3, 0, 1, 0,
          2/3, 1/3, 1, 0, 1, 1/3
        ]);
      }
      else if (type == 2) {
        uvs = new Float32Array([
          1/3, 2/3, 2/3, 1/3, 1/3, 1/3,
          1/3, 2/3, 2/3, 2/3, 2/3, 1/3,
          1/3, 1/3, 1/3, 0, 2/3, 0,
          1/3, 1/3, 2/3, 0, 2/3, 1/3
        ]);
      }
      geometry.setAttribute("uv", new T.BufferAttribute(uvs, 2));

      let tl = new T.TextureLoader().load("../images/dice_texture.png");
      let material = new T.MeshStandardMaterial({
        color: "white",
        roughness: 0.75,
        map: tl
      });

      let mesh = new T.Mesh(geometry, material);

      super("Domino", mesh);
    }
}

let world = new GrWorld();

// put the domino into the world Here
// you can, of course, add more than 1
let domino1 = new Domino(1);
world.add(domino1);

let domino2 = new Domino(2);
domino2.objects[0].translateZ(2);
world.add(domino2);

world.go();
