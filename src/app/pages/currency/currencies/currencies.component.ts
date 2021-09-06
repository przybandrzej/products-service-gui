import { DocumentMouseEventService } from './../../../services/document-mouse-event.service';
import { SelectedCurrencyManagerService } from './../services/selected-currency-manager.service';
import { CurrencyResourceService } from './../../../pms-products-sdk/api/currencyResource.service';
import { CurrencyDTO } from './../../../pms-products-sdk/model/currencyDTO';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss'],
})
export class CurrenciesComponent implements OnInit {
  public error: boolean = false;
  public currencies: CurrencyDTO[] = [];
  public isLoading: boolean = true;

  @ViewChild('editor')
  private editor?: ElementRef;

  @ViewChildren('card')
  private cards?: QueryList<ElementRef>;

  constructor(
    private currencieservice: CurrencyResourceService,
    private managerService: SelectedCurrencyManagerService,
    private pageClickService: DocumentMouseEventService
  ) {}

  ngOnInit(): void {
    this.currencieservice.getAllCurrenciesUsingGET().subscribe(
      (res) => {
        this.currencies = res;
        this.isLoading = false;
      },
      () => (this.error = true)
    );
  }

  public select(event: Event, currency: CurrencyDTO): void {
    event.stopPropagation();
    this.managerService.selected = currency;
  }

  public edited(currency: CurrencyDTO): void {
    this.currencieservice.updateCurrencyUsingPUT(currency).subscribe(
      (res) => {
        setTimeout(() => {
          const index = this.currencies.indexOf(
            this.currencies.filter((it) => it.id === res.id)[0]
          );
          this.currencies.splice(index, 1, res);
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

  public created(currency: CurrencyDTO): void {
    this.currencieservice.createCurrencyUsingPOST(currency).subscribe(
      (res) => {
        setTimeout(() => {
          this.currencies.push(res);
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

  public isSelected(currency: CurrencyDTO): boolean {
    return this.managerService.lastSelected === currency;
  }
}
