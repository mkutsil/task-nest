import { Paper, Text, Stack, ScrollArea } from '@mantine/core';
import { TaskCard } from '../../../entities/Task';

interface ColumnProps {
    title: string;
}

const renderTaskCards = () => new Array(10).fill('').map((_, index) => <TaskCard key={index} />);

export const Column = (props: ColumnProps) => {
    const { title } = props;

    return (
        <Stack align="center" justify="center" gap="xl">
            <Text size="xl" fw={900}>
                {title}
            </Text>
            <ScrollArea h={{ base: '60vh', lg: '85vh' }}>
                <Paper
                    w="max-content"
                    m="auto"
                    shadow="xs"
                    p={{ base: 'xs', lg: 'xl' }}
                    // withBorder={true}
                >
                    <Stack align="center" justify="center" gap="md">
                        {renderTaskCards()}
                    </Stack>
                </Paper>
            </ScrollArea>
        </Stack>
    );
};
