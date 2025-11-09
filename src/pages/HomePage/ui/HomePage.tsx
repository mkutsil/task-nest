import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import Logo from '@/shared/assets/logo.png';
import { Container } from '@mantine/core';
import './HomePage.scss';
import { Link } from 'react-router';

const HomePage = () => (
    <Container w="100%" maw={1200}>
        <h1>TaskNest</h1>
        <Link to={RoutePath.tasks}>
            <img src={Logo} className="logo" alt="TaskNest logo" />
        </Link>
        <p>TaskNest — Nest your tasks, boost your productivity.</p>
    </Container>
);

export default HomePage;
