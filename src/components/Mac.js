import React, {useEffect, useRef, useState} from 'react';

import {TextureLoader} from 'three';

import {useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {animated, config, useSpring} from '@react-spring/three';
import {useDispatch, useSelector} from 'react-redux';
import SkillsThree from './SkillsThree';
import {setToLoaded} from '../redux/loadedSlice';


export default function Mac(props) {
	const [loaded, setLoaded] = useState(false);
	const myMesh = useRef();
	const macOrientationNumber = useSelector((state) => state.macOrientation.value);
	const projectIndex = useSelector((state) => state.projectIndex.value);
	const dispatch = useDispatch();

	const gltf = useLoader(GLTFLoader, './macbook/scene.gltf');

	useEffect(() => {
		if (gltf) {
			dispatch(setToLoaded());
		}
	});

	const springArg = {
		config: config.slow,
	};

	switch (macOrientationNumber) {
		case 0:
			if (window.innerWidth < 900) {
				springArg.position = [0, 0.2, 1.0];
			} else {
				springArg.position = [0, 0, 1.1];
			}
			springArg.rotation = [0, Math.PI / 2, -Math.PI / 2];
			break;
		case 1:
			if (window.innerWidth < 900) {
				springArg.position = [0, -0.30, 1.6];
			} else {
				springArg.position = [0, -0.40, 1.65];
			}
			springArg.rotation = [0, Math.PI / 2, 0];

			break;
		case 2:
			if (window.innerWidth < 900) {
				springArg.position = [0, -0.35, 0.55];
			} else {
				springArg.position = [0, -0.5, 0.75];
			}
			springArg.rotation = [0, -Math.PI / 2, 0];
			break;

	}

	const {rotation, position} = useSpring(springArg);

	const projAssets = [
		{
			'mainScreen': useLoader(TextureLoader, `assets/monitorAssets/bookList.png`),
			'touchBar': useLoader(TextureLoader, `assets/touchBarAssets/bookListTouchBar.png`),
		},
		{
			'mainScreen': useLoader(TextureLoader, `assets/monitorAssets/e2ee.png`),
			'touchBar': useLoader(TextureLoader, `assets/touchBarAssets/e2eeTouchBar.png`),
		},
		{
			'mainScreen': useLoader(TextureLoader, `assets/monitorAssets/dunGen.png`),
			'touchBar': useLoader(TextureLoader, `assets/touchBarAssets/dunGenTouchBar.png`),
		},
		{
			'mainScreen': useLoader(TextureLoader, `assets/monitorAssets/actionMap.png`),
			'touchBar': useLoader(TextureLoader, `assets/touchBarAssets/actionMapTouchBar.png`),
		},
	];

	// projAssets['mainScreen'].minFilter = THREE.LinearFilter
	// projAssets['touchBar'].minFilter = THREE.LinearFilter

	return (
		<animated.group
			ref={myMesh}
			rotation={rotation}
			position={position}
		>
			<SkillsThree/>
			<mesh
				position={[0.50, 0.5, 0]}
				rotation={[0, -Math.PI / 2, 0]}
			>
				<planeGeometry args={[1.4, 0.9]}/>
				<meshStandardMaterial map={projAssets[projectIndex].mainScreen} transparent={true}/>
			</mesh>
			<mesh
				position={[0.33, 0.05, 0.02]}
				rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
			>
				<planeGeometry args={[0.87, 0.04]}/>
				<meshStandardMaterial map={projAssets[projectIndex].touchBar} transparent={true}/>
			</mesh>
			<primitive
				object={gltf.scene}
				scale={[4, 4, 4]}
			/>
		</animated.group>
	);

}


