import React from "react";
import "./Display.css";

function Display(props) {
    return (
        <div id={props.id}>
            <table>
                <tbody>
                    <tr>
                        <th>Peak Sun Hours kWh/m^2/day</th>
                        <td>{props.peakSunHours}</td>
                    </tr>
                </tbody>
            </table>
            <p>At a 25 degree tilt angle</p>
        </div>
    );
}

export default Display;