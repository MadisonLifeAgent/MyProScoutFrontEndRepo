import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented } from "./counterSlice";

export function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    function handleDecrement() {
        dispatch(decremented());
    }

    function handleIncrement() {
        dispatch(incremented());
    }

    return (
        <div>
            <div>
                <button onClick={handleDecrement}>-</button>
                    <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}