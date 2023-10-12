type ButtonProps = {
    label: string,
    clickProp: (e: any) => void
}

const Input = ({label, clickProp} : ButtonProps) => {
  return (
    <div className="p-4 text-center border-2 border-black bg-gray-200 rounded-md" onClick={clickProp}>
      {label}
    </div>
  );
}

export default Input;
