import SVG from "./SVG"

const AllImages = () => {
    const data=[1,1,1,1,1,1,1,1,1,1]
    return (
        <div className="AllImages">
            <div className="imagesButton">
                <p>All Images</p>
            </div>
            <div className="images">
                {
                   data.map(each => {
                       return <SVG />
                   }) 
                }
            </div>
        </div>
    )
}

export default AllImages
