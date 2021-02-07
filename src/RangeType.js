import React, { useState } from 'react';

const RangeType = props => {
    const [radio, setRadio] = useState('');
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');

    const setToLesserThen=()=> {
        setRadio("lesserThen");
        setMaxValue('');
    }

    const setToGreaterThen=()=> {
        setRadio("greaterThen");
        setMinValue('');
    }

    const minValueChange=e=> {
        setMinValue(e.target.value);
        props.setValue(encodeURIComponent(`<${e.target.value}`));
    }

    const maxValueChange=e=> {
        setMaxValue(e.target.value);
        props.setValue(encodeURIComponent(`>${e.target.value}`));
    }

    return (
        <>
            <input
                id={`rad-range-${props.type}-min`}
                className="inp-search-type"
                type="radio"
                value= "lesserThen"
                checked={radio === "lesserThen"}
                onChange={setToLesserThen}
            />
            <input
                id={`inp-${props.type}-min`}
                className="inp-textbox"
                type="number"
                value={minValue}
                onChange={minValueChange}
                disabled={radio!=="lesserThen"}
                placeholder="enter lesser value"
            />
            <input
                id={`rad-range-${props.type}-max`}
                className="inp-search-type"
                type="radio"
                value= "greaterThen"
                checked={radio === "greaterThen"}
                onChange={setToGreaterThen}
            />
            <input
                id={`inp-${props.type}-max`}
                className="inp-textbox"
                type="number"
                value={maxValue}
                onChange={maxValueChange}
                disabled={radio!=="greaterThen"}
                placeholder="enter greater value"
            />
        </>
    )
}

export default RangeType;