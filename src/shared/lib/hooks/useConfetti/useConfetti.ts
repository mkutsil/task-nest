import { TaskStatusEnum } from '@/entities/Task';
import confetti from 'canvas-confetti';

export function useConfetti() {
    return () => {
        let x = 0.5;
        let y = 0.5;

        const element = document.getElementById(TaskStatusEnum.DONE);

        if (element) {
            const rect = element.getBoundingClientRect();
            x = (rect.left + rect.width / 2) / window.innerWidth;
            y = (rect.top + rect.height / 2) / window.innerHeight;
        }

        confetti({
            particleCount: 50,
            // angle: 20,
            spread: 55,
            origin: {
                x,
                y,
            },
        });
    };
}
