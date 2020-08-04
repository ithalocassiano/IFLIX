import React, {useState} from 'react';
import PagePadrao from '../../../componentes/pagePadrao';
import { Link } from 'react-router-dom';


function CadastroCategoria () {
    const [categorias, setCategorias] = useState(['teste']);
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');
    //nome da variavel, função pra mudar a variavel e valor inicial da variavel
    
    
    return (
        <PagePadrao>
            
                <h1>Cadastro de Categoria : {nomeDaCategoria} </h1>

                
                <form onSubmit={function handleSubmit(infosDoEvento){
                        infosDoEvento.preventDefault();
                        setCategorias([
                            ...categorias,
                            nomeDaCategoria
                        ]);

                    }}>
                    <label>
                        NOME DA CATEGORIA: 
                        <input
                            type="text"
                            value={nomeDaCategoria}
                            onChange={function funcaoTeste(infoDoEvento){
                                setNomeDaCategoria(infoDoEvento.target.value);
                            }}
                        />
                    </label>

                    <button>
                        Cadastrar agora
                    </button>
                </form>
                
                <ul>
                    {categorias.map((categoria, indice) => {
                        return(
                            <li key={`${categoria}${indice}`}>
                                {categoria}
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