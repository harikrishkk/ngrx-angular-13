import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

export interface Color {
  id: number,
  name: string;
  hex: string;
}

@Injectable({
  providedIn: 'root'
})
export class ColorsService extends EntityCollectionServiceBase<Color> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Color', serviceElementsFactory);
  }

}
