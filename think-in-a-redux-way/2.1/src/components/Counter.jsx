import { connect } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";

function Counter({count, increment, decrement}) {

    if(count <0){
        alert("Counter can't be negative");
        count = 0;
    }

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );

}


const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        count: state.value,
    };
};

const mapDispathToProps = (dispatch) => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value)),
    };
}

export default connect(mapStateToProps, mapDispathToProps)(Counter);