import { Task, TaskCard } from '@/entities/Task';
import { useDraggable } from '@dnd-kit/core';
import { Box } from '@mantine/core';
import { GripVertical } from 'lucide-react';
import './DraggableTaskCard.scss';
import { useState } from 'react';

interface DraggableTaskCardProps extends Task {
    id: string;
    onTaskCardClick?: () => void;
}

export const DraggableTaskCard = (props: DraggableTaskCardProps) => {
    const { id, title, subtitle, description, status, createdAt, updatedAt, onTaskCardClick } =
        props;
    const { attributes, listeners, setNodeRef } = useDraggable({ id });
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Box
            ref={setNodeRef}
            onClick={onTaskCardClick}
            style={{ position: 'relative', width: '300px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <Box
                    {...listeners}
                    {...attributes}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '15px',
                        cursor: 'grab',
                        zIndex: 1,

                        animation: 'swirl-in-fwd 0.6s ease-out both',
                    }}
                >
                    <GripVertical size={24} />
                </Box>
            )}

            <TaskCard
                key={id}
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
