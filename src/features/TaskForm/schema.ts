import * as Yup from 'yup';

export const TaskFormSchema = Yup.object({
    title: Yup.string().required('Обов’язкове поле').min(2, 'Мінімальна довжина поля 2 символи'),
    subtitle: Yup.string().required('Обов’язкове поле').min(2, 'Мінімальна довжина поля 2 символи'),
    description: Yup.string()
        .max(255, 'Максимальна довжина поля 255 символів')
        .min(2, 'Мінімальна довжина поля 2 символи'),
});
