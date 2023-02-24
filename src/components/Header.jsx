const Header = ({ DeleteAll, completedTasks, unCompletedTasks }) => {
  return (
    <header className="flex h-20 justify-around mb-10 mx-auto text-2xl">
      {unCompletedTasks.length ? (
        <h2 className="mx-0 my-auto">
          Hay <span className="font-bold text-yellow-500">{unCompletedTasks.length}</span>
          {unCompletedTasks.length > 1 ? " tareas pendientes" : " tarea pendiente"}
        </h2>
      ) : (
        <h2 className="mx-0 my-auto"> No hay tareas pendientes</h2>
      )}
      {completedTasks.length ? (
        <h2 className="mx-0 my-auto">
          <span className="font-bold text-yellow-500">
            {completedTasks.length}
          </span>{" "}
          tareas completadas
        </h2>
      ) : (
        ""
      )}
      <button className="m-3 rounded-3xl text-black md:duration-200 md:hover:rotate-180 outline-none text-4xl" onClick={DeleteAll}>🗑️</button>
    </header>
  );
};

export default Header;
