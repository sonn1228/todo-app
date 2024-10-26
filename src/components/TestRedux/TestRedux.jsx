import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '../../stores/slices/counterSlice';

const { increment, decrement } = counterSlice.actions;
function TestRedux() {
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();


    return (<>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button>{counter}</button>
        <button onClick={() => dispatch(decrement(10))}>+</button>
    </>)
}

export default TestRedux