import { Card } from "@heroui/react";

const Task = ({ task }) => {
  const { title, priority, author, status } = task;
  1;
  return (
    <div>
      <Card variant="default">
        <Card.Header>
          <Card.Title className="text-3xl mb-5">{title}</Card.Title>
          {priority === "high" ? (
            <div className="bg-green-300 py-1 px-4 rounded-2xl font-bold text-black max-w-fit">
              {priority}
            </div>
          ) : priority === "normal" ? (
            <div className="bg-yellow-300 p-4 rounded-2xl font-bold text-black max-w-fit py-1 px-4 ">
              {priority}
            </div>
          ) : (
            <div className="bg-red-300 p-4 rounded-2xl font-bold text-white py-1 px-4 max-w-fit">
              {priority}
            </div>
          )}
        </Card.Header>
      </Card>
    </div>
  );
};

export default Task;
