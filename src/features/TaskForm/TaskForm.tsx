import { Task } from '@/entities/Task';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { kanbanBoardActions } from '@/widgets/KanbanBoard';
import { Button, Flex, Group, Input, Textarea } from '@mantine/core';
import { Formik } from 'formik';
import { useId } from 'react';

interface TaskFormProps {
    handleModalClose: () => void;
}

interface TaskFormValueProps {
    title: string;
    subtitle: string;
    description: string;
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

    const initialValues = { title: '', subtitle: '', description: '' };

    const handleOnSubmit = (values: TaskFormValueProps) => {
        const newTask: Task = {
            id: taskId,
            title: values.title,
            subtitle: values.subtitle,
            description: values.description,
            status: 'done',
            createdAt: formattedDate,
            updatedAt: '-',
        };

        dispatch(kanbanBoardActions.setTodoTasks([newTask]));
        handleModalClose();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <Flex gap="lg" direction="column">
                        <Input
                            name="title"
                            variant="filled"
                            placeholder="Enter task title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        {errors.title && touched.title && errors.title}

                        <Input
                            name="subtitle"
                            variant="filled"
                            placeholder="Enter task subtitle"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.subtitle}
                        />
                        {errors.subtitle && touched.subtitle && errors.subtitle}

                        <Textarea
                            name="description"
                            label="Description"
                            // description="Input description"
                            onChange={handleChange}
                            placeholder="Enter task description"
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        {errors.description && touched.description && errors.description}

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
