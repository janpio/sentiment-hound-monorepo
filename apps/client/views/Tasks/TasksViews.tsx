import { Card, Box, Text } from "@chakra-ui/react";
import { EmptyData } from "@client/shared/components/molecules/EmptyData";
import { useAppSelector } from "@client/shared/lib/store";
import { useGetTasksQuery } from "@client/shared/slices/tasks/tasks.api";
const TaskViews = () => {
  const x = useAppSelector((state) => state.tasks);
  const { data: tasks, isLoading } = useGetTasksQuery({});

  console.log("X: ", tasks);
  const data = [];
  return (
    <Box>
      <Card p={4}>
        <Text fontSize="2xl">Tasks Overview</Text>
        <Text fontSize="sm">
          Check the progress of your current running tasks
        </Text>
      </Card>
      <Card mt={5}>
        {data.length === 0 ? (
          <Box height={500} display="flex" justifyContent="center">
            <EmptyData
              title="No Running Tasks"
              subtitle="Analyze some content, to start a task"
            />
          </Box>
        ) : (
          <div>sdsd</div>
        )}
      </Card>
    </Box>
  );
};

export default TaskViews;
