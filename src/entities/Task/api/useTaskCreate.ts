import { addDoc, collection } from 'firebase/firestore';
import { useMutation } from '@tanstack/react-query';
import { db } from '@/app/firebase/config';
import { Task } from '../model/types/task';

export const useTaskCreate = () =>
    useMutation({
        mutationFn: async (task: Omit<Task, 'id'>) => {
            const doc = await addDoc(collection(db, 'tasks'), task);
            return doc.id;
        },
    });
