import React, {useState} from 'react';
import PagePadrao from '../../../componentes/pagePadrao';
import { Link } from 'react-router-dom';


function CadastroCategoria () {

     const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

   

    const [valores, setValores] = useState(valoresIniciais);

    function setValore(chave, valor){
        setValores({
            ...valores,
            [chave]: valor,
        })
    }
    
    function funcaoTeste(infoDoEvento){
        const {getAttribute, valor} = infoDoEvento.target;

        setValore(
            getAttribute('nome'),
            valor
        );
    }

    

    

    
    
    return (
        <PagePadrao>
            
                <h1>Cadastro de Categoria : {valores.nome} </h1>

                
                <form onSubmit={function handleSubmit(infosDoEvento){
                        infosDoEvento.preventDefault();
                        setCategorias([
                            ...categorias,
                            valores
                        ]);

                        setValores(valoresIniciais);

                    }}>

                    <div>
                        <label>
                            NOME DA CATEGORIA: 
                            <input
                                type="text"
                                name='name'
                                value={valores.nome}
                                onChange={funcaoTeste} 
                            />
                        </label>
                    </div>
                    
                    <div>
                        <label>
                            DESCRIÇÃO: 
                            <textarea
                                type="text"
                                name='descrição'
                                value={valores.descricao}
                                onChange={funcaoTeste}
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            COR: 
                            <input
                                type="color"
                                name='cor'
                                value={valores.cor}
                                onChange={funcaoTeste}
                            />
                        </label>
                    </div>
        

                    <button>
                        Cadastrar agora
                    </button>
                </form>
                
                <ul>
                    {categorias.map((categoria, indice) => {
                        return(
                            <li key={`${categoria}${indice}`}>
                                {categoria.nome}
                            </li>
                        )
                    })}
                </ul>

                <Link to="/">
                    Ir para home
                </Link>
          
            
        </PagePadrao>
    )
}

export default CadastroCategoria;