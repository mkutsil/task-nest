import { KanbanBoard } from '@/widgets/KanbanBoard';
import TasksPageStub from './components/TasksPageStub/TasksPageStub';
import modalObserver from '@/shared/lib/observers/modalObserver';
import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';
import { Button, Box } from '@mantine/core';
import { Plus } from 'lucide-react';
import './TaskPage.scss';
import { useTasksRealtime } from '@/entities/Task/api/useTasksRealtime';

const TasksPage = () => {
    const handleOpenTaskModal = () => {
        modalObserver.addModal(ModalNamesEnum.taskModal, { props: {} });
    };

    const { data: tasks } = useTasksRealtime();

    // if (isLoading) return <div>Loading tasks...</div>;
    // if (error) return <div>Failed to load tasks</div>;

    return (
        <>
            {tasks?.length ? (
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
                    <KanbanBoard tasks={tasks} />
                </>
            ) : (
                <TasksPageStub onButtonClick={handleOpenTaskModal} />
            )}
        </>
    );
};

export default TasksPage;
