import { useState } from 'react';
// to add or edit invoices
// created a form which allows to edit invoices
function Invoicedetail() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    return (
        <div>
            <form >
                <label>Enter name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>Enter price:
                    <input
                    type="number"
                    value={price}
                    onChange={(e)=> setPrice(e.target.value)}
                    />
                </label>
            </form>
        </div>
    );
}
export default Invoicedetail;