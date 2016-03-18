import {PipeTransform} from "angular2/core";

import {Editable} from "../editable/Editable";
import {FilterPipe} from "./pipe/FilterPipe";

export class GridComponent {

    selector:string = 'grid';
    templateUrl:string = './common/component/grid/grid.html';
    pipes = [FilterPipe];

    constructor(public providers:Array<any>) {
        this.providers = [Editable].concat(providers);
    }
}
