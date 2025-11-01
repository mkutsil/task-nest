import { Task, TaskCard } from '@/entities/Task';
import { Box } from '@mantine/core';

export const DraggableTaskOverlay = (props: Task) => {
    const { id, title, subtitle, description, status, createdAt, updatedAt } = props;

    return (
        <Box
            style={{
                transform: 'rotate(1deg)',
                opacity: 0.9,
                cursor: 'grabbing',
            }}
        >
            <TaskCard
                id={id}
                title={title}
                subtitle={subtitle}
                description={description}
                status={status}
                createdAt={createdAt}
                updatedAt={updatedAt}
            />
        </Box>
    );
};
