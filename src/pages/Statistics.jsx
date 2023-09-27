import { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


let total = 12
let donation = JSON.parse(localStorage.getItem('card')) || 0
console.log(donation)

let donationLength = 0;

if (donation.length > 0) {
    donationLength = donationLength + donation.length
}

const data = [
    { name: 'Group A', value: total },
    { name: 'Group A', value: donationLength }
];

data[0].value = data[0].value - donationLength
console.log(data[0].value)


const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>

    );
};

export default class Example extends PureComponent {

    render() {
        return (
            <div>
                <div className='flex justify-center'>
                    <ResponsiveContainer width={300} height={300}>
                        <PieChart width={50} height={50}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                </div>
                <div className='flex flex-col md:flex-row items-center md:text-center md:justify-evenly md:gap-20 gap-3'>
                    <h2 >Your donation :<span className='border-2 border-[#00C49F] w-[50px] md:px-10 px-4 bg-[#00C49F]'></span> </h2>
                    <h2>Total donation :<span className='border-2 border-[#FF444A] w-[50px] md:px-10 px-4 bg-[#FF444A]'></span> </h2>
                </div>
            </div>
        );
    }
}