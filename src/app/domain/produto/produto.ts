import {Category} from '../category/category';

export class Produto{
    id: number;
    nome: String;
    preco: number;
    descricao: String;
    marca: String;
    categoria: Category;
}