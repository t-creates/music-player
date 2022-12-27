import React from 'react';

const SongCard = ({ image, title, subTitle }) => {
  return (
    <div className="card w-96 glass">
      <figure className=""><img src={image} alt="Song" className="" /></figure>
      <div className="card-body">
        <h2 className="card-title text-ellipsis overflow-hidden">
          {title.length > 24 ? `${title.substring(0, 24)}...` : title}
        </h2>
        <p className="truncate hover:text-clip">
          {subTitle.length > 32 ? `${subTitle.substring(0, 32)}...` : subTitle}
        </p>
        <div className="card-actions justify-end">
          <button
            type="button"
            className="btn btn-ghost bg-slate-800 hover:bg-red-800 hover:animate-pulse"
          >
            Listen
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
