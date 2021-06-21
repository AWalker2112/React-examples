

const SingleContactCard = (props) => {
    console.log(props);
    const{albumId, title, url, thumbnailUrl} = props.item;

    return (
        <>
            <div className="contact-card">
                <p>Album id: {albumId}</p>
                <p>{title}</p>
                <img
                    src={url}
                    width={100}
                    height={100}
                    alt={thumbnailUrl}
                />
            </div>
        </>
    );

}

export default SingleContactCard;