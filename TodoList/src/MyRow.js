import React from 'react';
import ReactDOM from 'react-dom';


const MyRow = (props) => {

    let ret = 
    <tr>
        <td>{props.valor}</td>
        <td>
            <input type="button" value="x" onClick={() => props.onRemove(props.valor) }/>
        </td>
        <td>
            <input type="button" value="e" onClick={() => props.onEdit(props.valor) }/>
        </td>
    </tr>
    return(ret);

}

export default MyRow;