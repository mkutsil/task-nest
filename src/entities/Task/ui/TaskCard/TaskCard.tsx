import { Card, Text, Badge, Group, Box, Divider, Avatar, useMantineTheme } from '@mantine/core';
import { Task } from '../../model/types/task';
import { CalendarDays } from 'lucide-react';
import './TaskCard.scss';
import { getTaskStatusColor } from '@/shared/config/taskStatusColors';
// TODO: fix ineClamp issue

interface TaskCardProps extends Task {
    style?: React.CSSProperties;
}

export const TaskCard = (props: TaskCardProps) => {
    const { id, title, subtitle, description, status, createdAt, updatedAt, style } = props;
    const theme = useMantineTheme();

    const taskStatusColor = getTaskStatusColor(theme)[status];

    return (
        <Card
            style={{ ...style, width: 300, borderColor: taskStatusColor, borderWidth: 1 }}
            className="task-card"
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            key={id}
        >
            <Card.Section>
                <Text>{title}</Text>
            </Card.Section>

            <Group wrap="nowrap" justify="space-between" mt="md" mb="xs">
                <Group gap="xs">
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
                <Text fw={500}>{subtitle}</Text>
                <Badge color={taskStatusColor}>{status}</Badge>
            </Group>

            <Text
                lineClamp={3}
                size="sm"
                style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                }}
            >
                {description}
            </Text>

            <Divider my="md" />

            <Group justify="space-between">
                <Box w={24} h={24}>
                    {/* <CalendarDays width={24} height={24} /> */}
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
