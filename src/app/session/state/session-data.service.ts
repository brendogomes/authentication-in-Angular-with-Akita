import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  login(credentials: any) { 
    return timer(300).pipe(mapTo({ token: 'DSGDSVE18R', name: 'Brendo Gomes', role: 'admin' }));
  } 
}
