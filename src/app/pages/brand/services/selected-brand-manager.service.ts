import { BrandDTO } from './../../../pms-products-sdk/model/brandDTO';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SelectedBrandManagerService {

  private selectedBrandSubject: BehaviorSubject<BrandDTO> = new BehaviorSubject(
    {}
  );
  private _$selectedBrand: Observable<BrandDTO> = this.selectedBrandSubject.asObservable();

  private createdSubject: Subject<boolean> = new Subject();
  private _$created: Observable<boolean> = this.createdSubject.asObservable();

  private editedSubject: Subject<boolean> = new Subject();
  private _$edited: Observable<boolean> = this.editedSubject.asObservable();

  public get $selectedBrand() {
    return this._$selectedBrand;
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

  public set selected(Brand: BrandDTO) {
    this.selectedBrandSubject.next(Brand);
  }

  public get lastSelected() {
    return this.selectedBrandSubject.value;
  }
}
