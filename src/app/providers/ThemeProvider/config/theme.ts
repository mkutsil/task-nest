import { createTheme } from '@mantine/core';

export const theme = createTheme({
    colors: {
        brand: [
            '#e3f2ff',
            '#b3daff',
            '#81c2ff',
            '#4eaaff',
            '#1b92ff',
            '#0079e6', // основний колір
            '#005db4',
            '#004182',
            '#002551',
            '#000a21',
        ],
    },
    primaryColor: 'brand',
    fontFamily: 'Inter, sans-serif',
    headings: { fontFamily: 'Roboto, sans-serif' },
});
