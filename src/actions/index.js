export const ADD_CHARACTOR = 'ADD_CHARACTOR';

export function addCharactorById(id){
    const action ={
        type: ADD_CHARACTOR, 
        id
    }

    return action;
}