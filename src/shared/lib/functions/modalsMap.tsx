import { lazy } from 'react';
import { componentLoader } from '../observers/componentLoader';
import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';

const TaskModal = lazy(() => componentLoader(() => import('@/app/RootModal/TaskModal')));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modalsMap: Record<ModalNamesEnum, any> = {
    [ModalNamesEnum.taskModal]: TaskModal,
};

export default modalsMap;
