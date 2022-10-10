import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { Alunos } from '../mock-alunos';

@Component({
    selector: 'app-alunos',
    templateUrl: './alunos.component.html',
    styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {


    alunos = Alunos;



    constructor() {}

    ngOnInit(): void {
    }

}