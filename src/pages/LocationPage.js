import React from 'react';
import home from '../home.mp4';
import homeMap from '../homeMap.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowLeft from '../components/ArrowLeft';
import BackToHome from '../components/BackToHome';
import {isMobile} from 'react-device-detect';
import sfView from '../utils/assets/sfView.png';
function LocationPage(props) {


	if (isMobile) {
		<>
			<img src={sfView}/>
			<div className="mapDiv">
				<img id="homeMap" src={homeMap}/>
				<h1>San Fransisco</h1>
			</div>
			<BackToHome/>

		</>
	}
	return (


		<>


			<video autoPlay muted loop playsinline         id="homeVideo">
				<source src={home} type="video/mp4"/>
			</video>


			<div className="mapDiv">
				<img id="homeMap" src={homeMap}/>
				<h1>San Fransisco</h1>
			</div>
			<BackToHome/>



		</>


	);
}

export default LocationPage;