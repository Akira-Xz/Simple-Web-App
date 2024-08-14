export const saveStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state-artesma', serializedState);
    } catch (error) {
        console.log(error);
    }
};