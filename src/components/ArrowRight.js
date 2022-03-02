import React from 'react';
import {Box, IconButton, Typography} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useNavigate} from 'react-router';
import {capitalize} from '../utils/utils';


function ArrowRight(props) {
	const navigate = useNavigate();
	return (
		<>
			<Typography sx={{
				display: 'flex',
				position: 'absolute',
				top: '50vh',
				left: '90vw',
				transformOrigin: 'bottom left',
				transform: 'translate(-25%, 0%) rotate(-90deg)',
				color: '#C0BFC0',

			}}>{capitalize(props.name)}</Typography>
			<IconButton
				onClick={() => navigate(`/${props.name}`)}

				sx={{
				display: 'flex',
				position: 'absolute',
				top: '50vh',
				left: '90vw',
				transform: 'translate(-50%, -50%)',
				width: '2rem',
				height: '2rem',
				backgroundColor: '#F5F5F5',
				'&:hover': {
					backgroundColor: '#fff',
					color: '#C0BFC0',
				},

			}}>
				<ChevronRightIcon/>
			</IconButton>
		</>
	);
}

export default ArrowRight;