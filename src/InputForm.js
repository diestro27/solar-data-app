import React, { useState } from "react";
import { getAverageGHI } from "./utils/api";
import "./InputForm.css";

function InputForm({ setPeakSunHours }) {
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
        getAverageGHI(formData.zip)
        .then(data => {
            console.log(data);
            setPeakSunHours(data.outputs.avg_ghi.annual);
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
            <label htmlFor="zip">Zip Code
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
            <button type="submit">Go</button>
        </form>
    );
}

export default InputForm;