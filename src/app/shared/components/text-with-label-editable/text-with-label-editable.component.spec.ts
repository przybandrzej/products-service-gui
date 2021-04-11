import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWithLabelEditableComponent } from './text-with-label-editable.component';

describe('TextWithLabelEditableComponent', () => {
  let component: TextWithLabelEditableComponent;
  let fixture: ComponentFixture<TextWithLabelEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextWithLabelEditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextWithLabelEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
