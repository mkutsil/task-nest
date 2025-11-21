import { deleteDoc, doc } from 'firebase/firestore';
import { useMutation } from '@tanstack/react-query';
import { db } from '@/app/firebase/config';

export const useTaskDelete = () =>
    useMutation({
        mutationFn: async (id: string) => {
            await deleteDoc(doc(db, 'tasks', id));
        },
    });
