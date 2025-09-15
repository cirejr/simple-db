import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAction } from './table-action';

describe('TableAction', () => {
  let component: TableAction;
  let fixture: ComponentFixture<TableAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
