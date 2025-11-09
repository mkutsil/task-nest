import './App.scss';
import './styles/reset.scss';
import '@mantine/core/styles.css';
import { AppRouter } from './providers/router';
import { ThemeProvider } from './providers/ThemeProvider';
import RootModal from './RootModal';
import { HotkeyProvider } from './providers/HotkeyProvider/HotkeyProvider';
import { Header } from '@/widgets/Header';

const App = () => (
    <ThemeProvider>
        <Header />
        <AppRouter />
        <HotkeyProvider />
        <RootModal />
    </ThemeProvider>
);

export default App;
