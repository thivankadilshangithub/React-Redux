import { combineReducers } from "redux";
import AllpostReducer from './reducerAllpost';
import SelectedPostReducer from './reducerselectedPost';
 

const rootReducer = combineReducers({
        allPosts:AllpostReducer,
        selectedPost:SelectedPostReducer
});

export default rootReducer;