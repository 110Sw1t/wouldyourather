
const logger = (store) => (next) => (action) => {
   console.group(action.type)
      const stateBefore = store.getState();
      console.log(stateBefore);
      const result = next(action);
      const stateAfter = store.getState();
      console.log(store.getState());
      console.log("State has changed? ", stateBefore === stateAfter ? "No" : "Yes")
   console.groupEnd();
   return result;
}

export default logger;