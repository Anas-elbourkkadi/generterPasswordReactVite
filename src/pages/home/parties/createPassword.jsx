import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { PiAlignBottomSimpleBold } from "react-icons/pi";



const CreatePassword = () => {
    const [valueRange, setValueRange] = useState(10);
    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(false);
    const [numb, setNumber] = useState(false);
    const [symbol, setSymbols] = useState(false);
    let [password, setPassword] = useState('...');

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letterUpper = letters.split("");
    const letterLower = letters.toLowerCase().split("");

    const num = "0123456789".split("");
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?/".split("");

    let generterPassword = (list) => {
        let lett = Math.floor((list.length - 1) * Math.random())

        return list[lett]

    }

    let check = () => {
        password = ''
        while (password.length < valueRange && (uppercase || lowercase || numb || symbol)) {

            if (uppercase) password += generterPassword(letterUpper);

            if (lowercase) password += generterPassword(letterLower);

            if (numb) password += generterPassword(num);

            if (symbol) password += generterPassword(symbols);


        }
        setPassword(password);
    }

    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center capitalize   text-[#cdcbd4]">
                <div className="flex flex-col items-center w-[50%] gap-4">
                    <h1 className="text-[#686672] text-2xl">password genter</h1>
                    <div className="bg-[#24232b] w-[75%] flex justify-between items-center px-5 py-4">
                        <h1> {password}</h1>
                        <FaRegCopy className=" text-[#a5feb0]" />
                    </div>
                    <div className="bg-[#24232b] w-[75%] px-5 py-5 shadow-2xl space-y-3">
                        <div className="flex  justify-between items-center">
                            <p>charcter length</p>
                            <p className="text-[25px] text-[#a5feb0]">{valueRange}</p>
                        </div>
                        <input
                            onChange={(e) => { setValueRange(e.target.value) }}
                            className="w-full accent-[#a5feb0]"
                            type="range"
                            id="myRange"
                            min="0"
                            max="20"
                        ></input>
                        <div className=" space-x-3">
                            <input id="up" type="checkbox" className="accent-[#a5feb0]" onChange={(e) => setUppercase(e.target.checked)} />
                            <label htmlFor="up">include uppercase letters</label>
                        </div>

                        <div className=" space-x-3">
                            <input id="lower" type="checkbox" onChange={(e)=>setLowercase(e.target.checked)} className="accent-[#a5feb0] " />
                            <label htmlFor="lower">include lowercase letters</label>
                        </div>

                        <div className=" space-x-3">
                            <input id="nu" type="checkbox" onChange={(e)=>setNumber(e.target.checked)} className="accent-[#a5feb0] " />
                            <label htmlFor="nu">include numbers</label>
                        </div>

                        <div className=" space-x-3">
                            <input id="sy" onChange={(e)=>setSymbols(e.target.checked)} type="checkbox" className="accent-[#a5feb0] " />
                            <label htmlFor="sy">include symbols</label>
                        </div>

                        <div className="flex justify-between items-center bg-[#18171f] py-5 px-3 uppercase">
                            <h1 className="text-[20px]">serngth</h1>
                            <div className="flex items-center justify-center">
                                <p>meduim</p>
                                <PiAlignBottomSimpleBold />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={() => check()} className="border-[#98dfa0] border-2 w-full py-3 text-[#98dfa0] hover:bg-[#98dfa0] hover:text-[#24232b] ">generter</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CreatePassword;