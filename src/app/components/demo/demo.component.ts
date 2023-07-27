import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"],
})
export class DemoComponent implements OnInit {
  demoForm!: any;
  activeCategories = "demo1";
  lang: any;
  showMessageKey: string = "";
  showMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.demoForm = this.formBuilder.group({
      name: [
        "",
        [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)],
      ],
      surname: [
        "",
        [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)],
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      phone: ["", [Validators.required, Validators.pattern(/^\d{10}$/)]],
      company: ["", Validators.required],
      companyArea: ["", Validators.required],
    });
  }

  changeActive(name: any) {
    this.activeCategories = name;
  }
  validateForm() {
    if (this.demoForm.valid) {
      this.showMessageKey = "DEMO.SUCCESS_MESSAGE";
      this.showMessage = true;

      setTimeout(() => {
        this.showMessage = false;
      }, 3000);

      this.demoForm.reset();
    } else {
      this.demoForm.markAllAsTouched();
    }
  }

  markAllFieldsAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markAllFieldsAsTouched(control);
      }
    });
  }
}
