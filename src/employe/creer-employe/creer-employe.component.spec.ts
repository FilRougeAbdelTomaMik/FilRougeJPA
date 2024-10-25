import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerEmployeComponent } from './creer-employe.component';

describe('CreerEmployeComponent', () => {
  let component: CreerEmployeComponent;
  let fixture: ComponentFixture<CreerEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerEmployeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
