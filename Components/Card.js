import React from 'react';

const Card = (props) => {
    const className = props.className ? props.className : ''
    return <><div className={"ui-card " + className}>
        {props.children}
    </div>
    <style jsx>{`
        .ui-card {
            background-color : white;
            box-shadow: 0px 0px 1px 1px #c5c5c5;
            height: 100%;
            border-radius: 5px;
        }
    `}</style>
    </>
}

export default Card;