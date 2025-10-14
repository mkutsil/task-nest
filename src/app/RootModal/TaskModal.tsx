import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import modalObserver, { ModalProps } from '@/shared/lib/observers/modalObserver';
import { kanbanBoardActions } from '@/widgets/KanbanBoard';
import { Button, Group, Input, Modal, Textarea } from '@mantine/core';

const TaskModal = ({ isOpen = false, props }: ModalProps) => {
    const dispatch = useAppDispatch();

    const mockTasks = [
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
        handleClose();
    };

    const handleClose = () => {
        modalObserver.removeModal(ModalNamesEnum.taskModal);
    };

    return (
        <Modal
            opened={isOpen}
            onClose={handleClose}
            title="Task info"
            // TODO: fix animation
            transitionProps={{ transition: 'rotate-left' }}
            centered
            {...props}
        >
            <Input variant="filled" placeholder="Enter task title" />
            <Textarea
                label="Description"
                // description="Input description"
                placeholder="Enter task description"
            />
            <Group mt="lg" justify="flex-end">
                <Button onClick={handleClose} variant="default">
                    Cancel
                </Button>
                <Button onClick={handleCreateTask} color="blue">
                    Confirm
                </Button>
            </Group>
        </Modal>
    );
};

export default TaskModal;
