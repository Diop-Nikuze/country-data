import { Injectable } from '@angular/core';
import { SnapFaceModel } from '../models/snap-face.models';

@Injectable({
  providedIn: 'root',
})
export class SnapsFaceService {
  private mySnaps: SnapFaceModel[] = [
    {
      id: '1',
      title: 'Beautiful Landscape',
      description: 'A beautiful landscape with mountains and a lake.',
      createdAt: new Date(),
      snaps: 0,
      imageUrl: 'https://picsum.photos/200/300?&random=1',
    },
    {
      id: '2',
      title: 'City Skyline',
      description: 'The skyline of a bustling city at night.',
      createdAt: new Date(),
      snaps: 0,
      imageUrl: 'https://picsum.photos/200/300?&random=2',
    },
    {
      id: '3',
      title: 'Forest Trail',
      description: 'A serene forest trail with tall trees and dappled sunlight.',
      createdAt: new Date(),
      snaps: 0,
      imageUrl: 'https://picsum.photos/200/300?&random=3',
    },
    {
      id: '4',
      title: 'Desert Dunes',
      description: 'Golden sand dunes under a clear blue sky.',
      createdAt: new Date(),
      snaps: 0,
      imageUrl: 'https://picsum.photos/200/300?&random=4',
    },
  ];

  getSnapsFace(): SnapFaceModel[] {
    return [...this.mySnaps];
  }

  snapFacebyId(snapFaceId: string, snapType: 'snap' | 'unsnap'): void {
    const snapFace = this.mySnaps.find((snap) => snap.id === snapFaceId);
    if (snapFace) {
      snapType === 'snap' ? snapFace.snaps++ : snapFace.snaps--;
    } else {
      throw new Error('SnapFace not found!');
    }
  }
}
