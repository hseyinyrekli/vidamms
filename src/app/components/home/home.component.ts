import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isShow: boolean = false;
  calcForm: any;
  submitted = false;
  mounthlyCost: any;
  mounthlyCostMoney: any;
  mounthlyLabor: any;
  electrictCostMoney: any;
  total: any;
  lang!: any;
  url!: any;
  blogs!: any;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    let video = document.getElementById("home-video") as HTMLVideoElement;
    video.muted = true;
    video.play();
    this.getBlogs();
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
    this.lang = this.translate.currentLang;
    this.getBlogs();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
      this.getBlogs();
    });
  }
  getBlogs() {
    let url = "";
    if (this.lang == "tr") {
      url = "assets/json/blogs.json";
    } else {
      url = "assets/json/blogs-en.json";
    }
    this.http.get<any>(url).subscribe((data) => {
      this.blogs = data.slice(0, 4);
    });
  }

  goToDetailPage(name: any) {
    this.router.navigate([`blog/${name}`]);
  }

  get f() {
    return this.calcForm.controls;
  }

  calculate() {
    console.log(this.calcForm.invalid);
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
        (obj.totalMoney / obj.dailyHour) *
        obj.workingDayNumber *
        (obj.breakTime + obj.downTime).toFixed(2);
      this.mounthlyLabor = (
        (obj.breakTime + obj.downTime) *
        ((obj.employeeCost * obj.employeePiece) / 180) *
        obj.machineNumber
      ).toFixed(2);
      this.electrictCostMoney = (
        (obj.electricCost / 180) *
        (obj.downTime + obj.breakTime) *
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
