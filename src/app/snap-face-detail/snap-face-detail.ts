import { Component, inject, signal } from '@angular/core';
import { SnapsFaceService } from '../services/snaps-face.service';
import { ActivatedRoute } from '@angular/router';
import { SnapFaceModel } from '../models/snap-face.models';

@Component({
  selector: 'app-snap-face-detail',
  imports: [],
  templateUrl: './snap-face-detail.html',
  styleUrl: './snap-face-detail.scss',
})
export class SnapFaceDetail {
  private snapsFace = inject(SnapsFaceService);

  private route = inject(ActivatedRoute);

  // snapface = signal<SnapFaceModel>[]
}
