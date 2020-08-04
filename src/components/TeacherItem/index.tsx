import React from 'react';

import './styles.css';

import whatsIcon from './../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/56225731?s=460&u=f29ffa325b32e03537f26a1ba9204d1dade7ebc5&v=4" alt="F-Programmer" />
        <div>
          <strong>Flávio Henrique</strong>
          <span>Portugês</span>
        </div>
      </header>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br />
        <br />
            Nam atque perferendis, error nisi ducimus saepe aliquam cumque, perspiciatis maiores non quod impedit officiis, alias itaque qui repellat? Qui, nobis iure.
          </p>

      <footer>
        <p>
          Preço/Hora
              <strong>R$ 125,00</strong>
        </p>

        <button type='button'>
          <img src={whatsIcon} alt="Entrar em contato" />
              Entrar em contato
          </button>
      </footer>
    </article>
  )
}

export default TeacherItem;