import React, {Fragment} from 'react'

const CheckboxTypes = (props) => {
    const updateCheckboxType = e => {
        props.updateCheckboxType(e.target.value);
    }

    return (
        <div>
        { props.items.map( (item, i) => (
            <Fragment key={i}>
                <input
                id={`check-${item}-${props.type}-type`}
                className="inp-search-type"
                type="checkbox"
                value= {item}
                onChange={updateCheckboxType}
                checked={props.selectedItems.includes(item)}/>
                <label htmlFor={`check-${item}-${props.type}-type`}>{item}</label>
            </Fragment>
            ))
        }
        </div>
    )
}

export default CheckboxTypes;