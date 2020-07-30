import React from 'react';
import PagePadrao from '../../../componentes/pagePadrao';
import { Link } from 'react-router-dom';


function CadastroVideo () {
    return (
        <PagePadrao>
            
                <h1>Cadastro de Vídeo</h1>

                <br/>

                <Link to="/cadastro/categoria">
                    Cadastrar Categoria
                </Link>
          
            
        </PagePadrao>
    )
}

export default CadastroVideo;