import { getIsTasks, KanbanBoard } from '@/widgets/KanbanBoard';
import TasksPageStub from './components/TasksPageStub/TasksPageStub';
import { useSelector } from 'react-redux';
import modalObserver from '@/shared/lib/observers/modalObserver';
import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';
import { Button, Box } from '@mantine/core';
import { Plus } from 'lucide-react';
import './TaskPage.scss';

const TasksPage = () => {
    const isTasks = useSelector(getIsTasks);
    const handleOpenTaskModal = () => {
        modalObserver.addModal(ModalNamesEnum.taskModal, { props: {} });
    };

    return (
        <>
            {isTasks ? (
                <>
                    <Box className="header-page-container ">
                        <Button
                            onClick={handleOpenTaskModal}
                            justify="center"
                            leftSection={<Plus />}
                            variant="default"
                        >
                            Add tasks
                        </Button>
                    </Box>
                    <KanbanBoard />
                </>
            ) : (
                <TasksPageStub onButtonClick={handleOpenTaskModal} />
            )}
        </>
    );
};

export default TasksPage;
