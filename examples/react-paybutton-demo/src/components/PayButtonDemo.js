import React from 'react';
import PayButton from '@payburner/paybutton-js-react';
class PayButtonDemo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<React.Fragment>
            <PayButton buttonid={'7b2d5583-a178-434d-8048-516f784f8f92'}
                       price={'.00589'} onSettled={(purchase)=>alert(JSON.stringify(purchase))} />
        </React.Fragment>);
    }
}
export default PayButtonDemo