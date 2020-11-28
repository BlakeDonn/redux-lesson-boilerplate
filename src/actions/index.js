export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});
export const completeTask = (id, todo) =>({
  type: 'COMPLETE_TASK',
  id,
  todo
})
