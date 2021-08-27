import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DocumentMouseEventService } from './../../../../services/document-mouse-event.service';
import { SelectedCategoryManagerService } from './../../services/selected-category-manager.service';
import { CategoryResourceService } from './../../../../pms-products-sdk/api/categoryResource.service';
import { CategoryDTO } from './../../../../pms-products-sdk/model/categoryDTO';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent implements OnInit, AfterViewInit {
  public error: boolean = false;
  public categories: CategoryDTO[] = [];

  @ViewChild('editor')
  private editor?: ElementRef;

  @ViewChildren('card')
  private cards?: QueryList<ElementRef>;

  constructor(
    private categoriesService: CategoryResourceService,
    private managerService: SelectedCategoryManagerService,
    private pageClickService: DocumentMouseEventService
  ) {}

  ngOnInit(): void {
    this.categoriesService.getAllCategoriesUsingGET().subscribe(
      (res) => (this.categories = res),
      () => (this.error = true)
    );
  }

  public select(event: Event, cat: CategoryDTO): void {
    event.stopPropagation();
    this.managerService.selected = cat;
  }

  public edited(cat: CategoryDTO): void {
    this.categoriesService.updateCategoryUsingPUT(cat).subscribe(
      (res) => {
        setTimeout(() => {
          const index = this.categories.indexOf(
            this.categories.filter((it) => it.id === res.id)[0]
          );
          this.categories.splice(index, 1, res);
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

  public created(cat: CategoryDTO): void {
    this.categoriesService.createCategoryUsingPOST(cat).subscribe(
      (res) => {
        setTimeout(() => {
          this.categories.push(res);
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

  public isSelected(category: CategoryDTO): boolean {
    return this.managerService.lastSelected === category;
  }
}
