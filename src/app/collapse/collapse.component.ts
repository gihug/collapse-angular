import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Collapse {
  collapseId: string;
  checked: boolean;
}

let uid: number = 1;

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
})
export class CollapseComponent implements OnInit {
  @Input() title: string = '';
  @Input() checked: boolean = true;
  @Output() selectedChange: EventEmitter<Collapse> =
    new EventEmitter<Collapse>();
  private _id: number = 0;

  constructor() {}

  ngOnInit(): void {
    this._id = ++uid;
  }

  // Hàm lấy dữ liệu, nếu k có hàm này thì selectedChange sẽ k có thuộc tính collapseId
  get collapseId() {
    return 'collapse-' + this._id;
  }

  toogleChecked(): void {
    this.checked = !this.checked;
    this.selectedChange.emit({
      collapseId: this.collapseId,
      checked: this.checked,
    });
  }
}
