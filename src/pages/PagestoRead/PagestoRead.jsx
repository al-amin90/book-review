import React, { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { getStorage } from "../../ulils/localStorage";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#FFBB28', '#FF8042', '#FF8042', '#0088FE'];


const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagestoRead = () => {
    const [readBooks, setReadBooks] = useState([])
    const allBooks = useLoaderData();

    const navigation = useNavigation();

    useEffect(() => {
        const storeReadBooks = getStorage("read");

        const storedBooks = [];
        for (const id of storeReadBooks) {
            const book = allBooks.find(book => id === book.bookId)
            storedBooks.push(book)
        }
        setReadBooks(storedBooks)
    }, [])


    if (navigation.state === "loading") return <Loader></Loader>
    return (

        <div className="flex items-center justify-center bg-[#13131308] rounded-xl">
            <ResponsiveContainer width="100%" height={450}>
                <BarChart
                    width={1200}
                    height={450}
                    data={readBooks}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <Tooltip />
                    <YAxis />
                    <Bar
                        dataKey="totalPages"
                        fill="#8884d8"
                        shape={<TriangleBar />}
                        label={{ position: "top" }}
                    >
                        {readBooks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer >
        </div >
    );
};

export default PagestoRead;