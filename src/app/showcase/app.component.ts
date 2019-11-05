import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    darkDemoStyle: HTMLStyleElement;

    constructor(private router:Router){}

    changeTheme(event: Event, theme: string, dark: boolean) {
        let themeLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('theme-css');
        let dtThemeLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('theme-datatable-css');

        themeLink.href = 'assets/components/themes/' + theme + '/theme.css';
        dtThemeLink.href = 'assets/components/themes/' + theme + '/theme-datatable.css';

        if (dark) {
            if (!this.darkDemoStyle) {
                this.darkDemoStyle = document.createElement('style');
                this.darkDemoStyle.type = 'text/css';
                this.darkDemoStyle.innerHTML = '.implementation { background-color: #3f3f3f; color: #dedede} .implementation > h3, .implementation > h4{ color: #dedede}';
                document.body.appendChild(this.darkDemoStyle);
            }
        }
        else if(this.darkDemoStyle) {
            document.body.removeChild(this.darkDemoStyle);
            this.darkDemoStyle = null;
        }
        
        event.preventDefault();
    }
}
