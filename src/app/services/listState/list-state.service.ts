import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListStateService {

  public scrollPosition: number = 0;
  public currentPage: number = 1; // O cualquier otro estado que necesites mantener

  constructor() { }
}
