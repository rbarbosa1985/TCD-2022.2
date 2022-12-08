import { ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CardRoom } from '../../../assets/components/cardroom';
import './styles.css';
import logo from '../../../assets/images/9.png';
import logo1 from '../../../assets/images/1.png';
import logo2 from '../../../assets/images/2.png';
import logo3 from '../../../assets/images/8.png';
import logo4 from '../../../assets/images/4.png';
import logo5 from '../../../assets/images/5.png';
import logo6 from '../../../assets/images/6.png';
import logo7 from '../../../assets/images/7.png';

export function Dashboard() {
  const navigate = useNavigate();

  function handleDetail(id: string) {
    navigate(`/admin/room/${id}`)
  }

  return (
    <div className='dashboard-container'>
      <ButtonBase onClick={() => { handleDetail("1") }}>
        <CardRoom title='Laboratório' description='Área principal reservada para o cuidado do acervo.' img={logo} temperatura={17} umidade={80} />
      </ButtonBase>
      <ButtonBase onClick={() => { handleDetail("2") }}>
        <CardRoom title='Laboratório - 2' description='Área secundária reservada para o cuidado do acervo.' img={logo1} temperatura={17} umidade={80} />
      </ButtonBase>
      <ButtonBase onClick={() => { handleDetail("3") }}>
        <CardRoom title='Arquivo Histórico' description='Área reservada para o armazenamento de documentos.' img={logo2} temperatura={17} umidade={80} />
      </ButtonBase>
      <ButtonBase onClick={() => { handleDetail("4") }}>
        <CardRoom title='Reserva Técnica' description='Área reservada para o armazenamento de acervo tridimensional.' img={logo3} temperatura={17} umidade={80} />
      </ButtonBase>
      <ButtonBase onClick={() => { handleDetail("5") }}>
        <CardRoom title='Reserva Técnica - 2' description='Área reservada para o armazenamento de acervo bidimensional.' img={logo4} temperatura={17} umidade={80} />
      </ButtonBase>
      <ButtonBase onClick={() => { handleDetail("6") }}>
        <CardRoom title='Biblioteca' description='Área reservada para o armazenamento de obras raras.' img={logo5} temperatura={17} umidade={80} />
      </ButtonBase>
      <ButtonBase onClick={() => { handleDetail("7") }}>
        <CardRoom title='Biblioteca - 2' description='Área reservada para o armazenamento de acervo corrente.' img={logo6} temperatura={17} umidade={80} />
      </ButtonBase>
      <ButtonBase onClick={() => { handleDetail("8") }}>
        <CardRoom title='Sala das Viaturas' description='Área reservada para o armazenamento e exposição de viaturas.' img={logo7} temperatura={17} umidade={80} />
      </ButtonBase>
    </div>
  )
}