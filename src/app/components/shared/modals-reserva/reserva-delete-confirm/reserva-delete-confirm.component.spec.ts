import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaDeleteConfirmComponent } from './reserva-delete-confirm.component';

describe('ReservaDeleteConfirmComponent', () => {
  let component: ReservaDeleteConfirmComponent;
  let fixture: ComponentFixture<ReservaDeleteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaDeleteConfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
