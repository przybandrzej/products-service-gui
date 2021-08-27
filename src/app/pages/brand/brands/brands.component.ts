import { DocumentMouseEventService } from './../../../services/document-mouse-event.service';
import { SelectedBrandManagerService } from './../services/selected-brand-manager.service';
import { BrandResourceService } from './../../../pms-products-sdk/api/brandResource.service';
import { BrandDTO } from './../../../pms-products-sdk/model/brandDTO';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  public error: boolean = false;
  public brands: BrandDTO[] = [];

  @ViewChild('editor')
  private editor?: ElementRef;

  @ViewChildren('card')
  private cards?: QueryList<ElementRef>;

  constructor(
    private brandService: BrandResourceService,
    private managerService: SelectedBrandManagerService,
    private pageClickService: DocumentMouseEventService
  ) {}

  ngOnInit(): void {
    this.brandService.getAllBrandsUsingGET().subscribe(
      (res) => (this.brands = res),
      () => (this.error = true)
    );
  }

  public select(event: Event, brand: BrandDTO): void {
    event.stopPropagation();
    this.managerService.selected = brand;
  }

  public edited(brand: BrandDTO): void {
    this.brandService.updateBrandUsingPUT(brand).subscribe(
      (res) => {
        setTimeout(() => {
          const index = this.brands.indexOf(
            this.brands.filter((it) => it.id === res.id)[0]
          );
          this.brands.splice(index, 1, res);
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

  public created(brand: BrandDTO): void {
    this.brandService.createBrandUsingPOST(brand).subscribe(
      (res) => {
        setTimeout(() => {
          this.brands.push(res);
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

  public isSelected(brand: BrandDTO): boolean {
    return this.managerService.lastSelected === brand;
  }

}
