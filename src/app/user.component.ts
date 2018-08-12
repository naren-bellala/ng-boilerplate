import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
        <input type="text" [(ngModel)]="name"/>
        <p>Hello {{name}}!!!</p>
    `,
})
export class UserComponent {
    name = 'naren';
}
