import { ShopResourceService } from './../../../pms-products-sdk/api/shopResource.service';
import { SelectedShopManagerService } from './../services/selected-shop-manager.service';
import { Subscription } from 'rxjs';
import { ShopDTO } from './../../../pms-products-sdk/model/shopDTO';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-shop-editor',
  templateUrl: './shop-editor.component.html',
  styleUrls: ['./shop-editor.component.scss']
})
export class ShopEditorComponent implements OnInit {

  @Input('shop')
  public set shop(val: ShopDTO) {
    this._shop = JSON.parse(JSON.stringify(val));
    if (!this._shop.id) {
      this.setEmptyShop();
    } else {
      this.createMode = false;
    }
    this.shopName = this._shop.name ?? '';
  }

  public get shop() {
    return this._shop;
  }

  public _shop: ShopDTO = {};

  @Output('edited')
  public editedEvent: EventEmitter<ShopDTO> = new EventEmitter();

  @Output('created')
  public createdEvent: EventEmitter<ShopDTO> = new EventEmitter();

  public createMode: boolean = true;
  private subs: Subscription[] = [];
  public statusMessage: string = '';
  public isEditedSuccess: boolean = false;
  public isCreateSuccess: boolean = false;
  public _showOverlay: boolean = false;
  public showEditOverlay: boolean = false;
  public editedName: boolean = false;
  public shopName: string = '';

  constructor(
    private managerService: SelectedShopManagerService,
    private shopService: ShopResourceService
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.managerService.$selectedShop.subscribe((res) => {
        this.shop = res;
      })
    );
    this.subs.push(
      this.managerService.$created.subscribe((success) => {
        this.isCreateSuccess = success;
        if (this.isCreateSuccess) {
          this.statusMessage = 'Shop created successfully!';
        } else {
          this.statusMessage = 'Shop creation failed!';
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

  private setEmptyShop(): void {
    this._shop.id = undefined;
    this._shop.name = '';
    this.createMode = true;
  }

  public create(event: Event): void {
    event.stopPropagation();
    this._shop.name = this.shopName;
    this.createdEvent.emit(this._shop);
  }

  public saveName(name: string): void {
    this._shop.name = name;
    this.editedEvent.emit(this._shop);
  }

  public editNameShown(): void {
    this.showEditStatus = false;
    this.editedName = false;
  }

}
