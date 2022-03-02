import React from 'react';
import {useNavigate} from 'react-router';
import {IconButton, Typography} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function BackToHome(props) {
	const navigate = useNavigate();
	return (
			<IconButton
				onClick={() => navigate(`/home`)}
				sx={{
					display: 'flex',
					position: 'absolute',
					top: '5vh',
					left: '5vw',
					transform: 'translate(-50%, -50%)',
					width: '2rem',
					height: '2rem',
					backgroundColor: '#F5F5F5',
					'&:hover': {
						backgroundColor: '#fff',
						color: '#C0BFC0',
					},

				}}>
				<HomeIcon/>
			</IconButton>

	);
}

export default BackToHome;