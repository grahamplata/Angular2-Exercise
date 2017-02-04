import { Component } from '@angular/core';

import { RegistraionViewModel } from './registrationViewModel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registraionViewModel: RegistraionViewModel;

  constructor() {
    this.registraionViewModel = new RegistraionViewModel;
  }

  addOrRemoveInjury(value: string) {
    if (this.confirmInjuryNotAlreadyChosen(value)) {
      this.registraionViewModel.injuries.push(value);
    }
    else {
      let index = this.registraionViewModel.injuries.indexOf(value);
      this.registraionViewModel.injuries.splice(index);
    }
  }

  private confirmInjuryNotAlreadyChosen(value: string): boolean {
    return this.registraionViewModel.injuries.find(inj => inj.toLowerCase() === value.toLowerCase()) == null;
  }
}
