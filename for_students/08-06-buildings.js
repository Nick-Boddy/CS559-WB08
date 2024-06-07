/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

export class PyramidHouse extends GrObject {

    constructor() {

      let geometry = new T.BufferGeometry();

      const vertices = new Float32Array([
        // face
        1, 0, .5,  1, 1, .5,  -1, 1, .5,
        -1, 1, .5,  -1, 0, .5,  1, 0, .5,

        // roof
        1, 1, .5,  0, 1.5, 0,  -1, 1, .5,
        1, 1, -.5,  -1, 1, -.5, 0, 1.5, 0,
        1, 1, -.5,  0, 1.5, 0,  1, 1, .5,
        -1, 1, -.5,  -1, 1, .5, 0, 1.5, 0,
        
        // walls
        1, 0, -.5,  -1, 1, -.5,  1, 1, -.5,
        -1, 1, -.5,  1, 0, -.5,  -1, 0, -.5,

        1, 0, -.5,  1, 1, -.5,  1, 1, .5,
        1, 1, .5,  1, 0, .5,  1, 0, -.5,

        -1, 0, -.5,  -1, 1, .5, -1, 1, -.5,
        -1, 1, .5,  -1, 0, -.5, -1, 0, .5
      ]);
      geometry.setAttribute('position',new T.BufferAttribute(vertices, 3));
      geometry.computeVertexNormals();

      const uvs = new Float32Array([
        1, .5,  1, 1.5,  0, 1.5,
        0, 1.5,  0, .5,  1, .5,
        0, 0,  .5, .5,  1, 0,
        0, 0,  1, 0,  .5, .5,
        1, 0,  .5, .5,  0, 0,
        0, 0,  1, 0,  .5, .5
      ]);
      geometry.setAttribute("uv", new T.BufferAttribute(uvs, 2));

      let tl = new T.TextureLoader().load("../textures/house.png");
      let material = new T.MeshStandardMaterial({
        color: "orange",
        roughness: 0.75,
        map: tl
      });

      let mesh = new T.Mesh(geometry, material);

      super("PyramidHouse", mesh);
    }
}

export class SquarePyramidHouse extends GrObject {

  constructor() {

    let geometry = new T.BufferGeometry();

    const vertices = new Float32Array([
      // front
      1, 0, 1,  1, 1, 1,  -1, 1, 1,
      -1, 1, 1,  -1, 0, 1,  1, 0, 1,

      // roof
      1, 1, 1,  0, 1.5, 0,  -1, 1, 1,
      1, 1, -1,  -1, 1, -1,  0, 1.5, 0,
      1, 1, -1,  0, 1.5, 0,  1, 1, 1,
      -1, 1, -1,  -1, 1, 1,  0, 1.5, 0,
      
      // walls
      1, 0, -1,  -1, 1, -1,  1, 1, -1,
      -1, 1, -1,  1, 0, -1,  -1, 0, -1,

      1, 0, -1,  1, 1, -1,  1, 1, 1,
      1, 1, 1,  1, 0, 1,  1, 0, -1,

      -1, 0, -1,  -1, 1, 1, -1, 1, -1,
      -1, 1, 1,  -1, 0, -1, -1, 0, 1
    ]);
    geometry.setAttribute('position',new T.BufferAttribute(vertices, 3));
    geometry.computeVertexNormals();

    const uvs = new Float32Array([
      1, .5,  1, 1.5,  0, 1.5,
      0, 1.5,  0, .5,  1, .5,
      0, 0,  .5, .5,  1, 0,
      0, 0,  1, 0,  .5, .5,
      1, 0,  .5, .5,  0, 0,
      0, 0,  1, 0,  .5, .5
    ]);
    geometry.setAttribute("uv", new T.BufferAttribute(uvs, 2));

    let tl = new T.TextureLoader().load("../textures/house.png");
    let material = new T.MeshStandardMaterial({
      color: "lightblue",
      roughness: 0.75,
      map: tl
    });

    let mesh = new T.Mesh(geometry, material);

    super("SquarePyramidHouse", mesh);
  }
}

export class SquareGableHouse extends GrObject {

  constructor() {

    let geometry = new T.BufferGeometry();

    const vertices = new Float32Array([
      // front
      1, 0, 1,  1, 1, 1,  -1, 1, 1,
      -1, 1, 1,  -1, 0, 1,  1, 0, 1,

      // roof inclines
      1, 1, 1,  -1, 1.5, 0,  -1, 1, 1,
      1, 1, 1,  1, 1.5, 0,  -1, 1.5, 0,

      // walls
      1, 1, -1,  -1, 1, -1,  -1, 1.5, 0,
      1, 1, -1,  -1, 1.5, 0,  1, 1.5, 0,
      
      1, 0, -1,  -1, 1, -1,  1, 1, -1,
      -1, 1, -1,  1, 0, -1,  -1, 0, -1,

      1, 0, -1,  1, 1, -1,  1, 1, 1,
      1, 1, 1,  1, 0, 1,  1, 0, -1,

      -1, 0, -1,  -1, 1, 1, -1, 1, -1,
      -1, 1, 1,  -1, 0, -1, -1, 0, 1,

      // roof sides
      -1, 1, -1,  -1, 1, 1,  -1, 1.5, 0,
      1, 1, 1,  1, 1, -1,  1, 1.5, 0,
      
    ]);
    geometry.setAttribute('position',new T.BufferAttribute(vertices, 3));
    geometry.computeVertexNormals();

    const uvs = new Float32Array([
      1, .5,  1, 1.5,  0, 1.5,
      0, 1.5,  0, .5,  1, .5,
      1, 0,  0, .5,  0, 0,
      1, 0,  1, .5,  0, .5,
      1, 0,  0, 0,  0, .5,
      1, 0,  0, .5,  1, .5,
    ]);
    geometry.setAttribute("uv", new T.BufferAttribute(uvs, 2));

    let tl = new T.TextureLoader().load("../textures/house.png");
    let material = new T.MeshStandardMaterial({
      color: "white",
      roughness: 0.75,
      map: tl
    });

    let mesh = new T.Mesh(geometry, material);

    super("SquareGableHouse", mesh);
  }
}

export class BasicTree extends GrObject {
  
  constructor() {
    let base = new T.Group();
    let trunkGeo = new T.CylinderGeometry(.1, .1, 1);
    let foliageGeo = new T.ConeGeometry(.5, 1);
    let trunk = new T.Mesh(trunkGeo, new T.MeshStandardMaterial({
      color: "brown",
      roughness: .7
    }));
    trunk.translateY(.5);
    base.add(trunk);
    let foliage = new T.Mesh(foliageGeo, new T.MeshStandardMaterial({
      color: "darkgreen",
      roughness: .7
    }));
    foliage.translateY(.5);
    trunk.add(foliage);

    super("BasicTree", base);
  }
}

