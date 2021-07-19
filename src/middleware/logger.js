
const logger = (store) => (next) => (action) => {
   console.group(action.type)
      console.log(store.getState());
      const result = next(action);
      console.log(store.getState());
   console.groupEnd();
   return result;
}

export default logger;