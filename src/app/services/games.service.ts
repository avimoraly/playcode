import { GamesObject } from './interfaces';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const dataUrl = 'https://silentgamesapi.progressplay.net/Services/ClientHelper.svc/GetGames?CountryId=221&IsMobile=false&LabelId=';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getLabelId(): Observable<number> {
    return of(68);
  }

  getLanguageId(): Observable<number> {
    return of(254);
  }

  getGames(): Observable<GamesObject> {
    return combineLatest([this.getLabelId(), this.getLanguageId()]).pipe(switchMap(([lable, lang]) => {
      return this.http.get<GamesObject>(dataUrl + lable + '&LanguageId=' + lang + '&PlayerId=0');
    }));
  }

}
