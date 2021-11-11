import './SideVideo.css';


const SideVideo = (props) => {
    return (
        
        <div className={props.addClass}>
            <iframe class="sideVideos" src={props.videoLink} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title={props.videoTitle} />
        </div>
        
    )
}

export default SideVideo