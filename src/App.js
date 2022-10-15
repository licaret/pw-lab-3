import './App.css';
import { TextField, Button } from '@mui/material';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <div style={{ width: "70%", margin: "auto" }}>
        <div>
          <h1>Create a Post</h1>
        </div>

        <div>
          <TextField id="new-post-field" label="Add new post" variant="outlined" fullWidth sx={{ margin: 2 }} />
          <Button variant="contained" sx={{ mb: 5 }}>Submit</Button>
        </div>

        <Posts />
      </div>
    </div>
  );
}

export default App;
