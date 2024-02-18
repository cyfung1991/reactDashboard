import "./bigChartBox.scss";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    title: string;
    chartData: object[];
    chartSetting: {
        [key: string]: string;
    };
}

const BigChartBox = (props: Props) => {
  return (
    <div className="bigChartBox">
        <h1>{props.title}</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
                <AreaChart
                width={500}
                height={400}
                data={props.chartData}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                {
                    Object.entries(props.chartSetting).map(([key, color]) => (
                        <Area
                            type="monotone"
                            dataKey={key}
                            stackId="1"
                            stroke={color}
                            fill={color}
                        />
                    ))
                }
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BigChartBox