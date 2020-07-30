import React from 'react';
import PagePadrao from '../../../componentes/pagePadrao';
import { Link } from 'react-router-dom';


function CadastroCategoria () {
    return (
        <PagePadrao>
            
                <h1>Cadastro de Categoria</h1>

                <br/>
                <form>
                    <label>
                        NOME DA CATEGORIA: 
                        <input
                            type="text"
                        />
                    </label>

                    <button>
                        Cadastrar agora
                    </button>
                </form>

                
                <Link to="/">
                    Ir para home
                </Link>
          
            
        </PagePadrao>
    )
}

export default CadastroCategoria;