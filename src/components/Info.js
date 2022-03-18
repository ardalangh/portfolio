import React from 'react';
import {Box, Typography} from '@mui/material';
import Colors from '../colors';
import Links from './Links';
import {useSelector} from 'react-redux';


function Info(props) {
	const bar = document.getElementById("bar")
	const three = document.getElementById("threeCanvas")
	const loaded = useSelector((state) => state.loaded.value);

	return (
		<Box

			sx={{
				display: loaded? 'flex': 'none',
				position: 'absolute',
				top: '63%' ,
				left: '50%',
				width: '30vw',
				height: '60vh',
				transform: 'translate(-50%, -50%)',

				justifyContent: 'center',
				flexDirection: 'column',
			}}
			id={'infoDiv'}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<img src="meMoji.png"
				     width={window.innerWidth <800? '45px': '30%'}
				     height={window.innerHeight <400? '45px': '100%'}/>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<Typography variant="h3" sx={{
						fontWeight: 'bolder', color: Colors.lightTextColor,
					}}>
						ARDY
					</Typography>
					<Typography variant="h4" sx={{
						fontWeight: 'bolder', color: Colors.lightTextColor,
					}}>
						GHOORCHIAN
					</Typography>
				</Box>
			</Box>

			<Typography variant="h6" sx={{marginTop: '5%', color: Colors.lightTextColor,}}>
				I am a back-end engineer specialized in test-driven secure servers to power different services.
				Currently I am focusing on building servers using
				<a href={"https://www.rust-lang.org/"}> Rust </a>
				to build reliable and efficient products.
			</Typography>

			<Links/>
		</Box>
	);
}

export default Info;