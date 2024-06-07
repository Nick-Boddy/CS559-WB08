/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { PyramidHouse, SquarePyramidHouse, SquareGableHouse, BasicTree } from "./08-06-buildings.js";
// your buildings are defined in another file... you should import them
// here

let world = new GrWorld();

// place your buildings and trees into the world here
let house1 = new PyramidHouse();
world.add(house1);

let house2 = new SquarePyramidHouse();
house2.objects[0].translateX(3);
world.add(house2);

let house3 = new SquareGableHouse();
house3.objects[0].translateX(-3);
world.add(house3);

let tree = new BasicTree();
tree.objects[0].translateZ(2);
tree.objects[0].translateX(1);
world.add(tree);

world.go();


