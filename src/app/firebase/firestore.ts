// src/app/firebase/firestore.ts
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from './config';

export interface Task {
    id?: string;
    title: string;
    status: 'todo' | 'in-progress' | 'done';
    createdAt: number;
}

const tasksCollection = collection(db, 'tasks');

export const firestoreApi = {
    async fetchTasks(): Promise<Task[]> {
        const snapshot = await getDocs(tasksCollection);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Task[];
    },

    async addTask(task: Omit<Task, 'id'>): Promise<void> {
        await addDoc(tasksCollection, task);
    },

    async updateTask(id: string, data: Partial<Task>): Promise<void> {
        const ref = doc(db, 'tasks', id);
        await updateDoc(ref, data);
    },

    async deleteTask(id: string): Promise<void> {
        const ref = doc(db, 'tasks', id);
        await deleteDoc(ref);
    },
};
