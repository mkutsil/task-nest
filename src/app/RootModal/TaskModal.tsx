import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';
import modalObserver, { ModalProps } from '@/shared/lib/observers/modalObserver';
import { Input, Modal, Textarea } from '@mantine/core';

const TaskModal = ({ isOpen = false, props }: ModalProps) => {
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
            <h1>Task title</h1>
        </Modal>
    );
};

export default TaskModal;
