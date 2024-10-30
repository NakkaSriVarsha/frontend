import {useState} from 'react';
//using js config we should create invoices dynamically
// using useContext the invoice number should be incremented
function Invoices(){
    const [invoices,setinvoices] = useState({});
    return(
        <div>
            <button>Add</button>
            <table>

            </table>

        </div>
    );
}
export default Invoices;