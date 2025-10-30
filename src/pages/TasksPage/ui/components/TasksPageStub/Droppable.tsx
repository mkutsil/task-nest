import { useDroppable } from '@dnd-kit/core';
export const Droppable = () => {
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    });

    const style = {
        width: 150,
        height: 150,
        border: '2px dashed gray',
        borderRadius: 8,
        background: isOver ? 'lightgreen' : 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div ref={setNodeRef} style={style}>
            Drop here
        </div>
    );
};
