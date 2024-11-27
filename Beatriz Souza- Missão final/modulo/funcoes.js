const ListaAlunos = require('./alunos')
const ListaCursos = require('./cursos')

const getlistaCursos = function(){
    let cursos = []
    let status = false
   
    listaCursos.cursos.forEach(function(item){
        status = true
        cursos.push(item)
    })
    if(status == true){
        return cursos
    }else{
        return status
    }
}

const getlistaAlunos = function(){
    let alunos = []
    let status = false

    listaAlunos.alunos.forEach(function(item){
        status = true
        alunos.push(item)
    })
    if(status == true){
        return alunos
    }else{
        return status
    }
}

const getlistaMatricula = function(matriculaNumero){
    let ListaAluno = ListaAlunos
    let matricula = Number(matriculaNumero)
    let aluno = []

   ListaAluno.alunos.forEach(function(item){
    if(Number(item.matricula) == matricula){
        let dadosAlunos = {}

        dadosAlunos.nome = item.nome
        dadosAlunos.foto = item.foto
        dadosAlunos.matricula = item.matricula
        dadosAlunos.sexo = item.sexo
        dadosAlunos.curso = item.curso
        dadosAlunos.status = item.status

        aluno.push(dadosAlunos)
    }
   })
   console.log(aluno)
}

const getcursosEspecificos = function(item){
    let





}










getlistaMatricula('20151001001')
