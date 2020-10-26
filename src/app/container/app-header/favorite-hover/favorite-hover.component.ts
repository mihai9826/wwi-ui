import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {Product} from '../../../shared/models/product/product';
import {UserService} from '../../../modules/authentication/service/user.service';

@Component({
  selector: 'app-favorite-hover',
  templateUrl: './favorite-hover.component.html',
  styleUrls: ['./favorite-hover.component.css']
})
export class FavoriteHoverComponent implements OnInit, OnChanges {

  @Input() displayy = false;
  faRemoveIcon = faTimesCircle;
  favoriteItems: Product[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    if (this.userService.isUserLoggedIn()) {
      this.userService.getFavoriteItems().subscribe(items => this.favoriteItems = items);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userService.isUserLoggedIn()) {
      this.userService.getFavoriteItems().subscribe(items => this.favoriteItems = items);
    }
  }

  onRemoveTogglePress(favoriteIndex: number) {
    const itemId = this.favoriteItems[favoriteIndex].stockItemId;
    this.userService.deleteFavoriteItem(itemId).subscribe(_ => {
      this.favoriteItems = this.favoriteItems.filter(x => x.stockItemId !== itemId);
    });
  }

}
