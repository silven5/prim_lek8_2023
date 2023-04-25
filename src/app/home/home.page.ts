import { Component } from '@angular/core';

import { ElephantRepository } from '../core/repositories/elephant.repository';
import { ElephantWebRepository } from '../date/repository/elephant_web_repository/elephant-web.repository';
import { HttpClient } from '@angular/common/http';
import { ElephantModel } from '../core/domain/elephant.model'
import { GetAllElephantsUsecase } from '../core/usecases/get-all-elephants.usecase';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  elephants!: Array<ElephantModel>;

  constructor(
    private getAllElephants: GetAllElephantsUsecase) {
    console.log(this.getAllElephants);
    // console.log(this.elephants);
  }
  updateElephants() {
    this.elephants = [];
    this.getAllElephants.execute().subscribe((value: ElephantModel) => {
      this.elephants.push(value);
      console.log("Add");
    });
  }

  onSelect(event: any) {
    console.log(event.target);
  }

}
