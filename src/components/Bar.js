import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import Colors from '../colors.js';
import {useDispatch} from 'react-redux';
import {setToInfoPage, setToProjPage, setToSkillsPage} from '../redux/macOrientationSlice';


const pages = ['Home', 'Projects'];

const Bar = () => {
	const dispatch = useDispatch();

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static"
		        sx={{
			        backgroundColor: Colors.darkBg,
		        }}
		        id="bar"
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<img
						src="/lightLogo.png"
						width={32} height={32}
						noWrap
						alt="logo of portfolio"
						component="div"
						sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
					/>
					{/*APP LINKS FOR md> SCREENS */}

					<Box sx={{flexGrow: 1, display: 'flex', justifyContent:'center'}}>

							<Button

								variant="outlined"
								key={"HOME"}
								onClick={handleCloseNavMenu}
								sx={{
									borderColor: Colors.lightBg,
									my: 2,
									color: Colors.lightBg,
									display: 'block',
									marginRight: '0.5%',
									fontFamily: 'Inter,Nunito Sans,-apple-system,San Francisco,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif',
								}}
								onClick={() => dispatch(setToInfoPage())}
							>
								{"HOME"}
							</Button>


						<Button
							variant="outlined"
							key={"PROJECTS"}
							onClick={handleCloseNavMenu}
							sx={{
								borderColor: Colors.lightBg,
								my: 2,
								color: Colors.lightBg,
								display: 'block',
								marginRight: '0.5%',
								fontFamily: 'Inter,Nunito Sans,-apple-system,San Francisco,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif',
							}}
							onClick={() => dispatch(setToProjPage())}
						>
							{"PROJECTS"}
						</Button>



						<Button
							variant="outlined"
							key={"SKILLS"}
							onClick={handleCloseNavMenu}
							sx={{
								borderColor: Colors.lightBg,
								my: 2,
								color: Colors.lightBg,
								marginRight: '0.5%',
								display: 'block',
								fontFamily: 'Inter,Nunito Sans,-apple-system,San Francisco,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif',
							}}
							onClick={() => dispatch(setToSkillsPage())}
						>
							{"SKILLS"}
						</Button>

					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Bar;
