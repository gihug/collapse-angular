import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseGroupComponent } from './collapse-group.component';

describe('CollapseGroupComponent', () => {
  let component: CollapseGroupComponent;
  let fixture: ComponentFixture<CollapseGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
