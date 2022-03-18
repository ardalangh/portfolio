import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import {Box, IconButton} from '@mui/material';
import Colors from '../colors';


function Links(props) {

	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'center',
		}}>
			<IconButton
				onClick={() => window.location.href = 'https://www.linkedin.com/in/ardygh/'}
			>
				<LinkedInIcon fontSize={window.innerWidth < 900 ? 'small' : 'large'} sx={{color: Colors.lightBg}}/>
			</IconButton>
			<IconButton
				onClick={() => window.location.href = 'mailto:rdghoorchian@gmail.com'}
			>
				<GoogleIcon fontSize={window.innerWidth < 900 ? 'small' : 'large'} sx={{color: Colors.lightBg}}/>
			</IconButton>
			<IconButton
				onClick={() => window.location.href = 'https://github.com/ardalangh'}
			>
				<GitHubIcon fontSize={window.innerWidth < 900 ? 'small' : 'large'} sx={{color: Colors.lightBg}}/>
			</IconButton>
		</Box>
	);
}

export default Links;