/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { Car, MailTruck } from "./08-07-car.js";


// your vehicles are defined in another file... you should import them
// here


let world = new GrWorld();

let car1 = new Car();
car1.objects[0].translateZ(-2);
world.add(car1);

let car2 = new MailTruck();
car2.objects[0].translateZ(2);
world.add(car2);

world.go();

