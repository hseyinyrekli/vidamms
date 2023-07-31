import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RequestService } from "src/app/core/services/request.service";
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

  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService
  ) {}
  ngOnInit(): void {
    this.demoForm = this.formBuilder.group({
      name: [
        "",
        [Validators.required, Validators.pattern(/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/)],
      ],

      assignedUserId: ["64c2deb0d636b1fc8"],

      emailAddress: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      phoneNumber: ["", [Validators.required, Validators.pattern(/^\d{10}$/)]],
      company: ["", Validators.required],
      companySector: ["", Validators.required],
    });
  }

  changeActive(name: any) {
    this.activeCategories = name;
  }
  validateForm() {
    if (this.demoForm.valid) {
      this.showMessageKey = "DEMO.SUCCESS_MESSAGE";
      this.showMessage = true;
      this.demoForm.reset();
      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
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

  sendDemoRequest() {
    if (this.demoForm.valid) {
      this.demoForm.markAsUntouched();
      this.demoForm.markAsPristine();

      this.requestService
        .sendDemoRequest(this.demoForm.value)
        .subscribe((data: any) => {
          this.demoForm.reset();

          this.showMessageKey = "DEMO.SUCCESS_MESSAGE";
          this.showMessage = true;

          setTimeout(() => {
            this.showMessage = false;
          }, 10000);
        });
    } else {
      this.demoForm.markAllAsTouched();
    }
  }
}
