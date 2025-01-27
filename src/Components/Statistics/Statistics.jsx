import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import Footer from "../Footer/Footer";
const Statistics = () => {
    const data = [
        {
            name: 'Smartphone X1',
            price: 699.99,
        },
        {
            name: 'Wireless Earbuds Pro',
            price: 149.99,
        },
        {
            name: 'Laptop Pro 15',
            price: 1299.99,
        },
        {
            name: 'Smartwatch 360',
            price: 249.99,
        },
        {
            name: 'Tablet Z10',
            price: 499.99,
        },
        {
            name: 'Gaming Headset GX',
            price: 89.99,
        },
        {
            name: 'Portable Speaker Max',
            price: 199.99,
        },
        {
            name: 'Monitor Ultra HD',
            price: 399.99,
        },
        {
            name: 'Mechanical Keyboard X',
            price: 129.99,
        },
        {
            name: 'Wireless Mouse Pro',
            price: 79.99,
        },
        {
            name: 'Smart Home Camera',
            price: 159.99,
        },
        {
            name: 'Fitness Tracker Band',
            price: 99.99,
        },
        {
            name: 'Drone Pro 4K',
            price: 799.99,
        },
        {
            name: 'External SSD 1TB',
            price: 149.99,
        },
        {
            name: 'Smart Bulb RGB',
            price: 29.99,
        },
        {
            name: 'Power Bank 20000mAh',
            price: 49.99,
        },
        {
            name: 'Noise-Cancelling Headphones',
            price: 299.99,
        },
        {
            name: 'Smart Door Lock',
            price: 249.99,
        },
        {
            name: 'VR Headset Advanced',
            price: 399.99,
        },
        {
            name: 'Action Camera X',
            price: 199.99,
        },
        {
            name: 'Bluetooth Tracker',
            price: 24.99,
        },
        {
            name: 'Smart Thermostat',
            price: 199.99,
        },
        {
            name: '4K Streaming Stick',
            price: 49.99,
        },
        {
            name: 'Portable Projector',
            price: 599.99,
        },
        {
            name: 'Wireless Charging Pad',
            price: 39.99,
        },
        
        
    ];
    return (
        <div>
            <div className="h-44 border w-full bg-[#9538E2]">
                <div className="text-center text-white space-y-4 mt-3">
                    <p className="md:text-2xl text-xl">Statistics</p>
                    <p className="text-sm md:text-lg">
                        Explore the latest gadgets that will take your experience to the
                        next level. From smart <br /> devices to the coolest accessories, we
                        have it all!
                    </p>
                </div>
            </div>

            {/* chart */}
            <div>
                <ResponsiveContainer width={"100%"} height={300}>
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis dataKey="" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" stackId="a" fill="#9538E2" />
                        {/* <Bar dataKey="uv" stackId="a" fill="#9538E2" /> */}
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <Footer ></Footer>
        </div>
    );
};

export default Statistics;

