
export default function Button ({ title, icon, disabled = false }) {

  return (
    <>
      <button disabled={disabled} className={`w-fit h-fit flex rounded-sm gap-1 border-[#BFBFBF] border-[3px] p-2 ${disabled ? 'text-gray-500 ' : ' '} `} >
        {icon}
        <div className={`text-xs font-semibold `}>
          {title}
        </div>
      </button>
    </>
  )
}