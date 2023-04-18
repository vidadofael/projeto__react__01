// JSX - O jeito que o JS lê o arquivo dentro do REACT

import './Banner.css'

function Banner() {
    return(
        <header className='banner'>
            <img src="/imagens/banner.png" alt="Banner principal da página do Organo" />
        </header>
    )
}

export default Banner