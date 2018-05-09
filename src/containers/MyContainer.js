import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {INCREMENT_COUNTER} from '../actions';

function mapStateToProps(state,ownProps) {
console.log('Mapstatetoprops',state);
    return{
        count:state.reducer.count

    }
}
function mapStateToDispatch(dispatch,ownProps){

    return{
        onIncrementClick:()=>{
            console.log('clikin');
            dispatch({type:INCREMENT_COUNTER});
        }

    }
}
const MyContainer=connect(mapStateToProps,mapStateToDispatch)(Counter);
export default MyContainer;