import {Category} from '../category/category';

export class Produto{
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    marca: string;
    category: Category;
}