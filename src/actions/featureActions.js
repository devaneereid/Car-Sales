export const addFeature = e => {
    return {
        type: 'ADD_FEATURE',
        payload: e
    };
};

export const removeFeature = event => {
    return {
        type: 'REMOVE_FEATURE',
        payload: event
    };
};