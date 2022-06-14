import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCustomnerComponent } from './delete-customner.component';

describe('DeleteCustomnerComponent', () => {
  let component: DeleteCustomnerComponent;
  let fixture: ComponentFixture<DeleteCustomnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCustomnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCustomnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
