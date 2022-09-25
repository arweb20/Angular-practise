import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit, OnDestroy {
  employeeID: number = 0;
  urlSubscribe!: Subscription;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //Using snapshot
    //this.employeeID = this.activatedRoute.snapshot.params['employeeid'];
    //Using observable
    this.urlSubscribe = this.activatedRoute.params.subscribe((res) => {
      this.employeeID = res['employeeid'];
    });
  }
  generateEmployeeID() {
    this.router.navigate(['employee/1']);
  }
  nextID() {
    if (isNaN(this.employeeID)) {
      this.employeeID = 0;
    }
    let urlId = +this.employeeID + 1;
    this.router.navigate(['employee', urlId]);
  }
  ngOnDestroy(): void {
    this.urlSubscribe.unsubscribe();
  }
}
