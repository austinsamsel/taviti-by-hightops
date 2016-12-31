import { Component, Input } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'class-meta',
  template: `
    <div>
      <h2>{{data.classDate}}</h2>
    </div>
  `
})
export class ClassMetaComponent {
  @Input()
  data: Data;
}
