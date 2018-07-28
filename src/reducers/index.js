import jsonData from "../data/document.json";
import { ADD_CHARACTOR } from '../actions';

function jsonDocument(state = jsonData, action){
    switch(action.type)
    {
        case ADD_CHARACTOR:
            let charactors = state.filter(item => item.id !== action.id);
            return charactors;
            
        default:
            return state;
    }
}
export default jsonDocument;