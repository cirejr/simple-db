import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashedPlusBox } from './dashed-plus-box';

describe('DashedPlusBox', () => {
  let component: DashedPlusBox;
  let fixture: ComponentFixture<DashedPlusBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashedPlusBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashedPlusBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
