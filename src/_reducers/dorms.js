const initialState = {
    dataDorms: [],
    isLoading: false
}

const dorms = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DORMS':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_DORMS_FULFILLED':
            return {
                ...state,
                dataDorms: action.payload.data.data,
                isLoading: false,
            }
        case 'GET_DORMS_REJECTED':
            return {
                ...state,
                dataDorms: action.payload.message,
                isLoading: false
            }
        default:
            return state;
    }
}

export default dorms;