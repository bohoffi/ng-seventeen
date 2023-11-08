import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.scss',
})
export class NgIfComponent {
  protected value = signal(0);

  public increment(): void {
    this.value.update((v) => v + 1);
  }
  public decrement(): void {
    this.value.update((v) => v - 1);
  }
}
