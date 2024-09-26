"use client"
import React from "react"
import { useState } from "react"
import { Button } from "./ui/moving-border"
function Counter(){
    const [counter,setCounter]=useState(0)
    function incrementHandler(){
        setCounter(counter+1)
    }
    function decrementHandler(){
        setCounter(counter-1)
    }
    function resetHandler(){
        setCounter(0)
    }
    return(
        <>
            <div className="w-full h-[50rem] flex justify-center items-center dark:bg-black bg-black  dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2]  flex-col gap-10">
                <div className="text-orange-200 border border-orange-200 p-3 rounded-full text-2xl bg-transparent ">Increment && Decrement</div>
               <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151] ">
                <button onClick={incrementHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
                    +
                </button>
                <div className=" gap-12 font-serif text-5xl">
                    {counter}
                </div>
                <button onClick={decrementHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
                    -
                </button>
                
               </div>
               <Button onClick={resetHandler} className="text-orange-200 border border-orange-200 p-3 rounded-full text-2xl bg-transparent">Reset</Button>

            </div>
        </>
    )
}
export default Counter