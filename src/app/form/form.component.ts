import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private readonly formbuilder: FormBuilder
  ) { }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  ngOnInit(): void {
    this.validateForm = this.formbuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
      steps: [[], [Validators.required]]
    });
  }
}
