import React from "react";
import "./Display.css";

function Display(props) {

    const sunHoursTableHeadingText = props.peakSunHours === "" ? "Peak Sun Hours kWh/m^2/day" 
        : "Peak Sun Hours kWh/m^2/day:";

    return (
        <div id={props.id}>
            <table>
                <tbody>
                    <tr>
                        <th>{sunHoursTableHeadingText}</th>
                        <td>{props.peakSunHours}</td>
                    </tr>
                </tbody>
            </table>
            <p>At a 25 degree tilt angle</p>
        </div>
    );
}

export default Display;