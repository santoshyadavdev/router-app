import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitleService extends  TitleStrategy {
  
  constructor(private title: Title) {
    super();
  }


  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title !== undefined) {
      this.title.setTitle(`Custom Title | ${title}`);
    }
  }

  override buildTitle(snapshot: RouterStateSnapshot): string | undefined {
    return snapshot.url.split('/')[1].toLocaleLowerCase();
  }

}
