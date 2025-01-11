import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../model/user';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  userForm: FormGroup;
  stepNumber: number;
  steps = [
    { title: 'Dados de acesso', isPrimary: true },
    { title: 'Dados pessoais', isPrimary: false },
  ];

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.stepNumber = 0;
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      sector: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: [''],
      ramal: [null, Validators.required],
      position: [''],
      birthDate: [null, Validators.required],
    });
  }

  increaseStep() {
    this.stepNumber++;
    this.steps.forEach((step, index) => {
      step.isPrimary = index <= this.stepNumber;
    });
  }

  getClassNames(isPrimary: boolean) {
    return isPrimary ? 'step step-primary' : 'step';
  }

  createUser() {
    if (this.userForm.valid) {
      const formValues = this.userForm.value;

      const newUser = new User(
        formValues.username,
        formValues.password,
        formValues.sector,
        formValues.name,
        formValues.email,
        formValues.gender,
        formValues.ramal,
        formValues.position,
        new Date(),
        new Date(),
        formValues.birthDate
      );
      console.log(newUser);
    }
  }
}
