import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CompnameAction } from './compname.actions';

export class CompnameStateModel {
  public componentName: string = '';
}

const defaults = {
  componentName: ''
};

@State<CompnameStateModel>({
  name: 'compname',
  defaults
})
@Injectable()
export class CompnameState {

  @Selector()
  public static getStateDesault({componentName}:CompnameStateModel):string{
    return componentName;
  }

  @Action(CompnameAction)
  add({ setState }: StateContext<CompnameStateModel>, { payload }: CompnameAction) {
    setState({ componentName: payload });
  }

}
