import { ModalNamesEnum } from '@/shared/enums/modalNames.enum';
import modalObserver from '@/shared/lib/observers/modalObserver';
import { useEffect } from 'react';

export const HotkeyProvider = () => {
    const handleOpenTaskModal = () => {
        modalObserver.addModal(ModalNamesEnum.taskModal, { props: {} });
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const isMac = navigator.platform.toUpperCase().includes('MAC');
            const ctrlOrCmd = isMac ? e.metaKey : e.ctrlKey;

            if (ctrlOrCmd && e.key.toLowerCase() === 'b') {
                e.preventDefault();
                handleOpenTaskModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return null;
};
