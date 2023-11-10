import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDataBindingComponent } from './route-data-binding.component';

describe('RouteDataBindingComponent', () => {
  let component: RouteDataBindingComponent;
  let fixture: ComponentFixture<RouteDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteDataBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
