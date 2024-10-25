import { Injectable } from '@angular/core';
import { langueCourante } from '../classe/langueCourante';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private langue: langueCourante = new langueCourante();
  private langueSubject = new BehaviorSubject<langueCourante>(this.langue);
  langue$ = this.langueSubject.asObservable();

  selectLanguage(lang: string) {
    if (lang === 'fr') {
      this.langue.id = 1;
      this.langue.nom = 'français';
    } else if (lang === 'en' || lang == null) {
      this.langue.id = 2;
      this.langue.nom = 'english';
    }
    this.langueSubject.next(this.langue);
    console.log('Langue sélectionnée:', lang + '\n ' + this.langue.toString());
  }

  getlangue(): langueCourante {
    return this.langue;
  }
  
}
