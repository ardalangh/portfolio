import logo from './logo.svg';
import {Suspense, useState} from 'react';

import './App.css';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Box, CircularProgress, createTheme, IconButton, responsiveFontSizes, ThemeProvider} from '@mui/material';
import Info from './components/Info';
import Bar from './components/Bar';
import Mac from './components/Mac';
import {Canvas} from '@react-three/fiber';
import {Provider, ReactReduxContext, useDispatch, useSelector} from 'react-redux';
import store from './redux/store';
import {setToSkillsPage} from './redux/macOrientationSlice';
import {decrement, increment} from './redux/projIndexSlice';
import Colors from './colors';
import {Route, Router, Routes} from 'react-router-dom';


function App() {
	const macOrientationNumber = useSelector((state) => state.macOrientation.value);
	const loaded = useSelector((state) => state.loaded.value);
	const dispatch = useDispatch();
	let theme = createTheme({
		typography: {

			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
			fontSize: 12,
		},
	});
	theme = responsiveFontSizes(theme);
	theme.typography.h4 = theme.typography.h3 = {
		fontSize: '1rem',
		'@media (min-width:900px)': {
			fontSize: '1.5rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '3rem',
		},
	};

	theme.typography.h6 = {
		fontSize: '0.8rem',
		'@media (min-width:900px)': {
			fontSize: '0.8rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '1rem',
		},
	};

	return (

		<ThemeProvider theme={theme}>
			<Bar/>
			{/*<Box*/}
			{/*	sx={{*/}
			{/*		textAlign: 'center',*/}
			{/*	}}*/}
			{/*>*/}
			{/*	{!loaded ? <CircularProgress sx={{*/}
			{/*		backgroundColor: 'none',*/}
			{/*		color: 'white',*/}
			{/*	}}/> : null}*/}
			{/*</Box>*/}
			<Box
				sx={{
					display: 'flex',
					height: '100vh',
				}}
			>
				{macOrientationNumber == 1 ? <IconButton id={'leftArrow'} sx={{
					backgroundColor: Colors.darkBg,
					color: Colors.lightBg,
				}} onClick={() => {
					dispatch(decrement())
				}}
				>
					<KeyboardArrowLeftIcon/>
				</IconButton> : null}

				<ReactReduxContext.Consumer>
					{({store}) => (
						<Canvas
							pixelRatio={3.0}
							camera={{position: macOrientationNumber == 1 ? [0, 0, 2] : [0, 0, 2]}}
						>
							<Provider store={store}>
								<color attach="background" args={['black']}/>
								<Suspense fallback={null}>
									<Mac/>
								</Suspense>
								<directionalLight color={0xfdfbd3} intensity={0.5} position={[-1, 0.5, 1]}/>
								<directionalLight color={0xfdfbd3} intensity={0.5} position={[1, 0.5, 1]}/>
							</Provider>
						</Canvas>)}
				</ReactReduxContext.Consumer>

				{macOrientationNumber == 1 ?
					<IconButton id={'rightArrow'}
					            sx={{
						            backgroundColor: Colors.darkBg,
						            color: Colors.lightBg,
					            }}
					            onClick={() => dispatch(increment())}
					>
						<KeyboardArrowRightIcon/>
					</IconButton>
					: null
				}
				{macOrientationNumber === 0 ? <Info/> : null}
			</Box>
		</ThemeProvider>

	);
}

export default App;
