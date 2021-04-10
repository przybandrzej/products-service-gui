import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentMouseEventService {
  private documentClickSubject: Subject<HTMLElement> = new Subject<HTMLElement>();
  private _$click: Observable<HTMLElement> = this.documentClickSubject.asObservable();

  public clicked(target: HTMLElement) {
    this.documentClickSubject.next(target);
  }

  public get $click() {
    return this._$click;
  }
}
