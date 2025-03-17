export const ADD_ITEM = '[Item] Add';

export class AddItem {
  static readonly type = ADD_ITEM;
  constructor(public payload: string) {}
}
