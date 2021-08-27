import { ShopDTO } from './../../../pms-products-sdk/model/shopDTO';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SelectedShopManagerService {

  private selectedShopSubject: BehaviorSubject<ShopDTO> = new BehaviorSubject(
    {}
  );
  private _$selectedShop: Observable<ShopDTO> = this.selectedShopSubject.asObservable();

  private createdSubject: Subject<boolean> = new Subject();
  private _$created: Observable<boolean> = this.createdSubject.asObservable();

  private editedSubject: Subject<boolean> = new Subject();
  private _$edited: Observable<boolean> = this.editedSubject.asObservable();

  public get $selectedShop() {
    return this._$selectedShop;
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

  public set selected(shop: ShopDTO) {
    this.selectedShopSubject.next(shop);
  }

  public get lastSelected() {
    return this.selectedShopSubject.value;
  }
}
