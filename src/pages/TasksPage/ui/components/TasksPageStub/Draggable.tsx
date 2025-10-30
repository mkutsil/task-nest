import { useDraggable } from '@dnd-kit/core';

export const Draggable = () => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable',
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        width: 100,
        height: 100,
        background: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        cursor: 'grab',
    };

    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
            Drag me
        </div>
    );
};
