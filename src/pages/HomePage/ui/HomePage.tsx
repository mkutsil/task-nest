import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import Logo from '@/shared/assets/logo.png';
import { useMantineColorScheme, ActionIcon, Container } from '@mantine/core';
import { Sun, Moon } from 'lucide-react';
import modalObserver from '@/shared/lib/observers/modalObserver';
import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';

const HomePage = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const handleOpenTaskModal = () => {
        modalObserver.addModal(ModalNamesEnum.taskModal, { props: {} });
    };
    return (
        <Container w="100%" maw={1200}>
            <h1 onClick={handleOpenTaskModal}>TaskNest</h1>
            <a href={RoutePath.tasks}>
                <img src={Logo} className="logo" alt="TaskNest logo" />
            </a>
            <p>TaskNest — Nest your tasks, boost your productivity.</p>
            <ActionIcon
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
                color="teal"
                variant="light"
                size={42}
            >
                {dark ? <Sun size={24} /> : <Moon size={24} />}
            </ActionIcon>
        </Container>
    );
};

export default HomePage;
