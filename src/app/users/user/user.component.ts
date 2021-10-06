import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user!: { id: number; name: string };
  paramsSubs!: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('This is first time loading...');
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.paramsSubs = this.route.params.subscribe((params: Params) => {
      console.log('The observable was fired...');
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }
  ngOnDestroy() {
    this.paramsSubs.unsubscribe();
  }
}
