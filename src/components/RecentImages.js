import SVG from "./SVG"

const RecentImages = () => {
const data =[1,1,1,1,1]

    return (
        <div className="recentImages">
            <div className="imagesButton">
                <p>Recent Images</p>
                <div className="uploadBtn">
                    <button>Upload Image</button>
                </div>
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

export default RecentImages
