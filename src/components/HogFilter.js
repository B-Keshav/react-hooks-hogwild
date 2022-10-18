function HogFilter({ greasedButtom, sortButton }) {
    return (
        <>
            <div className="greased_filter">
                <p>Grease Filters</p>
                <button value="All" onClick={greasedButtom}>All</button>
                <button value={true} onClick={greasedButtom}>Greased</button>
                <button value={false} onClick={greasedButtom}>Not Greased</button>
            </div>
            <br />
            <div className="name_weight_filter">
                <p>Other Fitlers</p>
                <button value="All" onClick={sortButton}>All</button>
                <button value="weight" onClick={sortButton}>Weight</button>
                <button value="name" onClick={sortButton}>Name</button>
            </div>
            <br />
        </>
    )
}

export default HogFilter