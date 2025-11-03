import { SimpleGrid } from '@mantine/core';
import { Column } from '@/entities/Column';
import { useDispatch, useSelector } from 'react-redux';
import {
    getTodoKanbanTasks,
    getInProgressKanbanTasks,
    getDoneKanbanTasks,
    selectTaskById,
} from '../model/selectors/kanbanBoard';
import { useMemo, useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { TaskStatusEnum } from '@/entities/Task';
import { kanbanBoardActions } from '../model/slice/kanbanBoardSlice';
import { DraggableTaskOverlay } from '@/features/taskDnd';

// TODO: fix any

export const KanbanBoard = () => {
    const dispatch = useDispatch();
    const [activeTaskId, setActiveTaskId] = useState(null);
    const todoTasks = useSelector(getTodoKanbanTasks);
    const inProgressTasks = useSelector(getInProgressKanbanTasks);
    const doneTasks = useSelector(getDoneKanbanTasks);
    const activeTask = useSelector(selectTaskById(activeTaskId));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleDragStart(event: any) {
        const { active } = event;
        setActiveTaskId(active.id);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        setActiveTaskId(null);

        dispatch(
            kanbanBoardActions.changeTaskStatus({
                id: active.id,
                status: over.id,
            })
        );
    };
    const column = useMemo(
        () => [
            {
                id: TaskStatusEnum.TODO,
                taskStatus: TaskStatusEnum.TODO,
                title: 'ToDo',
                tasks: todoTasks,
            },
            {
                id: TaskStatusEnum.IN_PROGRESS,
                taskStatus: TaskStatusEnum.IN_PROGRESS,
                title: 'In Progress',
                tasks: inProgressTasks,
            },
            {
                id: TaskStatusEnum.DONE,
                taskStatus: TaskStatusEnum.DONE,
                title: 'Done',
                tasks: doneTasks,
            },
        ],
        [todoTasks, inProgressTasks, doneTasks]
    );

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <SimpleGrid cols={{ sm: 1, lg: 3 }}>
                {column.map(col => (
                    <Column
                        id={col.id}
                        title={col.title}
                        taskStatus={col.taskStatus}
                        key={col.title}
                        tasks={col.tasks}
                    />
                ))}
            </SimpleGrid>

            <DragOverlay>
                {activeTaskId && activeTask && (
                    <DraggableTaskOverlay
                        id={activeTask.id}
                        title={activeTask.title}
                        subtitle={activeTask.subtitle}
                        description={activeTask.description}
                        status={activeTask.status}
                        createdAt={activeTask.createdAt}
                        updatedAt={activeTask.updatedAt}
                    />
                )}
            </DragOverlay>
        </DndContext>
    );
};
