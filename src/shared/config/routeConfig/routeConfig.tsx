import { TasksPage } from '../../../pages/TasksPage';
import { HomePage } from '../../../pages/HomePage';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import type { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRouters {
    HOME = 'home',
    TASKS = 'tasks',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.HOME]: '/',
    [AppRouters.TASKS]: '/tasks',
    [AppRouters.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRouters, AppRoutesProps> = {
    [AppRouters.HOME]: {
        path: RoutePath.home,
        element: <HomePage />,
    },
    [AppRouters.TASKS]: {
        path: RoutePath.tasks,
        element: <TasksPage />,
    },
    [AppRouters.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
