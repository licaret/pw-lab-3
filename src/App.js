import React, { useState } from 'react';
import './App.css';
import { TextField, Button } from '@mui/material';
import Posts from './components/Posts';

const initialData = [
	{
		title: "Post title 1",
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lacinia vehicula. In vel feugiat nibh. Suspendisse faucibus, magna vitae fermentum pulvinar, elit sapien elementum turpis, at pretium leo enim quis purus.`
	},
	{
		title: "Post title 2",
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lacinia vehicula. In vel feugiat nibh. Suspendisse faucibus, magna vitae fermentum pulvinar, elit sapien elementum turpis, at pretium leo enim quis purus.`
	},
	{
		title: "Post title 3",
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lacinia vehicula. In vel feugiat nibh. Suspendisse faucibus, magna vitae fermentum pulvinar, elit sapien elementum turpis, at pretium leo enim quis purus.`
	},
];

function App() {
	const [data, setData] = useState(initialData);
	const [newPostTitle, setNewPostTitle] = useState("");

	const addNewPost = () => {
		setData([...data, {
			title: newPostTitle,
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lacinia vehicula. In vel feugiat nibh. Suspendisse faucibus, magna vitae fermentum pulvinar, elit sapien elementum turpis, at pretium leo enim quis purus.`
		}]);
		setNewPostTitle("");
	}

	return (
		<div className="App">
			<div style={{ width: "70%", margin: "auto" }}>
				<h1>Create a Post</h1>
				<div>
					<TextField
						id="new-post-field"
						label="Add new post"
						variant="outlined"
						sx={{ margin: 2 }}
						fullWidth
						value={newPostTitle}
						onChange={(e) => setNewPostTitle(e.target.value)}
					/>
					<Button
						variant="contained"
						sx={{ mb: 5 }}
						onClick={addNewPost}
					>
						Submit
					</Button>
				</div>

				<Posts data={data} />
			</div>
		</div>
	);
}

export default App;
