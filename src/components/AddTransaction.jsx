import { useState } from "react";

function AddTransaction({ handleSubmit }) {
    const [data, setData] = useState({
        date: "",
        description: "",
        category: "",
        amount: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };
    const handleSubmits = (e) => {
        e.preventDefault();
        handleSubmit(data);
        setData({
            date: "",
            description: "",
            category: "",
            amount: "",
        })
    };
    return (
        <div className="container">
            <form onChange={handleChange} onSubmit={handleSubmits}>
                <label>Date</label>
                <input
                    type="date"
                    onChange={handleChange}
                    className="border-2 col-2"
                    name="date"
                    value={data.date}
                    placeholder="date"
                />
                <input
                    type="text"
                    onChange={handleChange}
                    className="border-2 col-3 "
                    name="description"
                    value={data.description}
                    placeholder="description"
                />
                <input
                    type="text"
                    onChange={handleChange}
                    className="border-2 col-3"
                    name="category"
                    value={data.category}
                    placeholder="category"
                />
                <input
                    type="number"
                    onChange={handleChange}
                    className="border-2 col-3 "
                    name="amount"
                    value={data.amount}
                    placeholder="amount"
                />
                <button type="submit" className="btn btn-danger mx-auto" >Add Transaction</button>
            </form>
        </div>
    );
}
export default AddTransaction;