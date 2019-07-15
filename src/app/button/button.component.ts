import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	template: `
    {{ label }}
  `,
	styles: [],
	encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {
	constructor() {}
	@Input('label') label: string;

	ngOnInit() {}
}
