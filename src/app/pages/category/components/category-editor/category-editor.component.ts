import { CategoryDTO } from './../../../../pms-products-sdk/model/categoryDTO';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss'],
})
export class CategoryEditorComponent implements OnInit {
  @Input('category')
  public set category(val: CategoryDTO) {
    this._category = JSON.parse(JSON.stringify(val));
    if (!this._category.id) {
      this.setEmptyCat();
    } else {
      this.createMode = false;
    }
  }

  public get organisation() {
    return this._category;
  }

  public _category: CategoryDTO = {};

  @Output('edited')
  public editedEvent: EventEmitter<CategoryDTO> = new EventEmitter();

  @Output('created')
  public createdEvent: EventEmitter<CategoryDTO> = new EventEmitter();

  public createMode: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  private setEmptyCat(): void {
    this._category.id = undefined;
    this._category.name = '';
    this._category.parentCategoryId = undefined;
    this.createMode = true;
  }

  public create(event: Event): void {
    event.stopPropagation();
    this.createdEvent.emit(this._category);
  }
}
