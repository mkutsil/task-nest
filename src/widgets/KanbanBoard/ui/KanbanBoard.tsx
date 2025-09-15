import { SimpleGrid } from '@mantine/core';
import { Column } from '@/entities/Column';
import { useSelector } from 'react-redux';
import {
    getTodoKanbanTasks,
    getInProgressKanbanTasks,
    getDoneKanbanTasks,
} from '../model/selectors/kanbanBoard';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { kanbanBoardActions } from '../model/slice/kanbanBoardSlice';

export const KanbanBoard = () => {
    const todoTasks = useSelector(getTodoKanbanTasks);
    const inProgressTasks = useSelector(getInProgressKanbanTasks);
    const doneTasks = useSelector(getDoneKanbanTasks);
    const dispatch = useAppDispatch();
    const column = [
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
    ];

    const mockTasks = [
        {
            id: '1',
            title: 'Task 1',
            description: 'Description for Task 1',
            status: 'todo',
            createdAt: '2023-10-01T10:00:00Z',
            updatedAt: '2023-10-01T10:00:00Z',
        },
        {
            id: '2',
            title: 'Task 2',
            description: 'Description for Task 2',
            status: 'in-progress',
            createdAt: '2023-10-02T11:00:00Z',
            updatedAt: '2023-10-02T11:00:00Z',
        },
        {
            id: '3',
            title: 'Task 3',
            description: 'Description for Task 3',
            status: 'done',
            createdAt: '2023-10-03T12:00:00Z',
            updatedAt: '2023-10-03T12:00:00Z',
        },
    ];

    const handleCreateTask = () => {
        dispatch(kanbanBoardActions.setTodoTasks(mockTasks));
    };

    return (
        <>
            <SimpleGrid cols={{ sm: 1, lg: 3 }}>
                {column.map(col => (
                    <Column
                        handleCreateTask={handleCreateTask}
                        title={col.title}
                        key={col.title}
                        tasks={col.tasks}
                    />
                ))}
            </SimpleGrid>
        </>
    );
};
