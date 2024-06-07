/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

export class Car extends GrObject {

    constructor() {

        let car = new T.Group();

        const wheelGeometry = new T.CylinderGeometry(0.5, 0.5, 0.3);
        const wheelMat = new T.MeshStandardMaterial({
            color: 0x111111,
            roughness: 1
        });
        let wheelPositions = [
            [-1.5, .5, -1.0],
            [-1.5, .5, 1.0],
            [1.5, .5, -1.0],
            [1.5, .5, 1.0]
        ];
        wheelPositions.forEach(wheelPos => {
            let wheel = new T.Mesh(wheelGeometry, wheelMat);
            wheel.position.set(...wheelPos);
            wheel.rotateX(Math.PI / 2);
            car.add(wheel);
        });


        const cabinMat = new T.MeshStandardMaterial({
            color: "yellow",
            roughness: 0.2,
            metalness: 0.5
        });

        const cabinVertices = new Float32Array([
            -2.1,  0.5, -1.0, // 0
            -2.1,  0.5,  1.0, // 1
             2.3,  0.5, -1.0, // 2
             2.3,  0.5,  1.0, // 3

            -2.1,  1.6, -1.0, // 4
            -2.1,  1.6,  1.0, // 5
             2.3,  1.3, -1.0, // 6
             2.3,  1.3,  1.0, // 7
            
             1.0,  1.6, -1.0, // 8
             1.0,  1.6,  1.0, // 9

             0.8,  2.6, -1.0, // 10
             0.8,  2.6,  1.0, // 11
            -1.1,  2.6, -1.0, // 12
            -1.1,  2.6,  1.0  // 13
        ]);

        const cabinIndices = new Uint16Array([
            3,2,6,  6,7,3,
            7,6,8,  8,9,7,
            //9,8,10,  10,11,9,
            11,10,12,  12,13,11,
            13,12,4,  4,5,13,
            5,4,0,  0,1,5,
            1,0,2,  2,3,1,

            1,3,5,  5,3,9,  9,3,7,
            2,0,4,  2,4,8,  2,8,6,

            5,9,11,  5,11,13,
            8,4,10,  10,4,12
        ]);

        let cabin = new T.BufferGeometry();
        cabin.setAttribute("position", new T.BufferAttribute(cabinVertices, 3));
        cabin.setIndex(new T.BufferAttribute(cabinIndices, 1));
        cabin.computeVertexNormals();
        let cabinMesh = new T.Mesh(cabin, cabinMat);
        car.add(cabinMesh);


        const windowTexture = new T.TextureLoader().load("../textures/window.png");
        let windowMat = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.0,
            metalness: 0.2,
            map: windowTexture,
            transparent: true
        });

        const windshieldVertices = new Float32Array([
            1.0,  1.6, -1.0, // 0
            1.0,  1.6,  1.0, // 1

            0.8,  2.6, -1.0, // 2
            0.8,  2.6,  1.0, // 3
        ]);
        const windshieldIndices = new Uint16Array([
            1,0,2,  2,3,1
        ]);
        const windshieldUVs = new Float32Array([
            0, 0,
            1, 0,
            0, 1,
            1, 1
        ]);

        let windshield = new T.BufferGeometry();
        windshield.setAttribute("position", new T.BufferAttribute(windshieldVertices, 3));
        windshield.setIndex(new T.BufferAttribute(windshieldIndices, 1));
        windshield.setAttribute("uv", new T.BufferAttribute(windshieldUVs, 2));
        windshield.computeVertexNormals();
        
        let windshieldMesh = new T.Mesh(windshield, windowMat);
        car.add(windshieldMesh);

        super("Car", car);
    }
}


export class MailTruck extends GrObject {

    constructor() {

        let car = new T.Group();

        const wheelGeometry = new T.CylinderGeometry(0.5, 0.5, 0.3);
        const wheelMat = new T.MeshStandardMaterial({
            color: 0x111111,
            roughness: 1
        });
        let wheelPositions = [
            [-1.5, .5, -1.0],
            [-1.5, .5, 1.0],
            [1.5, .5, -1.0],
            [1.5, .5, 1.0]
        ];
        wheelPositions.forEach(wheelPos => {
            let wheel = new T.Mesh(wheelGeometry, wheelMat);
            wheel.position.set(...wheelPos);
            wheel.rotateX(Math.PI / 2);
            car.add(wheel);
        });


        const cabinMat = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.2
        });

        const cabinVertices = new Float32Array([
            -2.4,  0.5, -1.0, // 0
            -2.4,  0.5,  1.0, // 1
             2.1,  0.5, -1.0, // 2
             2.1,  0.5,  1.0, // 3

            -2.4,  2.8, -1.0, // 4
            -2.4,  2.8,  1.0, // 5
             2.1,  1.5, -1.0, // 6
             2.1,  1.5,  1.0, // 7
            
             1.3,  2.0, -1.0, // 8
             1.3,  2.0,  1.0, // 9

             0.8,  3.0, -1.0, // 10
             0.8,  3.0,  1.0, // 11
            -2.2,  3.0, -1.0, // 12
            -2.2,  3.0,  1.0  // 13
        ]);

        const cabinIndices = new Uint16Array([
            3,2,6,  6,7,3,
            7,6,8,  8,9,7,
            //9,8,10,  10,11,9,
            11,10,12,  12,13,11,
            13,12,4,  4,5,13,
            5,4,0,  0,1,5,
            1,0,2,  2,3,1,

            1,3,5,  5,3,9,  9,3,7,
            2,0,4,  2,4,8,  2,8,6,

            5,9,11,  5,11,13,
            8,4,10,  10,4,12
        ]);

        let cabin = new T.BufferGeometry();
        cabin.setAttribute("position", new T.BufferAttribute(cabinVertices, 3));
        cabin.setIndex(new T.BufferAttribute(cabinIndices, 1));
        cabin.computeVertexNormals();
        let cabinMesh = new T.Mesh(cabin, cabinMat);
        car.add(cabinMesh);


        const windowTexture = new T.TextureLoader().load("../textures/window.png");
        let windowMat = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.0,
            metalness: 0.2,
            map: windowTexture,
            transparent: true
        });

        const windshieldVertices = new Float32Array([
            1.3,  2.0, -1.0, // 0
            1.3,  2.0,  1.0, // 1

            0.8,  3.0, -1.0, // 2
            0.8,  3.0,  1.0, // 3
        ]);
        const windshieldIndices = new Uint16Array([
            1,0,2,  2,3,1
        ]);
        const windshieldUVs = new Float32Array([
            0, 0,
            1, 0,
            0, 1,
            1, 1
        ]);

        let windshield = new T.BufferGeometry();
        windshield.setAttribute("position", new T.BufferAttribute(windshieldVertices, 3));
        windshield.setIndex(new T.BufferAttribute(windshieldIndices, 1));
        windshield.setAttribute("uv", new T.BufferAttribute(windshieldUVs, 2));
        windshield.computeVertexNormals();
        
        let windshieldMesh = new T.Mesh(windshield, windowMat);
        car.add(windshieldMesh);

        super("MailTruck", car);
    }
}
