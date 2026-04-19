"use client";
import { redirect } from "next/navigation";
const NewTask = ({ createTask }) => {
  return (
    <div>
      <form
        action={createTask}
        className="flex flex-col justify-center items-center gap-4"
      >
        {/* Form fields go here */}
        <input
          type="text"
          name="title"
          placeholder="Add title"
          className="bg-white text-black py-3 px-4"
        />
        <input name="priority" type="text" placeholder="Add priority" />
        <input name="status" type="text" placeholder="Add Status" />
        <input onClick={() => redirect("/tasks")} type="submit" />
        <button onClick={() => redirect("/tasks")} slot="cancel">
          {" "}
          Cancel{" "}
        </button>
      </form>
    </div>
  );
};

export default NewTask;
