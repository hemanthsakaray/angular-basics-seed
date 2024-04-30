import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check-box',
  template: `
    <label>
      <input type="checkbox" (change)="onChecked(true)" />
      remember me!
    </label>
  `,
  styles: [],
})
export class CheckBoxComponent {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(value: boolean) {
    this.checked.emit(value);
    console.log(value);
  }
}
