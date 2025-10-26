import { Box } from '@mantine/core';

interface TasksPageStubProps {
    onButtonClick: () => void;
}

const TasksPageStub = (props: TasksPageStubProps) => {
    const { onButtonClick } = props;

    return (
        <Box>
            <h1 onClick={onButtonClick}>Need to create task</h1>
        </Box>
    );
};

export default TasksPageStub;
