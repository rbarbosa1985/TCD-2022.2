import Chart from "react-apexcharts"

type Props = {
  width: number;
}

export function ChartWeek({ width }: Props) {
  const state = {

    series: [{
      name: "Temperatura",
      data: [32, 30, 27, 25, 24, 22, 28]
    },
    {
      name: "Umidade Relativa",
      data: [75, 85, 70, 65, 65, 64, 63]
    },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      }
    },


  };
  return (
    <div>
      <Chart options={state.options} series={state.series} className="chart" type="line" height={400} width={width > 640 ? (width - 200) : (width - 80)} />
    </div>
  )
}