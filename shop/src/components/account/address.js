import React from 'react';
import Form from "./address/addressForm"
import Display from "./address/addressdisplay"
function Address() {
    return (<>
        <Form />
        <div class="pt-2 row">
            <Display />
            <Display />
        </div>
    </>);
}

export default Address;