import './styles.css';
import { ApexChart } from '../../../assets/components/chart';
import { ChartMonth } from '../../../assets/components/chart_month';
import { ChartWeek } from '../../../assets/components/chart_week';
import { useState } from 'react';
import logo from '../../../assets/images/9.png';
import logo1 from '../../../assets/images/1.png';
import logo2 from '../../../assets/images/2.png';
import logo3 from '../../../assets/images/8.png';
import logo4 from '../../../assets/images/4.png';
import logo5 from '../../../assets/images/5.png';
import logo6 from '../../../assets/images/6.png';
import logo7 from '../../../assets/images/7.png';
import { useParams } from 'react-router-dom';


const rooms = [
  {
    title: "Laboratório",
    description: "Área principal reservada para o cuidado do acervo.",
    img: logo,
  },
  {
    title: "Laboratório",
    description: "Área secundária reservada para o cuidado do acervo.",
    img: logo1,
  },
  {
    title: "Arquivo Histórico",
    description: "Área reservada para o armazenamento de documentos.",
    img: logo2,
  },
  {
    title: "Reserva Técnica",
    description: "Área reservada para o armazenamento de acervo tridimensional.",
    img: logo3,
  },
  {
    title: "Reserva Técnica - 2",
    description: "Área reservada para o armazenamento de acervo bidimensional.",
    img: logo4,
  },
  {
    title: "Biblioteca",
    description: "Área reservada para o armazenamento de obras raras.",
    img: logo5,
  },
  {
    title: "Biblioteca - 2",
    description: "Área reservada para o armazenamento de acervo corrente.",
    img: logo6,
  },
  {
    title: "Sala das Viaturas",
    description: "Área reservada para o armazenamento e exposição de viaturas.",
    img: logo7,
  }
]

export function RoomDetails() {
  const [graph, setGraph] = useState('0');
  const width = window.innerWidth;
  const { id } = useParams();
  let i;
  if (id != null) {
    i = parseInt(id) - 1;
  } else {
    i = 0;
  }

  return (
    <div className='room-container'>
      <div className='card-base room-content'>
        <div className='room-title'>
          <img src={rooms[i].img} alt='Room' className='room-image' />
          <div>
            <h2 className='room-name'>{rooms[i].title}</h2>
            <p className='room-description'>{rooms[i].description}</p>
          </div>
        </div>
        <div className='room-graph'>
          <div className='room-graph-details'>
            <h4>Gráfico de Variação</h4>
            <select value={graph} onChange={e => setGraph(e.target.value)} className='input-base room-select'>
              <option value={'0'}>7 dias</option>
              <option value={'1'}>30 dias</option>
              <option value={'2'}>1 ano</option>
            </select>
            {graph === '0' && <ChartWeek width={width} />}
            {graph === '1' && <ChartMonth width={width} />}
            {graph === '2' && <ApexChart width={width} />}
          </div>
        </div>
      </div>
    </div>
  )
}