import React from 'react';
import {IconButton, Typography} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {useNavigate} from 'react-router';
import {capitalize} from '../utils/utils';


function ArrowLeft(props) {
	const navigate = useNavigate();

	return (
		<>
				<Typography sx={{
					position: 'absolute',
					top: '50vh',
					left: '10vw',
					transformOrigin: 'bottom right',
					transform: 'translate(-72%, 0%) rotate(90deg)',
					color: '#C0BFC0',
				}}>{capitalize(props.name)}</Typography>
				<IconButton
					onClick={() => navigate(`/${props.name}`)}
					sx={{
					top: '50vh',
					left: '10vw',
					transform: 'translate(-50%, -50%)',
					position: 'absolute',
					backgroundColor: '#F5F5F5',
					width: '2rem',
					height: '2rem',
					'&:hover': {
						backgroundColor: '#fff',
						color: '#C0BFC0',
					},
				}}>
					<ChevronLeftIcon/>
				</IconButton>

		</>
	);
}

export default ArrowLeft;