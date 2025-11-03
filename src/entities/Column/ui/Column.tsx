import { Paper, Text, Stack, ScrollArea, useMantineTheme } from '@mantine/core';
import { Task, TaskStatusEnum } from '@/entities/Task';
import modalObserver from '@/shared/lib/observers/modalObserver';
import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';
import { useDroppable } from '@dnd-kit/core';
import { DraggableTaskCard } from '@/features/taskDnd';
import { getTaskStatusColor } from '@/shared/config/taskStatusColors';
import './Column.scss';
interface ColumnProps {
    id: TaskStatusEnum;
    title: string;
    taskStatus: TaskStatusEnum;
    tasks: Task[];
}

export const Column = (props: ColumnProps) => {
    const { id, title, taskStatus, tasks } = props;

    const { setNodeRef } = useDroppable({
        id,
    });
    const handleOpenTaskModal = (props: Task) => {
        modalObserver.addModal(ModalNamesEnum.taskModal, { props });
    };
    const theme = useMantineTheme();

    const taskStatusColor = getTaskStatusColor(theme)[taskStatus];

    return (
        <Stack align="center" gap="xl" ref={setNodeRef}>
            <Text size="xl" fw={900} color={taskStatusColor}>
                {title}
            </Text>

            {!!tasks.length && (
                <ScrollArea h={{ base: '60vh', lg: '82vh' }} w="100%">
                    <Paper
                        w="max-content"
                        h="100%"
                        m="auto"
                        shadow="xs"
                        p={{ base: 'xs', lg: 'xl' }}
                    >
                        <Stack align="center" justify="center" gap="md">
                            {tasks.map(task => (
                                <DraggableTaskCard
                                    onTaskCardClick={() => {
                                        handleOpenTaskModal(task);
                                    }}
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    subtitle={task.subtitle}
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
