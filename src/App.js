
import './App.css';
import react from 'react';
import ImageInSrc from './ImageInSrc.jpg';
import ImageInPublic from './ImageInPublic.jpg'

function App() {
 return (
<div className="App">
 <div style={{ border:"solid 1px black max-width:100vw" }}/>

<h1 className='title red'>Your name here</h1>

<br/>
<img src={imageInSrc} className="App-logo" alt="logo" />
<img src={ImageInPublic} className="App-logo" alt="logo" />
<br/>
</div>
 );
}
export default App;
