import { TaskStatusEnum } from '@/entities/Task';
import { MantineTheme } from '@mantine/core';

export const getTaskStatusColor = (theme: MantineTheme) => ({
    [TaskStatusEnum.TODO]: theme.colors.blue[6],
    [TaskStatusEnum.IN_PROGRESS]: theme.colors.yellow[6],
    [TaskStatusEnum.DONE]: theme.colors.teal[8],
});
