var listaDeEstados = require('./estados_cidades')

const getListaDeEstados = function(){
    let listaEstados = listaDeEstados
    let lista = []
    let lista2 = {}

    console.log(listaEstados.listaDeEstados.estados[6].sigla)

    listaEstados.listaDeEstados.estados.forEach(function(item){
        lista.push(item.sigla)
    })

    lista2.uf = lista
    lista2.quantidade = lista.length

    // console.log(lista2)
    return lista2
}

const getDadosEstado = function(siglaEstado){
    let sigla = String(siglaEstado).toUpperCase()
    let listaEstados = listaDeEstados
    let lista = {}
    let status = true

    //console.log(listaEstados.listaDeEstados.estados)

    listaEstados.listaDeEstados.estados.forEach(function(item){
        status = true
        if(String(item.sigla).toUpperCase() == sigla){
            lista.uf = item.sigla
            lista.descricao = item.nome
            lista.capital = item.capital
            lista.regiao = item.regiao
        }
    })
    if(status == true){
        return listaSigla
    }else{
        return false
    }
}

const getCapitalEstado = function(siglaEstado){
    let sigla = String(siglaEstado).toUpperCase()
    let listaEstados = listaDeEstados
    let lista = {}

    listaEstados.listaDeEstados.estados.forEach(function(item){
        if(String(item.sigla).toUpperCase() == sigla){
            lista.uf = item.sigla
            lista.descricao = item.nome
            lista.capital = item.capital
        }
    })

    console.log(lista)
    return lista
}

const getEstadosRegiao = function(regiaoEstado){
    let regiao = String(regiaoEstado).toUpperCase()
    let listaEstados = listaDeEstados
    let lista2 = {}
    let lista3 = []


    //console.log(listaEstados.listaDeEstados.estados) 

    listaEstados.listaDeEstados.estados.forEach(function(item){
        if(String(item.regiao).toUpperCase() == regiao){
            let lista = {} 
            lista.uf = item.sigla
            lista.descricao = item.nome
            lista3.push(lista)
        }
    })

    lista2.regiao = regiao
    lista2.estados = lista3

  
    console.log(lista2)
    return lista2

}

const getCapitalPais = function(){
    let listaEstados = listaDeEstados
    let json1 = {}
    let array = []

    listaEstados.listaDeEstados.estados.forEach(function(item){
        if(item.capital_pais != undefined){
            let json2 = {}
            json2.capital_atual = item.capital_pais.capital
            json2.uf = item.sigla
            json2.descricao = item.nome
            json2.capital = item.capital
            json2.regiao = item.regiao
            json2.capital_pais_ano_inicio = item.capital_pais.ano_inicio
            json2.capital_pais_ano_termino = item.capital_pais.ano_fim

            array.push(json2)
        }
    })

    json1.capitais = array


    console.log(json1)
    return json1
}

const getCidades = function(siglaEstado){
    let listaEstados = listaDeEstados
    let sigla = String(siglaEstado).toUpperCase()
    let json = {}
    let array = []

    listaEstados.listaDeEstados.estados.forEach(function(item){
        if(String(item.sigla).toUpperCase() == sigla){

            json.uf = item.sigla
            json.descricao = item.nome
            json.quantidade_cidades = item.cidades.length
            json.cidades = array

            item.cidades.forEach(function(itemCidade){
                array.push(itemCidade.nome)
            })

            json.cidades = array
        }

    })

    console.log(json)
    return json

}

//getCidades('mg')
//getCapitalPais() 
//getEstadosRegiao('norte') 
// getCapitalEstado('sp') 
//getDadosEstado('') 
// getListaDeEstados() 

module.exports = {
    getListaDeEstados, getDadosEstado, getCapitalEstado,getCidades,getEstadosRegiao,getCapitalPais,
}
