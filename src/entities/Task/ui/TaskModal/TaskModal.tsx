import TaskForm from '@/features/TaskForm/TaskForm';
import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';
import modalObserver, { ModalProps } from '@/shared/lib/observers/modalObserver';
import { Modal } from '@mantine/core';
import { Task } from '../../model/types/task';

const TaskModal = ({ isOpen = false, props }: ModalProps) => {
    const handleModalClose = () => {
        modalObserver.removeModal(ModalNamesEnum.taskModal);
    };

    return (
        <Modal
            opened={isOpen}
            onClose={handleModalClose}
            title="Task info"
            // TODO: fix animation
            transitionProps={{ transition: 'rotate-left' }}
            centered
            {...props}
        >
            <TaskForm taskProps={props as Task} handleModalClose={handleModalClose} />
        </Modal>
    );
};

export default TaskModal;
