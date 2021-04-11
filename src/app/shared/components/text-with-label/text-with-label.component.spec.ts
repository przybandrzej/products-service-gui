import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWithLabelComponent } from './text-with-label.component';

describe('TextWithLabelComponent', () => {
  let component: TextWithLabelComponent;
  let fixture: ComponentFixture<TextWithLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextWithLabelComponent],
      imports: [MatIconModule, FlexLayoutModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
