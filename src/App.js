import React, { useEffect, useState } from 'react';
import './App.css';
import { CircularProgress } from '@mui/material';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';

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
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setData(initialData);
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<div className="App">
			<div style={{ width: "70%", margin: "auto" }}>
				<CreatePost data={data} setData={setData} />
				{isLoading ? <CircularProgress /> : <Posts data={data} />}
			</div>
		</div>
	);
}

export default App;
