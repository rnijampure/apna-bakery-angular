import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemiddlesectionComponent } from './homemiddlesection.component';

describe('HomemiddlesectionComponent', () => {
  let component: HomemiddlesectionComponent;
  let fixture: ComponentFixture<HomemiddlesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomemiddlesectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomemiddlesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
