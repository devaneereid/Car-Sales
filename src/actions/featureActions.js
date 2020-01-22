export const addFeature = feature => {
    return {
        type: 'ADD_FEATURE',
        payload: feature
    };
};

export const removeNewFeature = remove => {
    return {
        type: 'REMOVE_FEATURE',
        payload: remove
    };
};