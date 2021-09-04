import { AttributeTypeDTO } from './../../../pms-products-sdk/model/attributeTypeDTO';
import { AttributeTypeResourceService } from './../../../pms-products-sdk/api/attributeTypeResource.service';
import { CategoryFDTO } from './../../../pms-products-sdk/model/categoryFDTO';
import { CategoryResourceService } from '../../../pms-products-sdk/api/categoryResource.service';
import { SelectedCategoryManagerService } from '../services/selected-category-manager.service';
import { of, Subscription } from 'rxjs';
import { CategoryDTO } from '../../../pms-products-sdk/model/categoryDTO';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { switchMap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss'],
})
export class CategoryEditorComponent implements OnInit, OnDestroy {
  @Input('category')
  public set category(val: CategoryFDTO) {
    this._category = JSON.parse(JSON.stringify(val));
    if (!this._category.id) {
      this.setEmptyCat();
    } else {
      this.createMode = false;
    }
    this.categoryName = this._category.name ?? '';
    console.log(this._category);
  }

  public get category() {
    return this._category;
  }

  public _category: CategoryFDTO = {};

  @Output('edited')
  public editedEvent: EventEmitter<CategoryFDTO> = new EventEmitter();

  @Output('created')
  public createdEvent: EventEmitter<CategoryFDTO> = new EventEmitter();

  public createMode: boolean = true;
  private subs: Subscription[] = [];
  public statusMessage: string = '';
  public isEditedSuccess: boolean = false;
  public isCreateSuccess: boolean = false;
  public _showOverlay: boolean = false;
  public showEditOverlay: boolean = false;
  public editedName: boolean = false;
  public categoryName: string = '';
  public attributeTypes: AttributeTypeDTO[] = [];

  constructor(
    private managerService: SelectedCategoryManagerService,
    private categoryService: CategoryResourceService,
    private attrTypeService: AttributeTypeResourceService
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.managerService.$selectedCategory
        .pipe(
          switchMap((res) => {
            if (res.id) {
              return this.categoryService.getCategoryFullInfoUsingGET(res.id);
            } else {
              return of({});
            }
          })
        )
        .subscribe((cat) => {
          this.category = cat;
        })
    );
    this.subs.push(
      this.managerService.$created.subscribe((success) => {
        this.isCreateSuccess = success;
        if (this.isCreateSuccess) {
          this.statusMessage = 'Category created successfully!';
        } else {
          this.statusMessage = 'Category creation failed!';
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
    this.attrTypeService
      .getAllAttributeTypesUsingGET()
      .subscribe((res) => (this.attributeTypes = res));
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

  private setEmptyCat(): void {
    this._category.id = undefined;
    this._category.name = '';
    this._category.parentCategoryId = undefined;
    this._category.attributes = [];
    this.createMode = true;
  }

  public create(event: Event): void {
    event.stopPropagation();
    this._category.name = this.categoryName;
    this.createdEvent.emit(this._category);
  }

  public saveName(name: string): void {
    this.category.name = name;
    this.editedEvent.emit(this.category);
  }

  public editNameShown(): void {
    this.showEditStatus = false;
    this.editedName = false;
  }
}
