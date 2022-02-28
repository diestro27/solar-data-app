import React from "react";
import "./Display.css";

function Display(props) {
    return (
        <div id={props.id}>
            <table>
                <tr>
                    <th>Peak Sun Hours kWh/m^2/day</th>
                    <td>{props.peakSunHours}</td>
                </tr>
            </table>
            <p>*Average global horizontal irradiance per day is used for peak sun hours in this case</p>
        </div>
    );
}

export default Display;