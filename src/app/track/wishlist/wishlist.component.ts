// import { MatSnackBar } from '@angular/material';
import { TrackService } from './../track.service';
import { CardcontainerComponent } from './../cardcontainer/cardcontainer.component';
import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../track';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  watchListApi = true;
  TrackService: any;
  statusCode: any;
  tracks: Array<Track>;

  constructor(private trackService: TrackService) {
    this.tracks = [];
   }

  ngOnInit() {
    this.trackService.getAllWishListTrack1().subscribe(data => {
      // if (data.length === 0) {
      //   this.snackBar.open('Wish list is mepty', '', {duration: 1000});
      // }
      this.tracks = data; });
    }
    deleteFromWishlist(track: Track) {
         this.trackService.deleteTrackFromWishList(track).subscribe((data: any) => {
           console.log('result', data);
         });
  }
  updateComments(track: Track) {
    console.log('in wishlist');
    this.trackService.updateComments(track).subscribe((data) => {
      console.log('data', data);
    //   this.snackBar.open('successfully updated', '', {
    //     duration: 1000
    // });
  // tslint:disable-next-line:semicolon
  }
    );
}
}
