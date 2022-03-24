import React from 'react';
import {Box, Fade, ListItem, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../redux/projIndexSlice';
import {decrement} from '../redux/projIndexSlice';




const projects = [
	{
		name: "BookList Project",
		detail: "Created a bookList application that allows users to organize the books that they wish to read using Google Books API",
		db: "Sqlite",
		tech: "Python (Full stack Django)",
		repoLink: "https://github.com/ardalangh/bookList"
	},
	{
		name: "End-to-end encrypted file-sharing backend",
		detail: "Implemented automation in the building, testing, and deployment of a file-sharing software which remains secure against a malicious user with 'read', 'write', and 'share' access to the databases.Utilized an efficient ‘append’ operation to ensure software optimization.Sanitized User input to prevent Cross-Site Scripting.",
		db: "No DB in use since the focus of this project is implementing the backend",
		tech: "Golang",
		repoLink: "https://github.com/ardalangh/e2eeBackend"
	},
	{
		name: "DunGen Project",
		detail: "Pseudo-random Isometric World Engine. Developed an engine for generating pseudo-random dungeon worlds using a random seed from a user.",
		db: "No DB in use",
		tech: "Java and Princeton's STDDraw library ",
		repoLink: ""
	}
	,
	{
		name: "ActionMap Project",
		detail: "ActionMap is an app that allows users to learn more about their representatives, political events in their area as well as aggregate, share and view news items in their locality.",
		db: "postgresql",
		tech: "Ruby on Rails (Full Stack), JavaScript (Front-end) ",
		repoLink: "https://github.com/ardalangh/actionMap/"
	}
]



function ProjectInfo(props) {
	const projectIndex = useSelector((state) => state.projectIndex.value);
	const dispatch = useDispatch();
	if (props.macOrientation != 1) return null;
	const project = projects[projectIndex];
	return (
		<Fade
			in = {(props.macOrientation == 1)}>
			<Box
				sx={{
					textAlign: 'center',
					color: '#929292',
					backgroundColor: '#000000',
					display: 'flex',
					padding: '0% 2%',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				<Typography variant={'h3'}>{project.name}</Typography>
				<Typography variant={'h6'}>{project.detail}</Typography>
				<ul>
					<li> - Written in {project.tech}</li>
					<li> - Database used {project.db}</li>
				</ul>
				<Box>
					<Button
						onClick={() => dispatch(increment())}
						variant="outlined" startIcon={<NavigateBeforeIcon/>}></Button>

					<Button
						onClick={() => window.location.href = project.repoLink}
						variant="outlined" startIcon={<GitHubIcon/>}> Project Repo </Button>
					
					<Button
						onClick={() => dispatch(decrement())}
						variant="outlined" startIcon={<NavigateNextIcon/>}> </Button>
				</Box>
			</Box>
		</Fade>

	);
}

export default ProjectInfo;