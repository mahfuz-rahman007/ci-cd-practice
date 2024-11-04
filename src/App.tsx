import './App.css';
import reactLogo from './assets/react.svg';

function App() {
    return (
        <div className='App'>
            <section className='hero-section'>
                <div className='hero-content'>
                    <h1>Mahfujur Rahman</h1>
                    <h2>Full Stack Developer</h2>
                </div>
                <div className='hero-image'>
                    <img src={reactLogo} alt="React Logo" className='react-logo' />
                </div>
            </section>
        </div>
    );
}

export default App;