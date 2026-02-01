import { Component, inject, Input, signal } from '@angular/core';
import { SnapFaceModel } from '../../models/snap-face.models';
import { DatePipe } from '@angular/common';
import { SnapsFaceService } from '../../services/snaps-face.service';

@Component({
  selector: 'app-snap-face',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './snap-face.html',
  styleUrl: './snap-face.scss',
})
export class SnapFace {
  @Input() snapFace!: SnapFaceModel;

  private snapsFaceService = inject(SnapsFaceService);

  userHasSnapped = signal(false);

  onSnap(): void {
    if (this.userHasSnapped()) {
      this.snapsFaceService.snapFacebyId(this.snapFace.id, 'unsnap');
      this.userHasSnapped.set(false);
    } else {
      this.snapsFaceService.snapFacebyId(this.snapFace.id, 'snap');
      this.userHasSnapped.set(true);
    }
  }
}
