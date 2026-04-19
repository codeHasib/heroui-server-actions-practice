import Task from "@/components/Task";
import Link from "next/link";

const tasks = [
  {
    title: "Build dashboard UI",
    priority: "high",
    author: "Hasib",
    status: "In Progress",
  },
  {
    title: "Fix login bug",
    priority: "normal",
    author: "Rahim",
    status: "Pending",
  },
  {
    title: "Write API docs",
    priority: "low",
    author: "Karim",
    status: "Completed",
  },
  {
    title: "Implement auth system",
    priority: "high",
    author: "Ayesha",
    status: "In Progress",
  },
  {
    title: "Optimize database queries",
    priority: "normal",
    author: "Tanvir",
    status: "Pending",
  },
];

const TaskPage = () => {
  return (
    <div className="p-8">
      <h2 className="text-4xl mb-5 text-center">This is task page</h2>

      <div className="flex justify-center items-center p-4">
        <Link
          className="py-3 px-6 bg-purple-500 rounded-4xl font-bold"
          href={"/tasks/new"}
        >
          {" "}
          Add new task
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tasks.map((item, ind) => (
          <Task key={ind} task={item}></Task>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
