import React from 'react';

const Stack = () => {

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h4>Tech Stack</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h6>Front-end</h6>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">Reactjs</a> / HTML / CSS</li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://reactrouter.com/">React Router</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/json-server">Node Fake Server</a> + <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/casual">Casual mock</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/">Bootstrap</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Stack;