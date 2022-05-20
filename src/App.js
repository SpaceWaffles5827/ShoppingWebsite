import './App.css';
import Item from './Item.js';

function App() {
  return (
    <div className="App">
      <div className='NavBar'>
        <div className='NavVarChild'>
          <h1>New Releases</h1>
          <h1>Men</h1>
          <h1>Women</h1>
          <h1>Kids</h1>
          <h1>Sale😈</h1>
        </div>
      </div>
      <div className='HomeContentOne'>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    </div>
  );
}

export default App;
