import {IModel} from "../../../data/model/IModel";
import {IColumn} from "../grid/column/IColumn";

export interface IEditable {

    onModifyModel(event:Event, col:IColumn, model:IModel);
}
