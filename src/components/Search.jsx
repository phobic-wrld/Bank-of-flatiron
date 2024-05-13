function Search({ searched, handleChange }) {
    return (
        <>
            <input type="text" className="form-control" placeholder="Enter Description" aria-label="Username" aria-describedby="basic-addon1" value={searched} onChange={handleChange} />
        </>
    )
}
export default Search;