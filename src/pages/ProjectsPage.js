import React from 'react';
import {isMobile} from 'react-device-detect';
import RotateYourPhone from '../components/RotateYourPhone';
import Projects from '../components/Projects';
import BackToHome from '../components/BackToHome';


function ProjectsPage(props) {

	if (isMobile) {
		return (
			<>
				<BackToHome/>
				<Projects idName="projCanvasForMobiles"/>
				<RotateYourPhone/>

			</>
		);
	} else {

		return (
			<>
				<BackToHome/>
				<Projects idName="projCanvas"/>
			</>
		)

	}

}

export default ProjectsPage;