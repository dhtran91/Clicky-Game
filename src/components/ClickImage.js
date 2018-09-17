import React from 'react';
import "./ClickImage.css"
const ClickImage = props => (
<img className="click-image" src={props.src} onClick={() => props.onClick(props.id)}></img>
)

export default ClickImage;
