import { SimpleGrid } from '@mantine/core';
import { Column } from '../../../entities/Column';

export const KanbanBoard = () => {
    const column = [
        {
            title: 'ToDo',
            tasks: [],
        },
        {
            title: 'In Progress',
            tasks: [],
        },
        {
            title: 'Done',
            tasks: [],
        },
    ];
    return (
        <>
            <SimpleGrid cols={{ sm: 1, lg: 3 }} w={'100%'} spacing="xl">
                {column.map(col => (
                    <Column title={col.title} key={col.title} />
                ))}
            </SimpleGrid>
        </>
    );
};
