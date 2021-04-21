import React from 'react';

export default function Form(){
    return(
        <form>
            <label>
                Name
                <input type="text"/>
            </label>
            <label>
                eMail
                <input type="text"/>
            </label>
            <label>
                Password
                <input type="password"/>
            </label>
            <label>
                I agree to terms of service
                <input type="checkbox"/>
            </label>
            <button>Submit</button>
        </form>
    )
}