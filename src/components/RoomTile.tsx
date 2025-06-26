
interface RoomTileProps {
    title: string;
    description: string;
    image: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const RoomTile: React.FC<RoomTileProps> = ({ title, description, image, buttonText = "Explore", onButtonClick,
}) => {
    return (
        <div className="room-tile">
            <div className="row align-items-center pt-lg-5 pt-3">
                <div className="col-md py-3">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button className="btn btn-warning" onClick={onButtonClick}>
                        {buttonText}
                    </button>
                </div>
                <div className="col-md">
                    <img src={image} alt={title} className="img-fluid rounded" />
                </div>
            </div>
        </div>
    );
};

export default RoomTile;
