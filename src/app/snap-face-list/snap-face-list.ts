import { Component, inject, signal } from '@angular/core';
import { SnapFaceModel } from '../models/snap-face.models';
import { SnapsFaceService } from '../services/snaps-face.service';
import { SnapFace } from '../components/snap-face/snap-face';

@Component({
  selector: 'app-snap-face-list',
  imports: [SnapFace],
  templateUrl: './snap-face-list.html',
  styleUrl: './snap-face-list.scss',
})
export class SnapFaceList {
  private snapsFace = inject(SnapsFaceService);

  mySnaps = signal<SnapFaceModel[]>([]);

  ngOnInit(): void {
    const snaps = this.snapsFace.getSnapsFace();
    this.mySnaps.set(snaps);
  }
}
