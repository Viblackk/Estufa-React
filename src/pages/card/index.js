import React from 'react';
import './index.css';

function card({cityInformation}) {


  return (
		<div className='containerCard'>
			<div className="titleCard">
				{ cityInformation.name }
			</div>
			
			<div>
				{ cityInformation.main.temp }
			</div>

			<div>
				<button onClick={() => console.log(cityInformation)}>Acessar tela</button>
			</div>
		</div>
  );
}

export default card;