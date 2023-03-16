import Button from "./Button";

const Task = ({ tasks, deleteTask, checkTask, completedTasks }) => {
  const { taskName } = tasks;

  const completedTrueOrFalse = completedTasks.some((t) => t.id === tasks.id);

  return (
    <div
      className={`flex justify-between  border-l-8 bg-[#a2c7e9] ${
        !completedTrueOrFalse ? "border-gray-500 " : "border-green-500 "
      } rounded-2xl mx-2 my-4`}
    >
      <p className="bg-[#a2c7e9] w-1/2 p-3 mx-4 my-auto">{taskName}</p>
      <div className="w-1/4 h-full text-center flex flex-row">
        <div className="bg-green-500 w-full h-full md:duration-100 md:hover:rounded-2xl md:hover:scale-105">
          <Button
            image={"../public/check.png"}
            word={"✔️"}
            buttonsFunction={() => {
              checkTask(tasks);
            }}
          />
        </div>
        <div className="bg-red-500 w-full h-full rounded-r-xl md:duration-100 md:hover:rounded-2xl md:hover:scale-105">
          <Button
            word={"❌"}
            buttonsFunction={() => {
              deleteTask(tasks.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="flex bg-slate-200 border-b-4 border-gray-500 rounded-xl m-5 p-3">
<div className="flex flex-col justify-evenly w-2/3">
  <p className="bg-white w-full p-3 my-2 border-b-4 border-gray-500 rounded-xl">
    {taskName}
  </p>
  <p className="bg-white w-full p-3 my-2 border-b-4 border-gray-500 rounded-xl">
    {taskDescription}
  </p>
</div>

<div className="flex flex-col justify-evenly w-1/3">
  <div className="mx-auto w-2/3 p-3 mt-1 bg-white rounded-xl border-b-4 border-gray-500">
    <img src={Icons[category]} />
  </div>
  <div className="flex justify-evenly h-1/2">
    <Button
      image={"../public/check.png"}
      alt={"Check button"}
      buttonsFunction={() => {
        checkTask(tasks);
      }}
    />
    <Button
      image={"../public/remove.png"}
      alt={"Remove button"}
      buttonsFunction={() => {
        deleteTask(tasks.id);
      }}
    />
  </div>
</div>
</div> */
}

export default Task;
