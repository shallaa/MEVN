import { FETCH_TODO, ADD_TODO, REMOVE_TODO } from '../type';

export default {
    [FETCH_TODO](state, todos){
        state.todoList = todos;
    },

    [ADD_TODO](state, { text, _id }){
        state.todoList.push({
            _id,
            text,
            complete : false
        })
    },

    [REMOVE_TODO](state, id){
        const index = state.todoList.findIndex(item => item._id === id);

        state.todoList.splice(index, 1);
    }
}
