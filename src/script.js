import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import gsap from 'gsap';

//Texture Loader
const textureLoader = new THREE.TextureLoader()



// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const billboardGeom = new THREE.PlaneBufferGeometry(1, 1.9);

const projNames = ["scheme", "dunGen", "e2ee", "bookList"]
const objs = []

for (let i = 0; i < 4; i++) {
	const material = new THREE.MeshBasicMaterial({
		map: textureLoader.load(`/projects/${projNames[i]}.jpeg`)
	})

	const billboard = new THREE.Mesh(billboardGeom, material);
	billboard.position.set(1, i * 2.6, 0)

	objs.push(billboard)
	scene.add(billboard)
}




// scene.traverse((object) => {
// 	if (object.isMesh) objs.push(object);
// })
// Objects

// Materials


// Mesh


// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
}

window.addEventListener('resize', () =>
{
	// Update sizes
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	// Update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	// Update renderer
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})








const mouse = new THREE.Vector2()


window.addEventListener('mousemove', (event) => {
	mouse.x = event.clientX / sizes.width * 2 - 1;
	mouse.y = - (event.clientY / sizes.height) * 2 + 1;
})


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/*Mouse*/

window.addEventListener('wheel', onMouseWheel)

let y = 0
let position = 0

function onMouseWheel(event) {
	y = event.deltaY * 0.0003;
}














/**
 * Animate
 */

const raycaster = new THREE.Raycaster()


const clock = new THREE.Clock()

const tick = () =>
{

	const elapsedTime = clock.getElapsedTime()

	// Update objects


		position += y;
		y *= .5;
		camera.position.y = -position;


	if (camera.position.y < 0) {
		console.log("sdjfglj");
		camera.position.y = 0
	}

	if (camera.position.y > 2.4 * 4) {
		camera.position.y = 2.4 * 4
	}




	raycaster.setFromCamera(mouse, camera)
	const intersects = raycaster.intersectObjects(objs)


	for (const intersect of intersects) {
		gsap.to(intersect.object.scale, {x: 1.7, y:1.7})
		gsap.to(intersect.object.rotation, {y:-.5})
	}


	for (const obj of objs) {
		if (!intersects.find(inter => inter.object === obj)) {
			gsap.to(obj.scale, {x: 1, y:1})
			gsap.to(obj.rotation, {y:0})
		}
	}




	// Update Orbital Controls
	// controls.update()

	// Render
	renderer.render(scene, camera)

	// Call tick again on the next frame
	window.requestAnimationFrame(tick)
}

tick()
