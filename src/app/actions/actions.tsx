export const ACTION_TYPE: {
    TODO: {
        GET: string;
        CREATE: string,
        UPDATE: string,
        DELETE: string,
        CURRENT: string
    },
} = {
    TODO: {
        GET: "FETCH_TODOS",
        CREATE: "CREATE_TODO",
        UPDATE: "UPDATE_TODO",
        DELETE: "DELETE_TODO",
        CURRENT: "SET_CURRENT_TODO"
    },
};
