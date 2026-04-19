import NewTask from "@/components/NewTask";

const createTask = async (formData) => {
  "use server";
  const newTask = Object.fromEntries(formData.entries());

};

const NewTaskPage = () => {
  return (
    <div>
      <NewTask createTask={createTask}></NewTask>
    </div>
  );
};

export default NewTaskPage;
