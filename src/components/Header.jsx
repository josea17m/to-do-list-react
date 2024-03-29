import trashIcon from "../trash.png"

const Header = ({ DeleteAll, completedTasks, unCompletedTasks }) => {
  return (
    <header className="flex h-20 p-4 justify-around mb-10 mx-auto text-2xl">
      {unCompletedTasks.length ? (
        <h2 className="mx-0 my-auto">
          Hay <span className="font-bold text-[#48a5fd]">{unCompletedTasks.length}</span>
          {unCompletedTasks.length > 1 ? " tareas pendientes" : " tarea pendiente"}
        </h2>
      ) : (
        <h2 className="mx-0 my-auto"> No hay tareas pendientes</h2>
      )}
      {completedTasks.length ? (
        <h2 className="mx-0 my-auto">
          <span className="font-bold text-[#48a5fd]">
            {completedTasks.length}
          </span>{" "}
          {completedTasks.length > 1 ? " tareas completas" : " tarea completa"}
        </h2>
      ) : (
        ""
      )}
      <button className="m-3 rounded-3xl h-full text-black md:duration-200 md:hover:rotate-180 outline-none text-3xl" onClick={DeleteAll}><img src={trashIcon} alt="trash-icon" className="h-full w-full"/></button>
    </header>
  );
};

export default Header;
