import { Card, Text, Badge, Group, Box, Divider, Avatar } from '@mantine/core';
import { Task } from '../model/types/task';
import { CalendarDays } from 'lucide-react';

export const TaskCard = (props: Task) => {
    const { id, title, description, status, createdAt, updatedAt } = props;

    return (
        <Card style={{ maxWidth: 300 }} shadow="sm" padding="lg" radius="md" withBorder key={id}>
            <Card.Section>
                <Text>{title}</Text>
            </Card.Section>

            <Group wrap="nowrap" justify="space-between" mt="md" mb="xs">
                <Group grow wrap="nowrap">
                    <Box w={24} h={24}>
                        <CalendarDays />
                    </Box>
                    <Text c="dimmed" size="xs" lineClamp={1}>
                        {createdAt}
                    </Text>
                </Group>

                <Group grow wrap="nowrap">
                    <Box w={24} h={24}>
                        <CalendarDays />
                    </Box>

                    <Text c="dimmed" size="xs" lineClamp={1}>
                        {updatedAt}
                    </Text>
                </Group>
            </Group>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{description}</Text>
                <Badge color="pink">{status}</Badge>
            </Group>

            <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>

            <Divider my="md" />

            <Group justify="space-between">
                <Box w={24} h={24}>
                    <CalendarDays width={24} height={24} />
                </Box>

                <Avatar color="cyan" radius="xl" size={36}>
                    MK
                </Avatar>
            </Group>

            {/* <Button color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
            </Button> */}
        </Card>
    );
};
