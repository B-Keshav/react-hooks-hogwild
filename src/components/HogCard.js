import { useState } from "react"
import HogExtraDetails from "./HogExtraDetails"

function HogCard({ hog }) {
    const { name, image } = hog
    const [moreDetails, setMoreDetails] = useState(false)

    function handleClick() {
        setMoreDetails((newclick) => !newclick)
    }

    return (
        <div>
            <div className="image">
                <img src={image} alt="Pig Img" />
            </div>
            <h1>{name}</h1>
            <div>
                {moreDetails ? <HogExtraDetails hog={hog} /> : ""}
            </div>
            <button onClick={handleClick}>{moreDetails ? "Less Details" : "More Details"}</button>
        </div>
    )
}

export default HogCard