import * as THREE from 'three';

import Stats from './node_modules/three/addons/libs/stats.module.js';

import { OrbitControls } from './node_modules/three/addons/controls/OrbitControls';

import { GLTFLoader } from './node_modules/three/addons/loaders/GLTFLoader';


// SETUP ENVIROMENT

const GRAVITY = 30;
const STEPS_PER_FRAME = 5;

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x88ccee );
scene.fog = new THREE.Fog( 0x88ccee,0,50);

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1 , 1000);
camera.rotation.order = 'YXZ';

const fillLight1 = new THREE.HemisphereLight( 0x8dc1de, 0x006668d, 1.5);
fillLight1.position.set( 2,1,1 );
scene.add( fillLight1 );

const directionalLight = new THREE.DirectionalLight( 0xffffff,2.5);



// class BasicWorldDemo{
//     contructor (){
//         this._Initialize();
//     }

//     _Initialize(){
//         this._threejs = new THREE.WebGLRenderer();
//         this._threejs.shadowMap.enable = true;
//         this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
//         this._threejs.setPixelRatio(window.devicePixelRatio);
//         this._threejs.setSize(window.innerWidth, window.innerHeight);

//         document.body,appendChild(this._threejs.domElement);

//         window.addEventListener('resize',() => {
//             this._OnWindowResize();
//         }, false);

//         const fov = 60;
//         const aspect = 1920 / 1080;
//         const near = 1.0;
//         const far = 1000.0;
//         this._camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
//         this._camera.posistion.set(75,20,0);

//         this._scene = new THREE.Scene();
        
//         let light = new THREE.DirectionalLight(0xffffff);
//         light.posistion.set(100,100,100);
//         light.target.posistion.set(0,0,0);
//         light.castShadow = true;
//         light.shadow.bias = -0.01;
//         light.shadow.mapSize.width = 2048;
//         light.shadow.mapSize.heigh = 2048;
//         light.shadow.camera.near = 1.0;
//         light.shadow.camera.far = 500;
//         light.shadow.camera.left = 200;
//         light.shadow.camera.right = -200;
//         light.shadow.camera.top = 200;
//         light.shadow.camera.bottom = -200;
//         this._scene.add(light);

//         light - new THREE.AmbientLight(0x404040);
//         this._scene.add(light);

//         const controls = new OrbitControls(
//             this._camera, this._threejs.domElement);
//         controls.target.set(0,0,0);
//         controls.update();

//         const loader = new THREE.CubeTexttureLoader();
//         const texture = loader.load([
//             './resource/posx.bmp',
//             './resource/negx.bmp',
//             './resource/posy.bmp',
//             './resource/negy.bmp',
//             './resource/posz.bmp',
//             './resource/negz.bmp',
//         ]);
//         this._scene.background - texture;
        

//         this._RAF();
//     }

//     _OnWindowResize(){
//         this._camera.aspect = window.innerWidth / window.innerHeight;
//         this._camera.updateProjectionMatrix();
//         this._threejs.setSize(window.innerWidth , window.innerHeight);
//     }
   
//     _RAF(){
//         requestAnimationFrame(() => {
//             this._threejs.render(this._scene, this._camera);
//             this._RAF();
//         })
//     }
// }