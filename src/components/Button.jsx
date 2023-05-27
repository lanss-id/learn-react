import clsx from 'clsx'

export default function Button(props) {
  const { className = 'bg-blue-500', text, children, type = 'submit' } = props
  return (
    <button
      {...props}
      type={type}
      className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white rounded-md px-4 py-2')}>
      {text || children}
    </button>
  )
}
