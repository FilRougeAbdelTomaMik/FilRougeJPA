import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherEmployeComponent } from './rechercher-employe.component';

describe('RechercherEmployeComponent', () => {
  let component: RechercherEmployeComponent;
  let fixture: ComponentFixture<RechercherEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercherEmployeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
