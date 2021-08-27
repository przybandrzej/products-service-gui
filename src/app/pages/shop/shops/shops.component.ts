import { DocumentMouseEventService } from './../../../services/document-mouse-event.service';
import { SelectedShopManagerService } from './../services/selected-shop-manager.service';
import { ShopResourceService } from './../../../pms-products-sdk/api/shopResource.service';
import { ShopDTO } from './../../../pms-products-sdk/model/shopDTO';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  public error: boolean = false;
  public shops: ShopDTO[] = [];

  @ViewChild('editor')
  private editor?: ElementRef;

  @ViewChildren('card')
  private cards?: QueryList<ElementRef>;

  constructor(
    private shopService: ShopResourceService,
    private managerService: SelectedShopManagerService,
    private pageClickService: DocumentMouseEventService
  ) {}

  ngOnInit(): void {
    this.shopService.getAllShopsUsingGET().subscribe(
      (res) => (this.shops = res),
      () => (this.error = true)
    );
  }

  public select(event: Event, shop: ShopDTO): void {
    event.stopPropagation();
    this.managerService.selected = shop;
  }

  public edited(shop: ShopDTO): void {
    this.shopService.updateShopUsingPUT(shop).subscribe(
      (res) => {
        setTimeout(() => {
          const index = this.shops.indexOf(
            this.shops.filter((it) => it.id === res.id)[0]
          );
          this.shops.splice(index, 1, res);
          this.managerService.selected = res;
          this.managerService.edited = true;
        });
      },
      () => {
        setTimeout(() => {
          this.managerService.selected = this.managerService.lastSelected;
          this.managerService.edited = false;
        });
      }
    );
  }

  public created(shop: ShopDTO): void {
    this.shopService.createShopUsingPOST(shop).subscribe(
      (res) => {
        setTimeout(() => {
          this.shops.push(res);
          this.managerService.selected = res;
          this.managerService.created = true;
        });
      },
      () => {
        setTimeout(() => {
          this.managerService.created = false;
        });
      }
    );
  }

  ngAfterViewInit(): void {
    this.pageClickService.$click.subscribe((target) => {
      if (this.editor?.nativeElement.contains(target)) {
        return;
      }
      if (
        this.cards &&
        this.cards.filter((it) => it.nativeElement.contains(target)).length > 0
      ) {
        return;
      }
      this.managerService.selected = {};
    });
  }

  public isSelected(shop: ShopDTO): boolean {
    return this.managerService.lastSelected === shop;
  }
}
