import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Box } from '@mantine/core';
import { Link } from 'react-router';

interface TasksPageStubProps {
    onButtonClick: () => void;
}

const TasksPageStub = (props: TasksPageStubProps) => {
    const { onButtonClick } = props;

    return (
        <Box>
            <Link to={RoutePath.home}>
                <h1>TaskNest</h1>
            </Link>
            <h1 onClick={onButtonClick}>Need to create task</h1>
        </Box>
    );
};

export default TasksPageStub;
