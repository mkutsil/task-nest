import { MantineProvider } from '@mantine/core';
import { theme } from '../config/theme';

type Props = { children: React.ReactNode };

export const ThemeProvider = ({ children }: Props) => (
    <MantineProvider theme={theme} defaultColorScheme="dark">
        {children}
    </MantineProvider>
);
