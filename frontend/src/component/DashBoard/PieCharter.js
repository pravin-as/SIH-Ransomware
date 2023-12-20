import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 5000, label: 'DP' },
            { id: 1, value: 20000, label: 'NS' },
            { id: 2, value: 70000, label: 'SAT' },
            { id: 3, value: 10000, label: 'SSM' },
            { id: 4, value: 50000, label: 'ACIM' },
            { id: 5, value: 30000, label: 'IM' },
            { id: 6, value: 40000, label: 'RM' },
          ],
        },
      ]}
      width={520}
      height={300}
    />
  );
}