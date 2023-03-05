function createTaskPlanner() {
  // Tu código aquí 👈
  let arrayTareas = [];

  function addTask(task) {
    task.completed = false;
    return arrayTareas.push(task)
  };

  function removeTask(value) {
    let found = arrayTareas.find(element => element.id === value)
    let index = arrayTareas.indexOf(found)
    return arrayTareas.splice(index, 1);
  };

  function getPendingTasks() {
    let found = arrayTareas.filter(element => element.completed === false);
    return found;
  };

  function getCompletedTasks() {
    let found = arrayTareas.filter(element => element.completed === true);
    return found;
  };

  function markTaskAsCompleted(value) {
    let found = arrayTareas.find(element => element.id === value || element.name === value);
    return found.completed = true
  };

  function getSortedTasksByPriority() {
    let listaOrdenada = [...arrayTareas].sort((x, y) => x.priority - y.priority);
    return listaOrdenada;
  };

  function filterTasksByTag(tag) {

    let found = arrayTareas.filter(element => element.tags.includes(tag));

    return found;
  };

  function updateTask(taskId, updates) {
    let found = arrayTareas.find(element => element.id === taskId);
    let index = arrayTareas.indexOf(found)
    // return arrayTareas.splice(index, 1, updates);
    arrayTareas[index] = {
      ...arrayTareas[index],
      ...updates
    }
  }

  function getTasks() {
    return arrayTareas;
  };


  return {
    addTask,
    getTasks,
    removeTask,
    getPendingTasks,
    getCompletedTasks,
    markTaskAsCompleted,
    getSortedTasksByPriority,
    filterTasksByTag,
    updateTask
  }

};

const planner = createTaskPlanner();

planner.addTask({
  id: 1,
  name: "Comprar leche",
  priority: 1,
  tags: ["shopping", "home"]
});

planner.addTask({
  id: 2,
  name: "Llamar a Juan",
  priority: 3,
  tags: ["personal"]
});

planner.addTask({
  id: 4,
  name: "Llamar a Guido",
  priority: 2,
  tags: ["personal"]
});

planner.updateTask(1, {
  id: 1,
  name: "Comprar carne",
  priority: 1,
  tags: ["shopping", "home"]
})

planner.getSortedTasksByPriority()

console.log(planner.getTasks())