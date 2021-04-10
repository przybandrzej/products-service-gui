import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextClickableComponent } from './text-clickable.component';

describe('TextClickableComponent', () => {
  let component: TextClickableComponent;
  let fixture: ComponentFixture<TextClickableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextClickableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextClickableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
