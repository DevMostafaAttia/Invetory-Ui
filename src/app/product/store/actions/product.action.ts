import { Action } from '@ngrx/store';
import { Products } from 'src/app/model/index';

export enum ProductActionTypes {
  LoadProduct = 'Load Products',
  SaveProduct = 'Save Products',
  SaveProductSuccess = 'Save Products success',
  SaveProductFail = "Save Product Fail"
}

export class LoadProduct implements Action {
  readonly type = ProductActionTypes.LoadProduct;

  constructor(public payload: Products[]) { }
}
export class SaveProduct implements Action {
  readonly type = ProductActionTypes.SaveProduct;

  constructor(public payload: Products) { }
}
export class SaveProductSuccess implements Action {
  readonly type = ProductActionTypes.SaveProductSuccess;

  constructor(public payload: Products) { }
}
export class SaveProductFail implements Action {
  readonly type = ProductActionTypes.SaveProductFail;

  constructor(public payload: Products) { }
}
export type ProductActionUnion = LoadProduct | SaveProduct | SaveProductSuccess|SaveProductFail;