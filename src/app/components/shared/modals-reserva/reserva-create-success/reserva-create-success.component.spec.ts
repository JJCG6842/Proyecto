import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaCreateSuccessComponent } from './reserva-create-success.component';

describe('ReservaCreateSuccessComponent', () => {
  let component: ReservaCreateSuccessComponent;
  let fixture: ComponentFixture<ReservaCreateSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaCreateSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaCreateSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
