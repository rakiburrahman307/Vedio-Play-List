import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Videos = ({ data }) => {
    const { id, title, thumbnailUrl, author, duration, views } = data;
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure className='relative'><img className='h-52' src={thumbnailUrl} alt={title} />
                <div className="badge badge-neutral absolute right-0 bottom-2">{duration}</div></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='pb-10 h-10'>
                    <p>Author: {author}</p>
                    <p>Views: {views}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/video/${id}`} className="btn btn-outline btn-circle btn-info">Watch</Link>
                </div>
            </div>
        </div>
    );
};
Videos.propTypes = {
    data: PropTypes.object.isRequired,
};
export default Videos;