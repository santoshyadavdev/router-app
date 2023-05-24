import { ComponentFixture, TestBed } from '@angular/core/testing';

import AchorScrollComponent from './achor-scroll.component';

describe('AchorScrollComponent', () => {
  let component: AchorScrollComponent;
  let fixture: ComponentFixture<AchorScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AchorScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchorScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
