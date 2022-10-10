import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
    selector: 'app-alunos',
    templateUrl: './alunos.component.html',
    styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {


    aluno: Aluno = {
        id: 1,
        name: 'Heberty Guelfi Do Prado',
        ra: 1234567891011,
        cpf: "83756208472"
    }


    constructor() {}

    ngOnInit(): void {
    }

}