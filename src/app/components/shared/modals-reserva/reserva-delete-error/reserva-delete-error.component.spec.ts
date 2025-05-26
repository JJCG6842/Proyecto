import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaDeleteErrorComponent } from './reserva-delete-error.component';

describe('ReservaDeleteErrorComponent', () => {
  let component: ReservaDeleteErrorComponent;
  let fixture: ComponentFixture<ReservaDeleteErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaDeleteErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaDeleteErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
