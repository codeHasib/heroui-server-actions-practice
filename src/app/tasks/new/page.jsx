import NewTask from "@/components/NewTask";
import { tasks } from "@/lib/task";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const createTask = async (formData) => {
  "use server";
  const newTask = Object.fromEntries(formData.entries());

  tasks.push(newTask);

  revalidatePath("/tasks");

  redirect("/tasks");
};

const NewTaskPage = () => {
  return (
    <div>
      <NewTask createTask={createTask}></NewTask>
    </div>
  );
};

export default NewTaskPage;
