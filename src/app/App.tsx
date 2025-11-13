import './App.scss';
import './styles/reset.scss';
import '@mantine/core/styles.css';
import { AppRouter } from './providers/router';
import { ThemeProvider } from './providers/ThemeProvider';
import RootModal from './RootModal';
import { HotkeyProvider } from './providers/HotkeyProvider/HotkeyProvider';
import { Header } from '@/widgets/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <Header />
            <AppRouter />
            <HotkeyProvider />
            <RootModal />
        </ThemeProvider>
    </QueryClientProvider>
);

export default App;
