import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Moon, Sun } from 'lucide-react';
import './Header.scss';
import { Link } from 'react-router';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

export const Header = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    const dark = colorScheme === 'dark';

    return (
        <header className="header">
            <Link to={RoutePath.home}>
                <h1>TaskNest</h1>
            </Link>
            <ActionIcon
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
                color="teal"
                variant="light"
                size={42}
            >
                {dark ? <Sun size={24} /> : <Moon size={24} />}
            </ActionIcon>
        </header>
    );
};
