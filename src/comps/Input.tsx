type InputProps = {
    changeProp: (e: any) => void
}

const Input = ({changeProp} : InputProps) => {
  return (
    <div className="text-4xl border-b-2 border-slate-500 bg-slate-100 rounded-t-md w-2/4 h-2/4 p-2">
      <input type="text" id="linkInput" className="border-0 bg-transparent outline-none w-full p-2" onChange={changeProp}/>
    </div>
  );
}

export default Input;
