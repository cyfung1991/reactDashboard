import "./pieChartBox.scss";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';

type Props = {
    title: string;
    dataKey: string;
    chartData: { name: string; color: string; value: number; }[];
}

const PieChartBox = (props: Props) => {
  return (
    <div className="pieChartBox">
        <h1>{props.title}</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={300}>
                <PieChart>
                    <Tooltip
                        contentStyle={{background: "white", borderRadius: "5px"}}
                    />
                    <Pie
                        data={props.chartData}
                        innerRadius={"70%"}
                        outerRadius={"90%"}
                        paddingAngle={5}
                        dataKey={props.dataKey}
                    >
                        {(props.chartData).map((data) => (
                            <Cell key={data.name} fill={data.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="options">
            {props.chartData.map((data) => (
                <div className="option">
                    <div className="title">
                        <div className="dot" style={{backgroundColor: data.color}}></div>
                        <span>{data.name}</span>
                    </div>
                    <span>{data.value}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PieChartBox;