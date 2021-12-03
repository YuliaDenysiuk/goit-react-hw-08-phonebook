import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

function PendingLoader() {
    return <Loader
        type="ThreeDots"
        color="rgb(16, 165, 23)"
        height={80}
        width={80}      
    />;    
}

export default PendingLoader;