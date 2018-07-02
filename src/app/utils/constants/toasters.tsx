export const TOASTER: {
  API: {
    ERROR: {
      GET: string;
      POST: string;
      PUT: string;
      DELETE: string;
    },
    SUCCESS: {
      CREATED: string;
      UPDATED: string;
      DELETED: string;
    }
  };
} = {
  API: {
    ERROR: {
      GET: "Failed to retrive todos",
      POST: "Faild to create a todo",
      PUT: "Faild to update a todo",
      DELETE: "Failed to delete todo"
    },
    SUCCESS: {
        CREATED: "New Todo was Created",
        UPDATED: "Todo was Updated",
        DELETED: "Todo was Deleted"
      }
  }
};
