import React, {useState} from "react";

const PhaseCheckbox = () => {
    return (
        <div>
            <label class="container">
                <div class="textWrapper">
                One
                </div>
            <input type="checkbox" checked="checked"/>
            <span class="checkmark"></span>
            </label>
        </div>
    );
}

export default PhaseCheckbox;