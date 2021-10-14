import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = this.formBuilder.group({});
  visiblePassword = true;
  submitted = false;
  text='romario1'

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: [
          '',
          Validators.compose([
            Validators.required,
            // this.customValidator.patternValidator(),
          ]),
        ],
      }
    );
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.router.navigate(['panel']);

  }
  get registerFormControl() {
    return this.form.controls;
  }

}
