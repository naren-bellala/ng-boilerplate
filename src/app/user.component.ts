import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
        <input type="text" [value]="nameValue" (input)="onInputChangeHandler($event)" />
        <!-- [(ngModel)]="nameValue"/> -->
        <p>Hello {{nameValue}}!!!</p>
    `,
})
export class UserComponent {
    @Input() nameValue;
    @Output() inputEventHandler = new EventEmitter<String>();

    onInputChangeHandler = (event) => {
      this.nameValue = event.target.value;
      this.inputEventHandler.emit(event.target.value);
    }
}
