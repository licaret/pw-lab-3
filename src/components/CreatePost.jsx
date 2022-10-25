import React, { useState } from 'react';
import { TextField, Button } from "@mui/material";

export default function CreatePost({ data, setData }) {
	const [newPostTitle, setNewPostTitle] = useState("");

	const addNewPost = () => {
		console.log(data);
		if (newPostTitle && newPostTitle.length > 0) {
			setData([...data, {
				title: newPostTitle,
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lacinia vehicula. In vel feugiat nibh. Suspendisse faucibus, magna vitae fermentum pulvinar, elit sapien elementum turpis, at pretium leo enim quis purus.`
			}]);
			setNewPostTitle("");
		}
		else {
			alert("Post title should not be empty!");
		}
	}

	return (
		<div>
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
				<Button variant="contained" sx={{ mb: 5 }} onClick={addNewPost}>
					Submit
				</Button>
			</div>
		</div>
	);
}
