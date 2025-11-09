import { Paper, Text, Stack, ScrollArea, useMantineTheme, rgba } from '@mantine/core';
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
        <Stack align="center" gap="xl" ref={setNodeRef} id={id}>
            <Text size="xl" fw={900} color={taskStatusColor}>
                {title}
            </Text>

            <ScrollArea h={{ base: '60vh', lg: '82vh' }} w="100%">
                <Paper
                    style={{ maxWidth: '320px', minHeight: '100%' }}
                    m="auto"
                    shadow="xs"
                    p="lg"
                    bg={rgba(theme.colors.gray[5], 0.1)}
                >
                    <Stack align="center" justify="center" gap="md">
                        {!!tasks.length &&
                            tasks.map(task => (
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
        </Stack>
    );
};
