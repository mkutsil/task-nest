import './App.scss';
import './styles/reset.scss';
import '@mantine/core/styles.css';
import { AppRouter } from './providers/router';
import { ThemeProvider } from './providers/ThemeProvider';
import RootModal from './RootModal';
import { HotkeyProvider } from './providers/HotkeyProvider/HotkeyProvider';

const App = () => (
    <ThemeProvider>
        <AppRouter />
        <HotkeyProvider />
        <RootModal />
    </ThemeProvider>
);

export default App;
