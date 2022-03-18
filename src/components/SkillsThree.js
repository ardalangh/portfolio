import React from 'react';
import {useLoader} from '@react-three/fiber';
import {TextureLoader} from 'three';


function SkillsThree(props) {
	const skills = useLoader(TextureLoader, 'skills.png');
	return (
		<mesh
			position={[0.60, 0.5, 0]}
			rotation={[0, Math.PI / 2, 0]}
		>
			<planeGeometry args={[1.15, 0.8]}/>
			<meshStandardMaterial map={skills} transparent={true}/>
		</mesh>
	);
}

export default SkillsThree;