import React, {useEffect} from 'react';
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';


function Projects(props) {

	useEffect(() => {


		GLTFLoader

		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		};



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



		const textureLoader = new THREE.TextureLoader();
		const projNames = ['bookList', 'dunGen', 'e2ee', 'actionMap'];

		const projAssets = projNames.map(name => {
				const container = {};
				container['mainScreen'] = new THREE.MeshBasicMaterial({map: textureLoader.load(`${name}.png`)});
				container['touchBar'] = new THREE.MeshBasicMaterial({map: textureLoader.load(`${name}TouchBar.png`)});
				return container;
			},
		);

		// console.log(projAssets);

		let projAtDisplayIndex = 0;

		let clickables = [];

		// === THREE.JS CODE START ===
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		var renderer = new THREE.WebGLRenderer({canvas: document.getElementById(props.idName), alpha: true});
		renderer.setClearColor(0x000000, 1);

		renderer.setSize(window.innerWidth, window.innerHeight);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
		scene.add(ambientLight);

		const dirLight = new THREE.DirectionalLight(0xefefff, 1.5);
		dirLight.position.set(1, 1, -1);
		scene.add(dirLight);

		// const controls = new OrbitControls(camera, renderer.domElement);

		camera.position.z = 0.8;
		camera.position.y = 0.2;

		const buttonTexture = new THREE.MeshBasicMaterial({color: 0xF5F5F5});
		const buttonTextureHovered = new THREE.MeshBasicMaterial({color: 0xC0BFC0});
		let screen, bar, leftButton, rightButton;


		const loader = new DRACOLoader();

		loader.load(
			// resource URL
			'./macbook/scene.gltf',
			function (gltf) {
				const mac = gltf.scene;
				mac.rotation.y = Math.PI / 2;
				mac.scale.set(4, 4, 4);
				mac.position.y = -0.5;
				mac.position.z = 0.5;
				scene.add(gltf.scene);

				const screenGeom = new THREE.PlaneGeometry(1.4, 0.90);
				const ScreenMaterial = projAssets[projAtDisplayIndex].mainScreen;

				screen = new THREE.Mesh(screenGeom, ScreenMaterial);
				screen.name = 'mac screen';
				scene.add(screen);

				const barGeom = new THREE.PlaneGeometry(1.1, 0.05);
				const barMaterial = projAssets[projAtDisplayIndex].touchBar;

				bar = new THREE.Mesh(barGeom, barMaterial);
				bar.name = 'touchBar';
				bar.rotation.x = -Math.PI / 2;
				bar.position.y = -.455;
				bar.position.z = .15;
				scene.add(bar);

				const leftButtonGeom = new THREE.ConeGeometry(0.1, 0.1, 3, 1, 0, 1);
				const leftButtonMaterial = buttonTexture;
				leftButton = new THREE.Mesh(leftButtonGeom, leftButtonMaterial);
				leftButton.rotation.z = Math.PI / 2;
				leftButton.position.x = -0.8;
				leftButton.name = 'leftButton';
				scene.add(leftButton);

				const rightButtonGeom = new THREE.ConeGeometry(0.1, 0.1, 3, 1, 0, 1);
				const rightButtonMaterial = buttonTexture;
				rightButton = new THREE.Mesh(rightButtonGeom, rightButtonMaterial);
				rightButton.rotation.z = -Math.PI / 2;
				rightButton.position.x = 0.8;
				rightButton.name = 'rightButton';
				scene.add(rightButton);

				clickables.push(leftButton);
				clickables.push(rightButton);

			},
			// called while loading is progressing
			function (xhr) {

				console.log((xhr.loaded / xhr.total * 100) + '% loaded');

			},
			// called when loading has errors
			function (error) {

				console.log(error);

			},
		);


		//
		// function onClick(event) {
		//
		// }
		let intersects = [];

		const mouse = new THREE.Vector2();

		window.addEventListener('click', () => {
			if (currentIntersect) {
				console.log(currentIntersect);
				switch (currentIntersect.object.name) {
					case 'rightButton':
						projAtDisplayIndex = ((projAtDisplayIndex + 1) % projNames.length);

						screen.material = projAssets[projAtDisplayIndex].mainScreen;
						bar.material = projAssets[projAtDisplayIndex].touchBar;
						break;

					case 'leftButton':
						projAtDisplayIndex = (((projAtDisplayIndex - 1) % projNames.length + projNames.length) % projNames.length);
						screen.material = projAssets[projAtDisplayIndex].mainScreen;
						bar.material = projAssets[projAtDisplayIndex].touchBar;
						break;
					default:
				}
			}
		});

		window.addEventListener('mousemove', (event) => {
			mouse.x = event.clientX / sizes.width * 2 - 1;
			mouse.y = -(event.clientY / sizes.height) * 2 + 1;

		});

		const raycaster = new THREE.Raycaster();

		//&& (obj.name == "leftButton" || obj.name == "rightButton")
		// scene.traverse((obj) => {
		// 	console.log(obj)
		// 	if (obj.isMesh ) {
		// 		console.log(obj);
		// 		clickables.push(obj)
		// 	}
		// })

		// console.log(clickables);

		let currentIntersect = null;

		var animate = function () {
			requestAnimationFrame(animate);

			// controls.update();

			if (screen) {
				if (camera.position.x + (mouse.x - camera.position.x) * .001 >= -0.2 && camera.position.x + (mouse.x - camera.position.x) * .001 < 0.2) {
					camera.position.x += (mouse.x - camera.position.x) * .001;
				}
				// console.log(camera.position.x);

				camera.lookAt(screen.position);
			}

			raycaster.setFromCamera(mouse, camera);

			intersects = raycaster.intersectObjects(clickables);

			// console.log(clickables);
			// console.log(currentIntersect);
			if (intersects.length) {
				currentIntersect = intersects[0];
				if (currentIntersect.object.name == 'rightButton' || currentIntersect.object.name == 'leftButton') {
					currentIntersect.object.material = buttonTextureHovered;
				}
			} else {
				currentIntersect = null;
				if (leftButton && rightButton) {
					leftButton.material = buttonTexture;
					rightButton.material = buttonTexture;
				}
			}

			renderer.render(scene, camera);
		};
		animate();

	});


	return <canvas id={props.idName}/>;



}

export default Projects;

