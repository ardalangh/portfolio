import React, {useEffect} from 'react';
import Particles from 'react-tsparticles';
import MainParticle from '../components/MainParticle';
import {Box, IconButton, Typography} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowRight from '../components/ArrowRight';
import ArrowLeft from '../components/ArrowLeft';
import {isMobile} from 'react-device-detect';
import NameInfo from '../components/NameInfo';
import RotateYourPhone from '../components/RotateYourPhone';


function MainPage(props) {

	if (isMobile) {
		return (
			<>
				<Box id={'mainPageForMobiles'} sx={{
					backgroundColor: 'red',
					overflow: 'hidden',
					position: 'absolute',
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px',
				}}>
					<MainParticle/>
					<ArrowRight name={'location'}/>
					<ArrowLeft name={'projects'}/>
					<NameInfo/>
				</Box>
				<RotateYourPhone/>
			</>
		);
	} else {

		return (

			<>
				<MainParticle/>
				<ArrowRight name={'location'}/>
				<ArrowLeft name={'projects'}/>
				<NameInfo/>
			</>);

	}

}

export default MainPage;






