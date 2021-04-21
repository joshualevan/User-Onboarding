import React, { useState } from 'react';

export default function Form(){

    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [checked, setChecked] = useState(false);

    return(
        <form>
            <label>
                Name
                <input type="text" value={formName}/>
            </label>
            <label>
                eMail
                <input type="text" value={formEmail}/>
            </label>
            <label>
                Password
                <input type="password"/>
            </label>
            <label>
                I agree to terms of service
                <input type="checkbox" checked={checked}/>
            </label>
            <button>Submit</button>
        </form>
    )
}