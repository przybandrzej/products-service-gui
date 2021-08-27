import { CategoryDTO } from './../../../../pms-products-sdk/model/categoryDTO';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Input('category')
  public set category(val: CategoryDTO) {
    this._category = val;
  }

  @Input('selected')
  public isSelected: boolean = false;

  public get category() {
    return this._category;
  }

  private _category: CategoryDTO = {};

  constructor() {}

  ngOnInit(): void {}
}
