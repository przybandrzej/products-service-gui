import { CurrencyResourceService } from './../../../pms-products-sdk/api/currencyResource.service';
import { SelectedCurrencyManagerService } from './../services/selected-currency-manager.service';
import { Subscription } from 'rxjs';
import { CurrencyDTO } from './../../../pms-products-sdk/model/currencyDTO';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-currency-editor',
  templateUrl: './currency-editor.component.html',
  styleUrls: ['./currency-editor.component.scss']
})
export class CurrencyEditorComponent implements OnInit {

  @Input('currency')
  public set currency(val: CurrencyDTO) {
    this._currency = JSON.parse(JSON.stringify(val));
    if (!this._currency.id) {
      this.setEmptyCurrency();
    } else {
      this.createMode = false;
    }
    this.currencyName = this._currency.name ?? '';
  }

  public get currency() {
    return this._currency;
  }

  public _currency: CurrencyDTO = {};

  @Output('edited')
  public editedEvent: EventEmitter<CurrencyDTO> = new EventEmitter();

  @Output('created')
  public createdEvent: EventEmitter<CurrencyDTO> = new EventEmitter();

  public createMode: boolean = true;
  private subs: Subscription[] = [];
  public statusMessage: string = '';
  public isEditedSuccess: boolean = false;
  public isCreateSuccess: boolean = false;
  public _showOverlay: boolean = false;
  public showEditOverlay: boolean = false;
  public editedName: boolean = false;
  public currencyName: string = '';

  constructor(
    private managerService: SelectedCurrencyManagerService,
    private currencyService: CurrencyResourceService
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.managerService.$selectedCurrency.subscribe((res) => {
        this.currency = res;
      })
    );
    this.subs.push(
      this.managerService.$created.subscribe((success) => {
        this.isCreateSuccess = success;
        if (this.isCreateSuccess) {
          this.statusMessage = 'Currency created successfully!';
        } else {
          this.statusMessage = 'Currency creation failed!';
        }
        this.showCreateStatus = true;
      })
    );
    this.subs.push(
      this.managerService.$edited.subscribe((success) => {
        this.isEditedSuccess = success;
        this.showEditStatus = true;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((it) => it.unsubscribe());
  }

  private set showCreateStatus(val: boolean) {
    this._showOverlay = val;
    if (this._showOverlay) {
      setTimeout(() => {
        this._showOverlay = false;
      }, 1300);
    }
  }

  private set showEditStatus(val: boolean) {
    this.showEditOverlay = val;
  }

  private setEmptyCurrency(): void {
    this._currency.id = undefined;
    this._currency.name = '';
    this.createMode = true;
  }

  public create(event: Event): void {
    event.stopPropagation();
    this._currency.name = this.currencyName;
    this.createdEvent.emit(this._currency);
  }

  public saveName(name: string): void {
    this._currency.name = name;
    this.editedEvent.emit(this._currency);
  }

  public editNameShown(): void {
    this.showEditStatus = false;
    this.editedName = false;
  }
}
