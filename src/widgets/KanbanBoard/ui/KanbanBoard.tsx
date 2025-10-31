import { SimpleGrid } from '@mantine/core';
import { Column } from '@/entities/Column';
import { useSelector } from 'react-redux';
import {
    getTodoKanbanTasks,
    getInProgressKanbanTasks,
    getDoneKanbanTasks,
} from '../model/selectors/kanbanBoard';
import { useMemo } from 'react';
import { DndContext } from '@dnd-kit/core';

export const KanbanBoard = () => {
    const todoTasks = useSelector(getTodoKanbanTasks);
    const inProgressTasks = useSelector(getInProgressKanbanTasks);
    const doneTasks = useSelector(getDoneKanbanTasks);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDragEnd = (event: any) => event;
    // console.log('Drag ended', event);
    const column = useMemo(
        () => [
            {
                title: 'ToDo',
                tasks: todoTasks,
            },
            {
                title: 'In Progress',
                tasks: inProgressTasks,
            },
            {
                title: 'Done',
                tasks: doneTasks,
            },
        ],
        [todoTasks, inProgressTasks, doneTasks]
    );

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <SimpleGrid cols={{ sm: 1, lg: 3 }}>
                {column.map((col, id) => (
                    <Column id={id} title={col.title} key={col.title} tasks={col.tasks} />
                ))}
            </SimpleGrid>
        </DndContext>
    );
};
