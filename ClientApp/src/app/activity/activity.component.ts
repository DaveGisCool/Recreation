import { Component } from '@angular/core';
import { ActivityData, ActivityDatas } from '../interfaces/activity';
import { ActivityDataService } from '../services/activity-data.service';
import { SignedInUserService } from '../services/signed-in-user.service';
import { UserInfo, UserFavorite } from '../interfaces/user';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})

export class ActivityComponent {
  activity: ActivityData;
  userFavorite: UserFavorite;
  activityname: string;


  constructor(
    private activitydataservice: ActivityDataService,
    private userdataservice: SignedInUserService,
    private favoriteservice: FavoriteService
  ) { }

  //ngOnInit(): void {
  //  this.getActivityList();
  //}

  //getActivityList() {
  //  this.activitydataservice.getActivityDataList().subscribe(
  //    activities => (this.activitydataservice.activities = activities));
  //}

  //getActivityByName(activityname) {
  //  //return list of activites from service call.
  //  this.activitydataservice.getActivityByName(activityname).subscribe(
  //    activities => (this.activitydataservice.activities = activities));
  //}


  addLikedActivity(activity: ActivityData) {
    let favorite: UserFavorite = {
      id: 0,
      UserID: this.userdataservice.userId,
      RIDBActivity: activity.id
    }

    this.favoriteservice.FavoriteManager(favorite);
  }

  FavoriteCheck(id: number) {
    console.log(this.favoriteservice.favorites)
    for (let i = 0; i < this.favoriteservice.favorites.length; i++) {
      
      if (id == this.favoriteservice.favorites[i].RIDBActivity) {
        return true;
      }
    }

    return false;
  }

}
