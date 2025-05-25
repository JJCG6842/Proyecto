import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaCreateErrorComponent } from './reserva-create-error.component';

describe('ReservaCreateErrorComponent', () => {
  let component: ReservaCreateErrorComponent;
  let fixture: ComponentFixture<ReservaCreateErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaCreateErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaCreateErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
