import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-cost",
  templateUrl: "./cost.component.html",
  styleUrls: ["./cost.component.scss"],
})
export class CostComponent implements OnInit {
  isShow: boolean = false;
  calcForm: any;
  submitted = false;
  mounthlyCost: any;
  mounthlyCostMoney: any;
  mounthlyLabor: any;
  electrictCostMoney: any;
  total: any;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.calcForm = this.formBuilder.group({
      machineNumber: ["", Validators.required],
      dailyHour: ["", Validators.required],
      workingDayNumber: ["", Validators.required],
      hourlyCost: ["", Validators.required],
      totalMoney: ["", Validators.required],
      employeeCost: ["", Validators.required],
      employeePiece: ["", Validators.required],
      breakTime: ["", Validators.required],
      downTime: ["", Validators.required],
      electricCost: ["", Validators.required],
    });
  }
  get f() {
    return this.calcForm.controls;
  }

  calculate() {
    this.submitted = true;
    if (this.calcForm.invalid) {
      this.mounthlyCost = 0;
      this.mounthlyCostMoney = 0;
      this.mounthlyLabor = 0;
      this.total = 0;
    } else {
      this.isShow = true;
      let obj = this.calcForm.value;
      this.mounthlyCost = (
        (obj.breakTime + obj.downTime) *
        (obj.totalMoney / 720) *
        obj.machineNumber
      ).toFixed(2);
      this.mounthlyCostMoney =
        (obj.totalMoney / obj.workingDayNumber) *
        (obj.downTime + obj.breakTime).toFixed(2);

      this.mounthlyLabor = (
        (obj.breakTime + obj.downTime) *
        ((obj.employeeCost * obj.employeePiece) / 180) *
        obj.machineNumber
      ).toFixed(2);
      this.electrictCostMoney = (
        (obj.electricCost / 180) *
        obj.downTime *
        obj.machineNumber
      ).toFixed(2);

      this.total = (
        Number(this.mounthlyCostMoney) +
        Number(this.mounthlyLabor) +
        Number(this.electrictCostMoney)
      ).toFixed(2);
    }
  }
  backCalc() {
    this.isShow = false;
  }
}
