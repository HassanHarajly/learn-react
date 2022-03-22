// API logic: how to update the database when the
// 'increment' API endpoint is called
export const reducer = (state, action) => {
    if (action.type === 'increment') {
        return {count: state.count + action.payload};
    }
};