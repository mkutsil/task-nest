import { collection, getDocs } from 'firebase/firestore';
import type { Task } from '../model/types/task';
import { db } from '@/app/firebase/config';

export const getTasks = async (): Promise<Task[]> => {
    const snapshot = await getDocs(collection(db, 'tasks'));
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Task[];
};
