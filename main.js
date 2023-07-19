import * as THREE from 'three';

import Stats from './node_modules/three/addons/libs/stats.module.js';

import { OrbitControls } from './node_modules/three/addons/controls/OrbitControls';

import { Octree } from './node_modules/three/addons/math/Octree.js';
import { OctreeHelper } from './node_modules/three/addons/helpers/OctreeHelper.js';

import { Capsule } from './node_modules/three/addons/math/Capsule.js';

import { GLTFLoader } from './node_modules/three/addons/loaders/GLTFLoader';


// SETUP ENVIROMENT

const GRAVITY = 30;
const STEPS_PER_FRAME = 5;

const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0x88ccee );
scene.fog = new THREE.Fog( 0x88ccee,0,50);

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1 , 1000);
camera.rotation.order = 'YXZ';

const fillLight1 = new THREE.HemisphereLight( 0x8dc1de, 0x006668d, 1.5);
fillLight1.position.set( 2,1,1 );
scene.add( fillLight1 );

const directionalLight = new THREE.DirectionalLight( 0xffffff,2.5);
directionalLight.position.set( -5,25,-1);
directionalLight.castShadow = true;
directionalLight.shadow.camera.near = 0.01;
directionalLight.shadow.camera.far = 500;
directionalLight.shadow.camera.right = 30;
directionalLight.shadow.camera.left = -30;
directionalLight.shadow.camera.top = 30;
directionalLight.shadow.camera.bottom = -30;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.radius = 4;
directionalLight.shadow.bias = -0.000006;
scene.add(directionalLight);

const container = document.getElementById( 'container' );

const renderer = new THREE.WebGLRenderer( {antialias:true} );

const stats = new Stats();

// SETUP MOVEMENT
const worldOctree = new Octree();

const playerCollider = new Capsule (new THREE.Vector3(0,0.35,0), new THREE.Vector3(0,1,0),0.35);

const playerVelocity = new THREE.Vector3();
const playerDirection = new THREE.Vector3();

let playerOnFloor = false;
let mouseTime = 0;

const vector1 = new THREE.Vector3();
const vector2 = new THREE.Vector3();
const vector3 = new THREE.Vector3();


document.addEventListener( 'keydown', ( event ) =>{
    keyStates[ event.code] = true;
});
document.addEventListener( 'keyup', ( event ) =>{
    keyStates[ event.code] = false;
});
container.addEventListener( 'mousedown', () =>{
    document.body.requestPointerLock();
    mouseTime = performance.now();
});

document.body.addEventListener('mousemove',( event ) =>{
    if (document.pointerLockElement === document.body){
        camera.rotation.y -= event.movementX / 500;
        camera.rotation.x -= event.movementY / 500;
    }
});

//FUNCTION CONTROL MOVEMENT
function playerCollisions(){
    const result = worldOctree.capsuleIntersect(playerCollider);
    playerOnFloor = false;

    if (result){
        playerOnFloor = result.normal.y > 0;

        if(!playerOnFloor){
            playerVelocity.addScaledVector(result.normal, - result.normal.dot(playerVelocity));
        }
        playerCollider.translate(result.normal.multiplyScalar(result.depth));
    }
}

function getForwardVector (){

}

function controls( deltaTIme ){
    const speedDelta = deltaTIme * (playerOnFloor ? 25 : 8);

    if ( keyStates['keyW']){
        playerVelocity.add(getForwardVector().multiplyScalar( speedDelta ));
    }

    if ( keyStates['keyS']) {
        playerVelocity.add(getForwardVector().multiplyScalar( - speedDelta));
    }

    if (keyStates['keyA']){
        playerVelocity.add(getForwardVector().multiplyScalar( - speedDelta));
    }

    if (keyStates['keyD']){
        playerVelocity.add(getForwardVector().multiplyScalar( speedDelta ))
    }

    if (playerOnFloor){
        if (keyStates[ 'Space' ]){
            playerVelocity.y = 8;
        }
    }
}
const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
    './skybox/bk.jpg',
    './skybox/dn.jpg',
    './skybox/ft.jpg',
    './skybox/lf.jpg',
    './skybox/rt.jpg',
    './skybox/up.jpg',
])

scene.background = texture;
animate();
// const loader = new GLTFLoader().setPath( './models/gltf/');
// loader.load( 'collision-world.lib', (gltf) => {
//     scene.add( gltf.scene);
//     worldOctree.fromGraphNode(gltf.scene);
//     gltf.scene.traverse(child =>{
//         if (child.isMesh){
//             child.castShadow = true;
//             child.receiveShadow = true;

//             if (child.material.map){
//                 child.material.anisotropy = 4;
//             }
//         }
//     });
//     animate();
// })

function teleportPlayerIfOob(){
    if (camera.position.y <= -25){
        playerCollider.start.set(0,0.35,0);
        playerCollider.end.set(0,1,0);
        playerCollider.radius = 0.35;
        camera.position.copy(playerCollider.end);
        camera.position.set(0,0,0);
    }
}

function animate(){
    
    const deltaTIme = Math.min( 0.05, clock.getDelta()) / STEPS_PER_FRAME;

    for ( let i = 0; i < STEPS_PER_FRAME; i++){
        controls( deltaTIme );
        updatePlayer( deltaTIme );
    }

    renderer.render( scene,camera );
    stats.update();
    requestAnimationFrame( animate ); 
}



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