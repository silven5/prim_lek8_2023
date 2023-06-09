import { Mapper } from './../../../core/base/mapper';
import { ElephantWebEntity } from './elephant-web-entity';
import {ElephantModel} from '../../../core//domain/elephant.model'
export class ElephantWebRepositoryMapper implements Mapper <ElephantWebEntity, ElephantModel> {
  mapFrom(param: ElephantWebEntity): ElephantModel {
    return {
      name: param.name,
      family: param.family,
      birthday: new Date(param.birthday)
    };
  }

  mapTo(param: ElephantModel): ElephantWebEntity {
    return {
      id: 0,
      name: param.name,
      family: param.family,
      birthday: param.birthday.getTime()
    };
  }
}
