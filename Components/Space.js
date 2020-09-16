import React from 'react';
import Card from './Card';
const Space = (props) => {
    const space = props.space;
    return <>
        <div className="space">
            <Card>
                <div className="space__block">
                <img alt={space.mission_name} className="space__img" src={space.links.mission_patch_small} />
                <div className="space__details">
                    <p className="space-name">{space.mission_name} #{space.flight_number}</p>
                    <p>
                        <label>Mission Ids:</label>
                        {space.mission_id.length !== 0 ?
                        <ul>
                            {space.mission_id.map((id) => {
                                return <li className="mission-id" key={"mission-"+id}>{id}</li>
                            })}
                            
                        </ul> : <></> }
                    </p>
                    
                    <p>
                        <label>Launch Year:</label>
                        <span className="value">{space.launch_year}</span>
                    </p>
                    <p>
                        <label>Successfull Launch:</label>
                        <span className="value">{""+space.launch_success}</span>
                    </p>
                    <p>
                        <label>Successfull Landing:</label>
                        <span className="value">
                            {space.rocket && space.rocket.first_stage && space.rocket.first_stage.cores && space.rocket.first_stage.cores[0] && space.rocket.first_stage.cores[0].land_success ? "true" : "false"}
                            
                        </span>
                    </p>
                </div>
                </div>
            </Card>
        </div>
    
    <style jsx>{`
            .space {
                margin-bottom : 10px;
                padding :10px;
                height: 100%;
            }
            .space__block {
                padding: 5px;
                height: 100%;
            }
            .space__details p {
                margin: 5px
            }
            .space__details label {
                font-weight: bold;
                padding-right: 9px;
            }
            .space__img {
                max-width: 100%;
                display: table;
                margin: 0 auto;
            }
        `}
    </style>
    </>
}

export default Space;