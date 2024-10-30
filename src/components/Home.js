import {Link} from 'react-router-dom';
import Invoices from './Invoices';
function Home(){
    return(
        // Creating a navigation for invoices
        <div><nav>
        <Link to='/invoices'>Invoices</Link>
      </nav></div>
    );
}
export default Home;