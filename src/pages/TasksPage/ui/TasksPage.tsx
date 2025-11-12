import { getIsTasks, KanbanBoard, kanbanBoardActions } from '@/widgets/KanbanBoard';
import TasksPageStub from './components/TasksPageStub/TasksPageStub';
import { useDispatch, useSelector } from 'react-redux';
import modalObserver from '@/shared/lib/observers/modalObserver';
import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';
import { Button, Box } from '@mantine/core';
import { Plus } from 'lucide-react';
import './TaskPage.scss';
import { firestoreApi } from '@/app/firebase/firestore';
import { useEffect } from 'react';

const TasksPage = () => {
    const dispatch = useDispatch();
    const isTasks = useSelector(getIsTasks);
    const handleOpenTaskModal = () => {
        modalObserver.addModal(ModalNamesEnum.taskModal, { props: {} });
    };

    async function testFirebase() {
        // await firestoreApi.addTask({
        //     title: 'First Firebase Task 🎯',
        //     status: 'todo',
        //     createdAt: Date.now(),
        // });

        const tasks = await firestoreApi.fetchTasks();

        dispatch(kanbanBoardActions.getTasks(tasks));
    }

    useEffect(() => {
        testFirebase();
    }, []); // Empty dependency array to run only once on mount

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
