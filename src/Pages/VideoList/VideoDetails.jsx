import { Link, useLoaderData } from "react-router-dom";

const VideoDetails = () => {
    const videoDetails = useLoaderData();
    const { title, videoUrl, description, author, views } = videoDetails;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl pt-5 px-3 md:px-14">
            <div>
                <video className="w-full h-96" controls loop>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Author: {author}</p>
                <p>Views: {views}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to='/' className="btn btn-outline btn-circle btn-warning">Back</Link>
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;