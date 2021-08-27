import { CategoryDTO } from './../../../pms-products-sdk/model/categoryDTO';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SelectedCategoryManagerService {

  private selectedCatSubject: BehaviorSubject<CategoryDTO> = new BehaviorSubject(
    {}
  );
  private _$selectedCat: Observable<CategoryDTO> = this.selectedCatSubject.asObservable();

  private createdSubject: Subject<boolean> = new Subject();
  private _$created: Observable<boolean> = this.createdSubject.asObservable();

  private editedSubject: Subject<boolean> = new Subject();
  private _$edited: Observable<boolean> = this.editedSubject.asObservable();

  public get $selectedCategory() {
    return this._$selectedCat;
  }

  public get $created() {
    return this._$created;
  }

  public get $edited() {
    return this._$edited;
  }

  public set created(success: boolean) {
    this.createdSubject.next(success);
  }

  public set edited(success: boolean) {
    this.editedSubject.next(success);
  }

  public set selected(category: CategoryDTO) {
    this.selectedCatSubject.next(category);
  }

  public get lastSelected() {
    return this.selectedCatSubject.value;
  }
}
