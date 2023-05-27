import clsx from 'clsx'

export default function Button(props) {
    const { className = 'bg-black', text, children, type = 'submit' } = props
    return (
        <button
            {...props}
            type={type}
            className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 inline-flex justify-center whitespace-nowrap items-center gap-x-2 text-white rounded-md h-10 px-4 ')}>
            {text || children}
        </button>
    )
}
