import "./Dashboard.css";
import React, { useState } from "react";
import Display from "./Display";
import InputForm from "./InputForm";

function Dashboard() {
    const [peakSunHours, setPeakSunHours] = useState("");

    return (
        <div>
            <h1>Peak Sun Hours</h1>
            <InputForm setPeakSunHours={setPeakSunHours} />
            <Display  id="display" peakSunHours={peakSunHours} />
        </div>
    );
}

export default Dashboard;