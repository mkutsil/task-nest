import { Card, Text, Badge, Button, Group } from '@mantine/core';
import { Task } from '../model/types/task';

export const TaskCard = (props: Task) => {
    const { id, title, description, status, createdAt, updatedAt } = props;

    return (
        <Card style={{ maxWidth: 300 }} shadow="sm" padding="lg" radius="md" withBorder key={id}>
            <Card.Section>
                <Text>{title}</Text>
            </Card.Section>

            <Group wrap="nowrap" justify="space-between" mt="md" mb="xs">
                <Text c="dimmed" size="xs" lineClamp={1}>
                    {createdAt}
                </Text>
                <Text c="dimmed" size="xs" lineClamp={1}>
                    {updatedAt}
                </Text>
            </Group>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{description}</Text>
                <Badge color="pink">{status}</Badge>
            </Group>

            <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
            </Button>
        </Card>
    );
};
