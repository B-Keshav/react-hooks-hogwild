import HogCard from "./HogCard"

function HogList({ hogs }) {

    const renderedHogs = hogs.map((hog) => {
        return <HogCard key={hog.name} hog={hog} />
    })

    return (
        <div>
            {renderedHogs}
        </div>
    )

}

export default HogList