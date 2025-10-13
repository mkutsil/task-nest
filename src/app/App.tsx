import './App.scss';
import './styles/reset.scss';
import '@mantine/core/styles.css';
import { AppRouter } from './providers/router';
import { ThemeProvider } from './providers/ThemeProvider';
import RootModal from './RootModal';

const App = () => (
    <ThemeProvider>
        <AppRouter />

        <RootModal />
    </ThemeProvider>
);

export default App;
