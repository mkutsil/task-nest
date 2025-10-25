import { Task, TaskStatusEnum } from '@/entities/Task';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { kanbanBoardActions } from '@/widgets/KanbanBoard';
import { Box, Button, Flex, Group, Input, Select, SelectProps, Textarea } from '@mantine/core';
import { ErrorMessage, Formik } from 'formik';
import { useId } from 'react';
import { Plus, Check } from 'lucide-react';
import { TaskFormSchema } from './schema';
import './TaskForm.scss';
interface TaskFormProps {
    handleModalClose: () => void;
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
    const { handleModalClose } = props;

    const taskId = useId();

    const dispatch = useAppDispatch();

    const initialValues = { title: '', subtitle: '', description: '', status: TaskStatusEnum.TODO };

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

        dispatch(kanbanBoardActions.setTodoTasks([newTask]));
        handleModalClose();
    };

    // const iconProps = {
    //     stroke: 1.5,
    //     color: 'currentColor',
    //     opacity: 0.6,
    //     size: 18,
    // };

    const icons: Record<string, React.ReactNode> = {
        // left: <Plus {...iconProps} />,
        center: <Plus />,
        right: <Plus />,
        justify: <Plus />,
    };

    const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => (
        <Group flex="1" gap="xs">
            {icons[option.value]}
            {option.label}
            {checked && <Check style={{ marginInlineStart: 'auto' }} />}
        </Group>
    );

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
                                label="Select with renderOption"
                                placeholder="Select text align"
                                data={[
                                    { value: 'left', label: 'Left' },
                                    { value: 'center', label: 'Center' },
                                    { value: 'right', label: 'Right' },
                                    { value: 'justify', label: 'Justify' },
                                ]}
                                renderOption={renderSelectOption}
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
