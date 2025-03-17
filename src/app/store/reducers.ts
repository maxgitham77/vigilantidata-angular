//import { State, Action, StateContext } from '@ngxs/store';
import { AddItem } from './actions';
//import { AppState, initialState } from './state';

/*@State<AppState>({
  name: 'app',
  defaults: initialState
})*/
export class AppState {
  /*@Action(AddItem)
  addItem(ctx: StateContext<AppState>, action: AddItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: [...state.items, action.payload]
    });
  }*/
}
