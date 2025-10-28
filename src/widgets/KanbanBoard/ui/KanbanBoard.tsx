import { SimpleGrid } from '@mantine/core';
import { Column } from '@/entities/Column';
import { useSelector } from 'react-redux';
import {
    getTodoKanbanTasks,
    getInProgressKanbanTasks,
    getDoneKanbanTasks,
} from '../model/selectors/kanbanBoard';
import { useMemo } from 'react';

export const KanbanBoard = () => {
    const todoTasks = useSelector(getTodoKanbanTasks);
    const inProgressTasks = useSelector(getInProgressKanbanTasks);
    const doneTasks = useSelector(getDoneKanbanTasks);

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
        <>
            <SimpleGrid cols={{ sm: 1, lg: 3 }}>
                {column.map(col => (
                    <Column title={col.title} key={col.title} tasks={col.tasks} />
                ))}
            </SimpleGrid>
        </>
    );
};
