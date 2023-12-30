type SimpleButtonProps = {
  children?: React.ReactNode;
}

const SimpleButton = ({children, ...props} : SimpleButtonProps) => {
  return (
    <div>
      <button className="px-10 py-2 bg-red-700 text-white-100 rounded-md border-2 border-red-400">{children}</button>
    </div>
  )
}

export default SimpleButton