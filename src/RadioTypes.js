import React, {Fragment} from 'react'

const RadioType = (props) => {
    const updateRadioType = e => {
        props.updateRadioType(e.target.value);
    }

    return (
        <div>
        { props.items.map( (item, i) => (
            <Fragment key={i}>
                <input
                id={`rad-${item}-${props.type}-type`}
                className="inp-search-type"
                type="radio"
                value= {item}
                onChange={updateRadioType}
                checked={item=== props.selectedItem}/>
                <label htmlFor={`rad-${item}-${props.type}-type`}>{item}</label>
            </Fragment>
            ))
        }
        </div>
    )
}

export default RadioType;