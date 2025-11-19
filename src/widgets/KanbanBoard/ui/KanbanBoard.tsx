import { SimpleGrid } from '@mantine/core';
import { Column } from '@/entities/Column';
import { useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { Task, TaskStatusEnum } from '@/entities/Task';
import { DraggableTaskOverlay } from '@/features/taskDnd';
import { useConfetti } from '@/shared/lib/hooks/useConfetti/useConfetti';
import { useTaskUpdate } from '@/entities/Task/api/useTaskUpdate';
import { useTaskById } from '@/entities/Task/api/useTaskById';

// TODO: fix any

interface KanbanBoardProps {
    tasks: Task[];
}

export const KanbanBoard = (props: KanbanBoardProps) => {
    const { tasks } = props;
    const dispatch = useDispatch();
    const [activeTaskId, setActiveTaskId] = useState(null);
    // const todoTasks = useSelector(getTodoKanbanTasks);
    const todoTasks = tasks.filter(task => task.status === TaskStatusEnum.TODO);
    const inProgressTasks = tasks.filter(task => task.status === TaskStatusEnum.IN_PROGRESS);
    const doneTasks = tasks.filter(task => task.status === TaskStatusEnum.DONE);
    const updateTask = useTaskUpdate();

    // const inProgressTasks = useSelector(getInProgressKanbanTasks);
    // const doneTasks = useSelector(getDoneKanbanTasks);

    const activeTask = useTaskById(activeTaskId);
    const triggerConfetti = useConfetti();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleDragStart(event: any) {
        const { active } = event;
        setActiveTaskId(active.id);
        console.log('drag active', active);
        console.log('activeTaskId && activeTask', activeTaskId, activeTask);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        setActiveTaskId(null);

        updateTask.mutate({
            id: active.id,
            status: active.status,

            title: 'string',
            description: 'string',
            createdAt: 'string',
            updatedAt: 'string',
        });

        // dispatch(
        //     kanbanBoardActions.changeTaskStatus({
        //         id: active.id,
        //         status: over.id,
        //     })
        // );
        if (over.id === TaskStatusEnum.DONE) {
            triggerConfetti();
        }
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
