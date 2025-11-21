import { updateDoc, doc } from 'firebase/firestore';
import { useMutation } from '@tanstack/react-query';
import { db } from '@/app/firebase/config';

type UpdateTaskPayload = {
    id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Partial<Record<string, any>>;
};

export const useTaskUpdate = () =>
    useMutation({
        mutationFn: async ({ id, data }: UpdateTaskPayload) => {
            await updateDoc(doc(db, 'tasks', id), data);
        },
    });
