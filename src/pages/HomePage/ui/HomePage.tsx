import { RoutePath } from '../../../shared/config/routeConfig/routeConfig';
import Logo from '../../../shared/assets/logo.png';

const HomePage = () => (
    <>
        <h1>TaskNest</h1>
        <a href={RoutePath.tasks}>
            <img src={Logo} className="logo" alt="TaskNest logo" />
        </a>

        <p>TaskNest — Nest your tasks, boost your productivity.</p>
    </>
);

export default HomePage;
