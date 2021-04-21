import React, { useState } from 'react';

export default function Form(){

    const onChange = e => {
        
    }

    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [checked, setChecked] = useState(false);

    return(
        <form>
            <label>
                Name
                <input 
                type="text" 
                value={formName}
                onChange={onChange}/>
            </label>
            <label>
                eMail
                <input 
                type="text" 
                value={formEmail}
                onChange={onChange}/>
            </label>
            <label>
                Password
                <input 
                type="password"
                onChange={onChange}/>
            </label>
            <label>
                I agree to terms of service
                <input 
                type="checkbox" 
                checked={checked}
                onChange={onChange}/>
            </label>
            <button>Submit</button>
        </form>
    )
}