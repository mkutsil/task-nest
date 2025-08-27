import './App.scss';
import Logo from './assets/logo.png';

const App = () => (
    <>
        <h1>TaskNest</h1>

        <img src={Logo} className="logo" alt="TaskNest logo" />
        <p>TaskNest — Nest your tasks, boost your productivity.</p>
    </>
);

export default App;
