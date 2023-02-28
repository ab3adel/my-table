import {atom} from 'recoil'
export interface iRow {id:number,title:string}
export const tableState= atom<iRow []>({
    key:'TableState',
    default:[]
})