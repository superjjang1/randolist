export default (state = {}, action) => {
    if (action.type === 'tokenLogin'){
        return action.payload.data
    } if (action.type ==='login'){
        localStorage['access_token'] = action.payload.data.token;
        return action.payload.data
    }else if (action.type ==='logout'){
        localStorage.removeItem('access_token');
        return {};
    }
    return state;
}