import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseLaderComponent } from './if-else-lader.component';

describe('IfElseLaderComponent', () => {
  let component: IfElseLaderComponent;
  let fixture: ComponentFixture<IfElseLaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseLaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseLaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
