
export default function Button ({ title, icon, disabled = false, textColor, borderColor }) {

  return (
    <>
      <button style={{
        color: textColor,
        borderColor: borderColor
      }} disabled={disabled} className={`w-[72px] h-fit flex justify-center items-center gap-1 rounded-lg border-[#BFBFBF] border-[3px] p-2 outline-none ${disabled ? 'text-gray-500 cursor-not-allowed ' : ' '} `} >
        {icon}
        <div className={`text-xs font-semibold `}>
          {title}
        </div>
      </button>
    </>
  )
}