import { useState } from "react";
const AddTask = ({ saveTask, setError }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([taskName].includes("")) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    saveTask({ taskName });
    setTaskName("");
  };

  return (
    <form
      className="p-4 flex sm:w-full md:w-1/2 rounded-xl bg-[#a2c7e9]"
      onSubmit={handleSubmit}
    >
      <div className="w-2/3 mr-5">
        <input
          className="outline-none w-full p-4 mx-1 rounded-xl"
          id="taskName"
          type="text"
          value={taskName}
          placeholder="Añade un nombre"
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="flex justify-around w-1/3 flex-col">
        <input
          className="bg-[#48a5fd] duration-200 hover:bg-[#2194ff] outline-none cursor-pointer w-full h-full my-1 rounded-xl"
          id="category"
          type="submit"
          value="Añadir tarea"
        />
      </div>
    </form>
  );
};

export default AddTask;
