import { CurrencyDTO } from 'src/app/pms-products-sdk';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SelectedCurrencyManagerService {

  private selectedCurrencySubject: BehaviorSubject<CurrencyDTO> = new BehaviorSubject(
    {}
  );
  private _$selectedCurrency: Observable<CurrencyDTO> = this.selectedCurrencySubject.asObservable();

  private createdSubject: Subject<boolean> = new Subject();
  private _$created: Observable<boolean> = this.createdSubject.asObservable();

  private editedSubject: Subject<boolean> = new Subject();
  private _$edited: Observable<boolean> = this.editedSubject.asObservable();

  public get $selectedCurrency() {
    return this._$selectedCurrency;
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

  public set selected(Currency: CurrencyDTO) {
    this.selectedCurrencySubject.next(Currency);
  }

  public get lastSelected() {
    return this.selectedCurrencySubject.value;
  }
}
