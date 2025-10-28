import { Task, TaskStatusEnum } from '@/entities/Task';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { kanbanBoardActions } from '@/widgets/KanbanBoard';
import { Box, Button, Flex, Group, Input, Select, SelectProps, Textarea } from '@mantine/core';
import { ErrorMessage, Formik } from 'formik';
import { useId } from 'react';
import { Check, CircleCheck } from 'lucide-react';
import { TaskFormSchema } from './schema';
import './TaskForm.scss';
interface TaskFormProps {
    handleModalClose: () => void;
    taskProps?: Task;
}

interface TaskFormValueProps {
    title: string;
    subtitle: string;
    description: string;
    status: TaskStatusEnum;
}

const now = new Date();
const formattedDate = now.toLocaleString('uk-UA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
});

const TaskForm = (props: TaskFormProps) => {
    const { handleModalClose, taskProps } = props;

    const dispatch = useAppDispatch();

    const newTaskId = useId();
    const isEditMode = taskProps?.id;

    const taskId = isEditMode ? taskProps?.id : newTaskId;

    const initialValues = {
        title: taskProps?.title || '',
        subtitle: taskProps?.subtitle || '',
        description: taskProps?.description || '',
        status: (taskProps?.status as TaskStatusEnum) || TaskStatusEnum.TODO,
    };

    const handleOnSubmit = (values: TaskFormValueProps) => {
        const newTask: Task = {
            id: taskId,
            title: values.title,
            subtitle: values.subtitle,
            description: values.description,
            status: values.status,
            createdAt: formattedDate,
            updatedAt: '-',
        };

        if (isEditMode) {
            dispatch(kanbanBoardActions.editTask(newTask));
        } else {
            dispatch(kanbanBoardActions.addTask(newTask));
        }

        handleModalClose();
    };

    const icons: Record<string, React.ReactNode> = {
        todo: <CircleCheck />,
        'in-progress': <CircleCheck color="yellow" />,
        done: <CircleCheck color="green" />,
    };

    const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => (
        <Group flex="1" gap="xs">
            {icons[option.value]}
            {option.label}
            {checked && <Check style={{ marginInlineStart: 'auto' }} />}
        </Group>
    );

    const handleDeleteTask = () => {
        if (taskProps?.id) {
            dispatch(kanbanBoardActions.deleteTask(taskProps.id));
            handleModalClose();
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleOnSubmit}
            validationSchema={TaskFormSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
            }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Flex gap="lg" direction="column">
                        <Box>
                            <Input
                                className={errors.title && touched.title ? 'input-error' : ''}
                                name="title"
                                variant="filled"
                                placeholder="Enter task title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                            <ErrorMessage className="error-messages" name="title" component="div" />
                        </Box>
                        <Box>
                            <Select
                                name="status"
                                value={values.status}
                                label="Select status"
                                placeholder="Select task status"
                                data={[
                                    { value: TaskStatusEnum.TODO, label: 'Todo' },
                                    { value: TaskStatusEnum.IN_PROGRESS, label: 'In-progress' },
                                    { value: TaskStatusEnum.DONE, label: 'Done' },
                                ]}
                                renderOption={renderSelectOption}
                                onChange={value => setFieldValue('status', value)}
                            />
                        </Box>
                        <Box>
                            <Input
                                className={errors.subtitle && touched.subtitle ? 'input-error' : ''}
                                name="subtitle"
                                variant="filled"
                                placeholder="Enter task subtitle"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.subtitle}
                            />
                            <ErrorMessage
                                className="error-messages"
                                name="subtitle"
                                component="div"
                            />
                        </Box>

                        <Box>
                            <Textarea
                                className={
                                    errors.description && touched.description ? 'input-error' : ''
                                }
                                name="description"
                                label="Description"
                                // description="Input description"
                                onChange={handleChange}
                                placeholder="Enter task description"
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            <ErrorMessage
                                className="error-messages"
                                name="description"
                                component="div"
                            />
                        </Box>
                        <Group mt="lg" justify="flex-end">
                            {isEditMode && (
                                <Button onClick={handleDeleteTask} variant="contained" color="red">
                                    Delete
                                </Button>
                            )}

                            <Button onClick={handleModalClose} variant="default">
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isSubmitting} color="blue">
                                Confirm
                            </Button>
                        </Group>
                    </Flex>
                </form>
            )}
        </Formik>
    );
};

export default TaskForm;
