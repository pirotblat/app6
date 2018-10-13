import { Team } from './form-dynamic/team';
import { InputField } from './form-dynamic/input-field';
import { Injectable } from '@angular/core';
import { FormField } from './form-dynamic/form-field';
import { InputType } from 'src/app/form-dynamic/input-type';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormDynamicService {

  constructor() { }

  getFieldForForm(): FormField[] {
    let teamNameField = new InputField('teamName', 'Team name', InputType.Text, 'Enter team name');
    let numberOfWinsField = new InputField('numberOfWins', 'Wins', InputType.Number, 'Enter number of wins');
    let numberOfLossesField = new InputField('numberOfLosses', 'Losses', InputType.Number, 'Enter number of losses');
    return [teamNameField, numberOfWinsField, numberOfLossesField];
  }
  getTeam() {
    const team: Team = {teamName: 'macabi', numberOfWins: 10, numberOfLosses: 3};
    return team;
  }
}
