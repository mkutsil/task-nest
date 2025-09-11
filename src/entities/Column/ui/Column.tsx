import { Paper, Text, Stack, ScrollArea } from '@mantine/core';
import { Task, TaskCard } from '@/entities/Task';

interface ColumnProps {
    title: string;
    tasks: Task[];
}

export const Column = (props: ColumnProps) => {
    const { title, tasks } = props;

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
                        {tasks.map(task => (
                            <TaskCard
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                description={task.description}
                                status={task.status}
                                createdAt={task.createdAt}
                                updatedAt={task.updatedAt}
                            />
                        ))}
                    </Stack>
                </Paper>
            </ScrollArea>
        </Stack>
    );
};
