
const ADD = 'ADD';
const DELETE = 'DELETE';
const DONE = 'DONE';

const initialState = {
    todos: []
};

export default ( state = initialState, action) => {
    switch (action.type) {
        case ADD : {
            return {
                ...state,
                todos: [...state.todos, {
                    title: action.title,
                    isDelete: false,
                    isImportant: false,
                    isDone: false,
                    id: Math.floor(Math.random() * 100000)
                }]
            }
        }
        case DELETE : {
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.id)
            }
        }
        case DONE : {
            return {
                ...state,
                todos: state.todos.map((item) => {
                if (item.id === action.id) {
                    return{...item, isDone: !item.isDone}
                }
            return item;
            })
            }
        }
        default: return state
    }
}

export const addTask = (title) => {
    return (dispatch) => {
        return dispatch({type: ADD, title})
    }
};

export const deleteTask = (id) => {
    return (dispatch) => {
        return dispatch({type: DELETE, id})
    }
};

export const done = (id) => {
    return (dispatch) => {
        return dispatch({type: DONE, id})
    }
};
