type InputProps = {
    title: string,
    changeProp: (e: any) => void
}

const Input = ({title, changeProp} : InputProps) => {
  return (
    <div className="p-2">
      <h2 className="px-4 text-lg">{title}</h2>
      <div className="text-xl border-b-2 border-slate-500 bg-gray-200 rounded-t-md p-2 m-1">
        <input type="text" id="linkInput" className="border-0 bg-transparent outline-none w-full p-2" value={'https://github.com/Murnster/React-QR-Generator'} onChange={changeProp}/>
      </div>
    </div>
  );
}

export default Input;
