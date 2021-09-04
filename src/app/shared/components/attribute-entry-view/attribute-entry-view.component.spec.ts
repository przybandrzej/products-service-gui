import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeEntryViewComponent } from './attribute-entry-view.component';

describe('AttributeEntryViewComponent', () => {
  let component: AttributeEntryViewComponent;
  let fixture: ComponentFixture<AttributeEntryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeEntryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeEntryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
