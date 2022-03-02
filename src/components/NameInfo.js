import React from 'react';
import {Box, Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

function NameInfo(props) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				top: '30vh',
				left: '50vw',
				transform: 'translate(-50%, -30%)',
				position: 'absolute',
				backgroundColor: 'rgba(38,38,38, 0.5)',
				padding: '1rem',
			}}
		>
			<Typography sx={{
				color: 'white',
				fontSize: 'medium',
				fontFamily: 'Ubuntu, sans-serif',
				marginBottom: '0.5rem'
			}}>
				Hi, my name is
			</Typography>
			<Typography sx={{
				color: 'white',
				fontSize: 'xx-large',
				fontFamily: 'Viaoda Libre, sans-serif',
				fontWeight: 'bold',
				marginBottom: '0.5rem'
			}}>Ardy Ghoorchian</Typography>
			<Typography sx={{
				color: 'white',
				fontSize: 'medium',
				fontFamily: 'Ubuntu, sans-serif',
				marginBottom: '0.5rem'
			}}>
				I am a back-end engineer Specialized in test-driven secure servers to power different services.
				Currently I am focusing on building servers using <a href="https://www.rust-lang.org/">Rust</a> to build
				reliable and efficient products.
			</Typography>
			<Box sx={{
				display: 'flex',
				justifyContent: 'center'
			}}>
				<a href="https://www.linkedin.com/in/ardygh/">
					<LinkedInIcon fontSize="large"/>
				</a>

				<a href="mailto: rdghoorchian@gmail.com">
					<GoogleIcon fontSize="large"/>
				</a>


				<a href="https://github.com/ardalangh">
					<GitHubIcon fontSize="large"/>
				</a>
			</Box>
		</Box>
	);
}

export default NameInfo;