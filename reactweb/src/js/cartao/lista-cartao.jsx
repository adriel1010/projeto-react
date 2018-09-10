import React from 'react';
import Cartao from './cartao';


class ListaCartao extends React.Component{
	render(){

		let noticias =[
			{titulo:'titulo 1',descricao:'Descrição 1',imagem:'https://materializecss.com/images/office.jpg',link:'#teste'},
			{titulo:'titulo 2',descricao:'Descrição 2',imagem:'https://materializecss.com/images/office.jpg',link:'#teste'},
			{titulo:'titulo 3',descricao:'Descrição 3',imagem:'https://materializecss.com/images/office.jpg',link:'#teste'},
			{titulo:'titulo 4',descricao:'Descrição 4',imagem:'https://materializecss.com/images/office.jpg',link:'#teste'},
			{titulo:'titulo 5',descricao:'Descrição 5',imagem:'https://materializecss.com/images/office.jpg',link:'#teste'},
			{titulo:'titulo 6',descricao:'Descrição 6',imagem:'https://materializecss.com/images/office.jpg',link:'#teste'},
			{titulo:'titulo 7',descricao:'Descrição 7',imagem:'https://materializecss.com/images/office.jpg',link:'#teste'}
		];
	 
	 	let aux =[];
	 	let novaLista =[];
	 	for(let k=0; k<noticias.length;k++){
	 		aux.push(noticias[k]);
	 		if(aux.length == this.props.qtdLinha){
	 			novaLista.push(aux);
	 			aux = [];
	 		}else if(k == noticias.length - 1){
	 			novaLista.push(aux);
	 		}
	 	}

	 	let tamanhoCol = "col m"+this.props.tamanhoCol;

	 	let listaCartoes = function(grupo){
	 		return grupo.map(function(item,index){
	 			return (
	 					<div key={index} clssName={tamanhoCol}>
	 						<Cartao dados={item} />
	 					</div>
	 				);
	 		});
	 	};

	 	let linha = novaLista.map(function(grupo,index){
	 		return(
	 				<div key="{index}" clssName="row"> 
	 					{listaCartoes(grupo)}
	 				</div>

	 			);
	 	});

	 	console.log(novaLista);

		return (
			<div>
				{linha}
			</div>
			);
	}

}

export default ListaCartao;