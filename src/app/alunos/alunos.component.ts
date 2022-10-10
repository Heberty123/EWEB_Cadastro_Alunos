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
    selectedAluno?: Aluno;
    alunoNew: Aluno = {
        id: 0,
        name: '',
        ra: '',
        cpf: ''
    };


    constructor() {}

    ngOnInit(): void {
    }



    onSelect(aluno: Aluno): void {
        this.selectedAluno = aluno;
    }

    add(): void {
        let id = this.alunos[this.alunos.length - 1].id + 1;
        this.alunoNew!.id = id;
        this.alunos.push(this.alunoNew!);
        this.alunoNew! = {
            id: 0,
            name: '',
            ra: '',
            cpf: ''
        };
    }

    delete(aluno: Aluno): void {
        console.log(aluno.name);
        let i = 0;

        this.alunos.forEach(item => {
            if(item === aluno){
                this.alunos.splice(i, 1);
            }
            i++;
        })
        
    }

}