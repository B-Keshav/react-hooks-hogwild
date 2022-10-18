function HogExtraDetails({ hog }) {
    const { greased, "highest medal achieved": medal, specialty, weight } = hog

    return (
        <>
            <p>Greased:
                <strong>{greased.toString()}</strong>
            </p>
            <p>Highest Medal Achieved:
                <strong>{medal}</strong>
            </p>
            <p>Specialty:
                <strong>{specialty}</strong>
            </p>
            <p>Weight:
                <strong>{weight}</strong>
            </p>
        </>
    )
}

export default HogExtraDetails