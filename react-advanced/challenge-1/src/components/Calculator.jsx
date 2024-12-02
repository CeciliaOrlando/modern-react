import { useReducer } from 'react';

// action types
const SUM = 'SUM'
const SUBSTRACT = 'SUBSTRACT'
const MULTIPLY = 'MULTIPLY'
const UPDATE_NUM_A = 'UPDATE_NUM_A'
const UPDATE_NUM_B = 'UPDATE_NUM_B'

// Initial state
const initialState = {
  numA: 0,
  numB: 0,
  result: 0,
};

export default function Calculator() {

    const [state, dispatch] = useReducer(calculatorReducer, initialState);

    return (
        <div className="rounded-lg border border-slate-400 mt-12 p-8 dark:border-slate-200">
            <h2 className="text-2xl font-bold text-center mb-6">Calculadora</h2>
            <div className="space-y-4">
                <input
                    type="number"
                    value={state.numA}
                    onChange={(e) =>
                      dispatch({type: UPDATE_NUM_A, payload: Number(e.target.value)})
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter first number"
                />
                <input
                    type="number"
                    value={state.numB}
                    onChange={(e) =>
                      dispatch({type: UPDATE_NUM_B, payload: Number(e.target.value)})
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter second number"
                />
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        onClick={() => dispatch({type: SUM})}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Suma
                    </button>
                    <button
                        onClick={() => dispatch({type: SUBSTRACT})}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                    >
                        Resta
                    </button>
                    <button
                        onClick={() => dispatch({type: MULTIPLY})}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
                    >
                        Multiplicación
                    </button>
                </div>
            </div>
            <h3 className="text-xl font-semibold text-center mt-6">
                Resultado: <span className="text-blue-500">{state.result}</span>
            </h3>
        </div>
    );
}

// reducer function
const calculatorReducer = (state, action) => {
  switch (action.type) {
    case SUM:
      return { ...state, result: state.numA + state.numB } ;
    case SUBSTRACT:
      return { ...state, result: state.numA - state.numB };
    case MULTIPLY:
      return { ...state, result: state.numA * state.numB };
    case UPDATE_NUM_A:
      return { ...state, numA: action.payload };
    case UPDATE_NUM_B:
      return { ...state, numB: action.payload };
    default:
      return state;

  }
};
