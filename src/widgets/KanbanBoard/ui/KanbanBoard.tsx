import { SimpleGrid } from '@mantine/core';
import { Column } from '@/entities/Column';
import { useSelector } from 'react-redux';
import {
    getTodoKanbanTasks,
    getInProgressKanbanTasks,
    getDoneKanbanTasks,
} from '../model/selectors/kanbanBoard';
import modalObserver from '@/shared/lib/observers/modalObserver';
import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';

export const KanbanBoard = () => {
    const todoTasks = useSelector(getTodoKanbanTasks);
    const inProgressTasks = useSelector(getInProgressKanbanTasks);
    const doneTasks = useSelector(getDoneKanbanTasks);
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

    const handleOpenTaskModal = () => {
        modalObserver.addModal(ModalNamesEnum.taskModal, { props: {} });
    };

    return (
        <>
            <SimpleGrid cols={{ sm: 1, lg: 3 }}>
                {column.map(col => (
                    <Column
                        handleCreateTask={handleOpenTaskModal}
                        title={col.title}
                        key={col.title}
                        tasks={col.tasks}
                    />
                ))}
            </SimpleGrid>
        </>
    );
};
