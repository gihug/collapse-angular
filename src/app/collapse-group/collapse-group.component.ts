import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Collapse, CollapseComponent } from '../collapse/collapse.component';

@Component({
  selector: 'app-collapse-group',
  templateUrl: './collapse-group.component.html',
  styleUrls: ['./collapse-group.component.scss'],
})
export class CollapseGroupComponent
  implements OnInit, AfterContentInit, OnDestroy
{
  @ContentChildren(CollapseComponent) collapses!: QueryList<CollapseComponent>;
  @Input() multiple: boolean = false;
  private _subscription: Subscription[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.collapses?.forEach((collapse) => {
      let subscription = collapse.selectedChange.subscribe((value) => {
        if (this.multiple && value.checked) {
          this.toogleCollapse(value);
        }
      });
      this._subscription.push(subscription);
    });
  }

  toogleCollapse(value: any) {
    this.collapses?.forEach((collapse: any) => {
      if (collapse.collapseId !== value.collapseId) {
        collapse.checked = false;
      }
    });
  }

  ngOnDestroy() {
    this._subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
