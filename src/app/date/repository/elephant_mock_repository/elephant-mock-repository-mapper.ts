import { Mapper } from '../../../core/base/mapper';

import {ElephantModel} from '../../../core/domain/elephant.model'
import { ElephantMockEntity } from './elephant-mock-entity';

export class ElephantMockRepositoryMapper implements Mapper <ElephantMockEntity, ElephantModel> {
  mapFrom(param: ElephantMockEntity): ElephantModel {
    return {
      name: param.name,
      family: param.family,
      birthday: new Date(param.birthday)
    };
  }

  mapTo(param: ElephantModel): ElephantMockEntity {
    return {
      id: 0,
      name: param.name,
      family: param.family,
      birthday: new Date(param.birthday.getTime())
    };
  }
}
