import { updateDoc, doc } from 'firebase/firestore';
import { useMutation } from '@tanstack/react-query';
import { db } from '@/app/firebase/config';
import { Task } from '../model/types/task';

export const useTaskUpdate = () =>
    useMutation({
        mutationFn: async (task: Task) => {
            await updateDoc(doc(db, 'tasks', task.id), task);
        },
    });
