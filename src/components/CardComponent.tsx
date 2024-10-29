import React from 'react';

const CardComponent = ({ name, description, projectLink, image }: { name: string, description: string, projectLink: string, image: string }) => {
    return (
        <div className="card bg-base-100 shadow-xl w-full sm:w-1/2 lg:w-full m-2">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="ProjectImage"
                    className="rounded-xl w-full h-48 object-contain" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions tooltip tooltip-bottom" data-tip={projectLink}>
                    <a className="btn btn-primary" href={projectLink}>Visit Repository</a>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;