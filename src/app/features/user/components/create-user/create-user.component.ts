import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  imports: [CommonModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  stepNumber: number;
  steps = [
    { title: 'Dados de acesso', isPrimary: true },
    { title: 'Dados pessoais', isPrimary: false },
  ];

  constructor() {
    this.stepNumber = 0;
  }

  increaseStep() {
    this.stepNumber++;
    this.steps.forEach((step, index) => {
      step.isPrimary = (index <= this.stepNumber);
    });
  }

  getClassNames(isPrimary: boolean) {
    return isPrimary ? 'step step-primary' : 'step';
  }

}
