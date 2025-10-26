import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { getIsTasks, KanbanBoard } from '@/widgets/KanbanBoard';
import TasksPageStub from './components/TasksPageStub/TasksPageStub';
import { useSelector } from 'react-redux';
import modalObserver from '@/shared/lib/observers/modalObserver';
import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';
import { Link } from 'react-router';

const TasksPage = () => {
    const isTasks = useSelector(getIsTasks);
    const handleOpenTaskModal = () => {
        modalObserver.addModal(ModalNamesEnum.taskModal, { props: {} });
    };
    return (
        <>
            {isTasks ? (
                <>
                    <Link to={RoutePath.home}>
                        <h1>TaskNest</h1>
                    </Link>
                    <KanbanBoard />
                </>
            ) : (
                <TasksPageStub onButtonClick={handleOpenTaskModal} />
            )}
        </>
    );
};

export default TasksPage;
