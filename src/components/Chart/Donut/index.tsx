import { PropsChartDonut } from '@/components/types'
import dynamic from 'next/dynamic'
import React from 'react'

export const ChartDonut = ({
  values,
  labels,
  colors,
  height,
  width,
}: PropsChartDonut) => {
  const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
  return (
    <Chart
      type="donut"
      series={values}
      width={width}
      height={height}
      options={{
        chart: { type: 'donut' },
        legend: {
          show: true,
          position: 'right',
          fontSize: '18px',
          labels: {
            colors: '#fff',
          },
        },
        labels,
        colors,
        dataLabels: {
          enabled: false,
        },

        tooltip: { enabled: true },
        fill: { colors },
        states: {
          hover: { filter: { type: 'none', value: 0 } },
          active: { filter: { type: 'none', value: 0 } },
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: '0%',
              labels: {
                show: false,
              },
            },
          },
        },
      }}
    />
  )
}
