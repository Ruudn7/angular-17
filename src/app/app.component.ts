import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { from, of } from 'rxjs';
import { NavbarComponent } from './ui/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const obs = of({name: 'qwe'}, [1,2,3,4,5], function qwe(){ console.log('123')})
    const obs1 = of([{name: 'qwe'}, [1,2,3,4,5], function qwe(){ console.log('123')}])
    const obs2 = from([{name: 'qwe'}, [1,2,3,4,5], function qwe(){ console.log('123')}])

    obs.subscribe(val => console.log(val));
    obs1.subscribe(val => console.log(val));
    obs2.subscribe(val => console.log(val));
  }


}
