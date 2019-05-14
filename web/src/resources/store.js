import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineSectionReducers from 'combine-section-reducers';

import user from './user/user.reducer';
import playlist from './playlist/playlist.reducer';
import currentTrack from './currentTrack/currentTrack.reducer';
import track from './track/track.reducer';

const reducer = combineSectionReducers({
  user,
  playlist,
  currentTrack,
  track,
});

export default createStore(
  reducer,
  compose(
    applyMiddleware(thunkMiddleware),
  ),
);
