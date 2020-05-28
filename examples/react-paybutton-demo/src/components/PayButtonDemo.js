import React from 'react'
const PayButtonDemo = () => {
    return (
        <div className='pay-button-demo'>
        <h1>Example Pay Button</h1>
        <pay-button buttonid="7b2d5583-a178-434d-8048-516f784f8f92"
                    onsettled={(purchase)=>alert(JSON.stringify(purchase))} price=".00002"/>
    </div>
)
}
export default PayButtonDemo