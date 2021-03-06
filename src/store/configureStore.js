import { createStore, combineReducers, compose, applyMiddleware } from  'redux';
import { postsReducer } from './reducers/postsReducer';
import { createForms } from 'react-redux-form';
import { fetchInfoFromApiReducer } from './reducers/fetchInfoFromApiReducer';
import thunk from 'redux-thunk';


const initialFormState = {
  title: "",
  category: "",
  body: ""
}

const AllEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const allReducers = combineReducers({
  updatedPosts : postsReducer,
  fetchedInfoFromApi : fetchInfoFromApiReducer,
  ...createForms({
    newPostForm : initialFormState
  })  
});

export const ConfigureStore = () => {
  const store = createStore(allReducers, AllEnhancers);
  return store;
};
