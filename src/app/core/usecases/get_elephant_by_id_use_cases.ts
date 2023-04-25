import { Observable } from 'rxjs';
import { ElephantModel } from './../domain/elephant.model';
import { UseCase } from './../base/use-case';
import { Injectable } from '@angular/core';
import { ElephantRepository} from "../repositories/elephant.repository"

@Injectable({
  providedIn: 'root'
})
export class GetElephantByIdUsecase implements UseCase<number, ElephantModel> {

  constructor(private elephantRepository: ElephantRepository) { }

  execute(params: number): Observable<ElephantModel> {
    return this.elephantRepository.getElephantById(params);
  }
}
