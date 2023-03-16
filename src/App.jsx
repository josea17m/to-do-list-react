import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import Header from "./components/Header";
import Message from "./components/Message";

function App() {
  const [task, setTask] = useState(
    localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  );

  const [completedTasks, setCompletedTasks] = useState(
    localStorage.getItem("completedTasks")
      ? JSON.parse(localStorage.getItem("completedTasks"))
      : []
  );

  const [unCompletedTasks, setUncompletedTasks] = useState(
    localStorage.getItem("unCompletedTasks")
      ? JSON.parse(localStorage.getItem("unCompletedTasks"))
      : []
  );

  const [error, setError] = useState(false);
  const [reset, setReset] = useState(false);

  const generarId = () => {
    const id = Date.now().toString(36);
    return id;
  };

  //Guardar tarea y agregarla a tareas pendientes
  const saveTask = (newtTask) => {
    newtTask.id = generarId();
    newtTask.completed = false;
    setTask([...task, newtTask]);
    setUncompletedTasks([...unCompletedTasks, newtTask]);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem("unCompletedTasks", JSON.stringify(unCompletedTasks));
  }, [unCompletedTasks]);

  //Completar las tareas y evitar que se agreguen tareas previamente completadas
  const checkTask = (task) => {
    if (!completedTasks.includes("")) {
      //Inicio If completedTasks no esta vacio
      if (!completedTasks.some((t) => task.id == t.id)) {
        setCompletedTasks([...completedTasks, task]);
        deleteUncompletedTask(task.id);
        return;
      } else return;
      //Fin

      //Inicio if completedTasks esta vacio
    } else {
      setCompletedTasks([...completedTasks, task]);
      deleteUncompletedTask(task.id);
      return;
    }
  };

  //Eliminar tarea del state de tareas completas
  const deleteCompletedTask = (id) => {
    const deleteTask = completedTasks.filter((task) => task.id !== id);
    setCompletedTasks(deleteTask);
  };

  //Eliminar tarea del state de tareas pendientes
  const deleteUncompletedTask = (id) => {
    const deleteTask = unCompletedTasks.filter((task) => task.id !== id);
    setUncompletedTasks(deleteTask);
  };

  const deleteTask = (id) => {
    //Eliminar tarea
    const updatedTask = task.filter((task) => task.id !== id);
    setTask(updatedTask);

    //Eliminar tarea incompleta y verifica si hay tareas completas respectivamente
    deleteUncompletedTask(id);
    completedTasks && deleteCompletedTask(id);
  };

  const DeleteAll = () => {
    setReset(true);

    setTimeout(() => {
      setReset(false);
    }, 3000);
    setTask("");
    setCompletedTasks("");
    setUncompletedTasks("");
  };

  return (
    <div className="h-screen w-full mx-auto md:px-10 md:py-2">
      <div className="md:bg-white md:rounded-xl h-full md:shadow-3xl">
        <Header
          unCompletedTasks={unCompletedTasks}
          completedTasks={completedTasks}
          DeleteAll={DeleteAll}
        />
        {/* <Login />
        <Logout />
        <Profile /> */}
        <main className="p-2 flex flex-col">
          {error && (
            <Message
              message={"Escribe un nombre"}
              border={"border-red-600"}
              text={"text-red-600"}
            />
          )}
          {reset && (
            <Message
              message={"Todo limpio"}
              border={"border-green-500"}
              text={"text-green-500"}
            />
          )}
          <AddTask
            task={task}
            saveTask={saveTask}
            error={error}
            setError={setError}
          />
          <div
            className={`w-full mt-10 ${
              task && task.length ? " grid sm:grid-cols-1 md:grid-cols-2" : ""
            }`}
          >
            {task && task.length ? (
              task.map((tasks) => (
                <Task
                  checkTask={checkTask}
                  deleteTask={deleteTask}
                  completedTasks={completedTasks}
                  key={tasks.id}
                  tasks={tasks}
                ></Task>
              ))
            ) : (
              <h2 className="mx-auto text-center text-xl font-bold">
                Ingresa una tarea
              </h2>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
