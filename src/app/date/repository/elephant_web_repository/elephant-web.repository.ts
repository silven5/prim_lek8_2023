import { Observable } from 'rxjs';
import { ElephantWebRepositoryMapper } from './elephant-web-repository-mapper';
import { Injectable } from '@angular/core';
import { ElephantRepository } from '../../../core/repositories/elephant.repository'
import { ElephantModel } from '../../../core//domain/elephant.model'
import { ElephantWebEntity } from './elephant-web-entity';
import { flatMap, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ElephantWebRepository extends ElephantRepository {

  mapper = new ElephantWebRepositoryMapper();

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getElephantById(id: number): Observable<ElephantModel> {
    return this.http
      .get<ElephantWebEntity>('https://62948085a7203b3ed06a4143.mockapi.io/api/v1/elephants/${id}')
      .pipe(map(this.mapper.mapFrom));
  }

  getAllElephants(): Observable<ElephantModel> {
    return this.http
      .get<ElephantWebEntity[]>('https://62948085a7203b3ed06a4143.mockapi.io/api/v1/elephants')
      .pipe(flatMap((item) => item))
      .pipe(map(this.mapper.mapFrom));
  }
}
