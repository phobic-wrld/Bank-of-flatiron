function Row({ arr }) {
    const rows = arr.map((transaction, index) => {
        return (
            <tbody key={index + 1}>
                <tr >
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                </tr>
            </tbody>

        )

    }
    )
    return (
        <>
            {rows}

        </>)
}
export default Row;