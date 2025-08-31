import './App.scss';
import './styles/reset.scss';
import '@mantine/core/styles.css';
import { AppRouter } from './providers/router';
import { ThemeProvider } from './providers/ThemeProvider';

const App = () => (
    <ThemeProvider>
        <AppRouter />
    </ThemeProvider>
);

export default App;
