import React from 'react';

const Model = (props) => {
    console.log(props.singleData);
    const { image_link, description, integrations, features } = props.singleData;
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="card lg:card-side bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">{description ? description : "Not Found"}</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                    <figure>
                        <img className='w-full h-64' src={image_link && image_link[0]} alt="Album" /></figure>
                </div>

            </div>
        </div>
    );
};

export default Model;