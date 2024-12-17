import React from 'react';
import Form from "./address/addressForm"
import Display from "./address/addressdisplay"
function Address(theme) {
    return (<>
        <Form theme={theme}/>
        <div class="pt-2 row m-0">
            <Display theme={theme}/>
        </div>
    </>);
}

export default Address;