import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { KanbanBoard } from '@/widgets/KanbanBoard';

const TasksPage = () => (
    <>
        <a href={RoutePath.home}>
            <h1>TaskNest</h1>
        </a>
        <KanbanBoard />
    </>
);

export default TasksPage;
