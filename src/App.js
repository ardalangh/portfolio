import {Suspense} from 'react';

import './App.css';
import {Box, CircularProgress, createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material';
import Info from './components/Info';
import Bar from './components/Bar';
import Mac from './components/Mac';
import {Canvas} from '@react-three/fiber';
import {Provider, ReactReduxContext, useDispatch, useSelector} from 'react-redux';
import ProjectInfo from './components/ProjectInfo';
import {PopupWidget} from 'react-calendly';


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

		<>
			<PopupWidget
				url="https://calendly.com/ardyghoorchian/30min"
				rootElement={document.getElementById('root')}
				text="Schedule a meeting"
				textColor="#ffffff"
				color="#00a2ff"
			/>
			<ThemeProvider theme={theme}>
				<Bar/>
				<Box
					sx={{
						textAlign: 'center',
					}}
				>
					{!loaded ? <CircularProgress sx={{
						backgroundColor: 'none',
						color: 'white',
					}}/> : null}
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '100vh',
					}}
				>
					<ProjectInfo macOrientation={macOrientationNumber}/>
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
					<Info macOrientation={macOrientationNumber}/>
				</Box>
			</ThemeProvider>
		</>

	);
}

export default App;
