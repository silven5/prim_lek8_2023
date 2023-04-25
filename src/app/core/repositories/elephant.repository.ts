import { Injectable } from '@angular/core';
import { ElephantModel } from './../domain/elephant.model';
import { Observable } from "rxjs"
@Injectable({ providedIn: 'root' })
export abstract class ElephantRepository {
  abstract getElephantById(id: number): Observable<ElephantModel>;
  abstract getAllElephants(): Observable<ElephantModel>;
}
