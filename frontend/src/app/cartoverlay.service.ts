import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartOverlayService {
  private overlayVisible = new BehaviorSubject<boolean>(false);

  // Observable to be used by components to react to changes
  public overlayVisible$ = this.overlayVisible.asObservable();

  constructor() {}

  // Method to toggle visibility based on current state
  toggleOverlay() {
    this.overlayVisible.next(!this.overlayVisible.value);
  }

  // Method to set specific visibility state
  setOverlayVisible(visible: boolean) {
    this.overlayVisible.next(visible !== null ? visible : false);
  }
}
