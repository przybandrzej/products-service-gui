import { BrandResourceService } from './../../../pms-products-sdk/api/brandResource.service';
import { SelectedBrandManagerService } from './../services/selected-brand-manager.service';
import { Subscription } from 'rxjs';
import { BrandDTO } from './../../../pms-products-sdk/model/brandDTO';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-brand-editor',
  templateUrl: './brand-editor.component.html',
  styleUrls: ['./brand-editor.component.scss']
})
export class BrandEditorComponent implements OnInit {

  @Input('brand')
  public set brand(val: BrandDTO) {
    this._brand = JSON.parse(JSON.stringify(val));
    if (!this._brand.id) {
      this.setEmptyBrand();
    } else {
      this.createMode = false;
    }
    this.brandName = this._brand.name ?? '';
  }

  public get brand() {
    return this._brand;
  }

  public _brand: BrandDTO = {};

  @Output('edited')
  public editedEvent: EventEmitter<BrandDTO> = new EventEmitter();

  @Output('created')
  public createdEvent: EventEmitter<BrandDTO> = new EventEmitter();

  public createMode: boolean = true;
  private subs: Subscription[] = [];
  public statusMessage: string = '';
  public isEditedSuccess: boolean = false;
  public isCreateSuccess: boolean = false;
  public _showOverlay: boolean = false;
  public showEditOverlay: boolean = false;
  public editedName: boolean = false;
  public brandName: string = '';

  constructor(
    private managerService: SelectedBrandManagerService,
    private brandService: BrandResourceService
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.managerService.$selectedBrand.subscribe((res) => {
        this.brand = res;
      })
    );
    this.subs.push(
      this.managerService.$created.subscribe((success) => {
        this.isCreateSuccess = success;
        if (this.isCreateSuccess) {
          this.statusMessage = 'Brand created successfully!';
        } else {
          this.statusMessage = 'Brand creation failed!';
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

  private setEmptyBrand(): void {
    this._brand.id = undefined;
    this._brand.name = '';
    this.createMode = true;
  }

  public create(event: Event): void {
    event.stopPropagation();
    this._brand.name = this.brandName;
    this.createdEvent.emit(this._brand);
  }

  public saveName(name: string): void {
    this._brand.name = name;
    this.editedEvent.emit(this._brand);
  }

  public editNameShown(): void {
    this.showEditStatus = false;
    this.editedName = false;
  }

}
