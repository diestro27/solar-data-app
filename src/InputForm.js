import React, { useState } from "react";
import { getSunlightYearlyAverage } from "./utils/api";
import "./InputForm.css";

function InputForm({ setPeakSunHours, setYearlyAverage }) {
    const initialFormState = {
        address: "",
        zip: "",
    }

    const [formData, setFormData] = useState({ ...initialFormState });

    const handleChange = ({ target }) => {
        const value = target.type === "checkbox" ? target.checked : target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const goButton = document.querySelector("#go");
        goButton.blur();
        getSunlightYearlyAverage(formData.zip)
        .then(data => {
            const hours = data.outputs.solrad_annual.toFixed(2);
            setPeakSunHours(hours);
        })
        .catch(error => {
            console.log(error);
        }); 
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* 
            <label htmlFor="address">
                <input 
                    id="address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    placeholder="123 Somewhere St"
                    value={formData.address}
                />
            </label>
            */}
            <label htmlFor="zip">Zip Code (U.S. only)
                <br />
                <input 
                    id="zip"
                    type="text"
                    name="zip"
                    onChange={handleChange}
                    pattern="[0-9]{5}"
                    placeholder="12345"
                    value={formData.zip}
                />
            </label>
            <button id="go" type="submit" className="btn">Go</button>
        </form>
    );
}

export default InputForm;