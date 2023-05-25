import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Primeng-Mode-Dark';
  themeSelection: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    let theme = localStorage.getItem('theme');
    if (theme) {
      this.themeSelection = theme === 'dark';
      this.changeTheme(this.themeSelection);
    }
  }

  changeTheme(state: boolean) {
    let theme = state ? 'dark' : 'light';
    localStorage.setItem("theme", theme);
    let themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    themeLink.href = 'lara-' + theme + '-blue' + '.css';
  }

// Change the theme
toggleTheme() {
  this.themeSelection = !this.themeSelection;
  this.changeTheme(this.themeSelection);
}


}
