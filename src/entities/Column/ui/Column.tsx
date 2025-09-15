import { Paper, Text, Stack, ScrollArea, Button } from '@mantine/core';
import { Task, TaskCard } from '@/entities/Task';
import { Plus } from 'lucide-react';
interface ColumnProps {
    title: string;
    tasks: Task[];
    handleCreateTask: () => void;
}

export const Column = (props: ColumnProps) => {
    const { title, tasks, handleCreateTask } = props;

    return (
        <Stack align="center" gap="xl">
            <Text size="xl" fw={900}>
                {title}
            </Text>

            {title === 'ToDo' && (
                <Button
                    onClick={handleCreateTask}
                    justify="center"
                    fullWidth
                    leftSection={<Plus />}
                    variant="default"
                    mt="md"
                >
                    Add tasks
                </Button>
            )}

            {!!tasks.length && (
                <ScrollArea h={{ base: '60vh', lg: '72vh' }} w="100%">
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
            )}
        </Stack>
    );
};
