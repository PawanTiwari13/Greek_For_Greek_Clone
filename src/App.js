import './App.css';
import Header from './pages/Header';
import HeaderOne from "./pages/HeaderOne";
function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='col-lg-12'>
          <Header/>

        </div>
      </div>
        <div className='row'>
            <div className='col-lg-12'>
                <HeaderOne/>
            </div>
        </div>



    </div>
  );
}

export default App;
