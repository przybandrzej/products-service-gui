import { DocumentMouseEventService } from './../../../../services/document-mouse-event.service';
import {
  ProductTooltipComponent,
  TooltipData,
} from './../product-tooltip/product-tooltip.component';
import { ProductResourceService } from './../../../../pms-products-sdk/api/productResource.service';
import {
  Component,
  ComponentRef,
  OnInit,
  QueryList,
  ViewChildren,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ProductDTO } from 'src/app/pms-products-sdk';
import { Router } from '@angular/router';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  public products: ProductDTO[] = [];
  private overlayRef?: OverlayRef;
  public hoveredProduct: BehaviorSubject<ProductDTO>;
  private tooltipRef?: ComponentRef<ProductTooltipComponent>;
  private isHoveringTooltip: boolean = false;
  private subs: Subscription[] = [];

  public cardSizes: CardSizes = { width: '300px', height: '414px' };

  @ViewChildren('productCard') productCards?: QueryList<ElementRef>;

  constructor(
    private productsService: ProductResourceService,
    private router: Router,
    private overlay: Overlay,
    private positionBuilder: OverlayPositionBuilder
  ) {
    this.hoveredProduct = new BehaviorSubject({});
  }

  ngOnInit(): void {
    this.productsService
      .getAllProductsUsingGET()
      .subscribe((res) => (this.products = res));
  }

  ngOnDestroy(): void {
    this.subs.forEach((it) => it.unsubscribe());
  }

  public openProductDetails(product: ProductDTO): void {
    this.router.navigateByUrl('/products/' + product.id);
  }

  public addNewProduct(): void {
    this.router.navigateByUrl('/products/create');
  }

  public showPreview(product: ProductDTO): void {
    /*this.hoveredProduct?.next(product);
    setTimeout(() => {
      const elements = this.productCards?.filter((it) =>
        it.nativeElement.classList.contains('hovered')
      );
      if (!elements || elements.length == 0) {
        this.hoveredProduct.next({});
        return;
      }
      const el = elements[0].nativeElement.firstChild;

      const tooltipPortal = new ComponentPortal(ProductTooltipComponent);

      const positionStrategy = this.positionBuilder
        // Create position attached to the elementRef
        .flexibleConnectedTo(el)
        .withViewportMargin(30)
        // Describe how to connect overlay to the elementRef
        // Means, attach overlay's center bottom point to the
        // top center point of the elementRef.
        .withPositions([
          {
            originX: 'start',
            originY: 'center',
            overlayX: 'end',
            overlayY: 'center',
          },
          {
            originX: 'end',
            originY: 'center',
            overlayX: 'start',
            overlayY: 'center',
          },
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom',
          },
          {
            originX: 'center',
            originY: 'bottom',
            overlayX: 'center',
            overlayY: 'top',
          },
        ]);
      this.overlayRef = this.overlay.create({ positionStrategy });
      // Attach tooltip portal to overlay
      this.tooltipRef = this.overlayRef?.attach(tooltipPortal);
      // Pass content to tooltip component instance
      this.tooltipRef.instance.data = {
        categories: product.categories?.map((it) => it.name ?? '') ?? [''],
        shops: product.shops?.map((it) => it.name ?? '') ?? [''],
      };
      this.subs.push(
        this.tooltipRef.instance.mouseInEvent.asObservable().subscribe(() => {
          this.isHoveringTooltip = true;
          console.log('in');
        })
      );
      this.subs.push(
        this.tooltipRef.instance.mouseOutEvent.asObservable().subscribe(() => {
          this.isHoveringTooltip = false;
          console.log('out');
        })
      );
    });*/
  }

  public closePreview(product: ProductDTO): void {
    /*if (!this.isHoveringTooltip) {
      this.hoveredProduct.next({});
      this.overlayRef?.detach();
      this.overlayRef?.dispose();
      this.overlayRef = undefined;
    }*/
  }
}

export interface CardSizes {
  height: string;
  width: string;
}
