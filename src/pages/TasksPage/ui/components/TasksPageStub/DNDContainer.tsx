import { DndContext } from '@dnd-kit/core';
import { Draggable } from './Draggable';
import { Droppable } from './Droppable';

// TODO: fix any

export const DNDContainer = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleDragEnd(event: any) {
        if (event.over) {
            alert(`Dropped on "${event.over.id}"!`);
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div
                style={{
                    display: 'flex',
                    gap: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <Draggable />
                <Droppable />
            </div>
        </DndContext>
    );
};
