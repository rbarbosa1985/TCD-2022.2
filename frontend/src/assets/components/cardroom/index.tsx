import './styles.css';


type Props = {
  title: string;
  description: string;
  img: string;
  temperatura: number;
  umidade: number;
}

export function CardRoom({ title, description, img, temperatura, umidade }: Props) {
  return (
    <div className="card-room card-base">
      <img className="card-image" src={img} />
      <div>
        <h5 className='card-name-room'>{title}</h5>
        <p className='card-description-room'>{description}</p>
      </div>
      <div className='card-dados'>
        <div className='card-dados-detail'>
          <h6 className='card-text-title'>Temperatura: </h6>
          <h6 className='card-text-title card-temperatura' >{temperatura}°C</h6>
          <h6 className='card-text-title'> - Δ: </h6>
          <h6 className='card-temperatura'>2°C</h6>
        </div>
        <div className='card-dados-detail'>
          <h6 className='card-text-title'>Umidade: </h6>
          <h6 className='card-text-title card-temperatura'>{umidade}%</h6>
          <h6 className='card-text-title'> - Δ: </h6>
          <h6 className='card-temperatura-warnning'>10%</h6>
        </div>
      </div>
      <p className='card-data'>05/12/2022 - 8:00</p>
    </div>
  )
}