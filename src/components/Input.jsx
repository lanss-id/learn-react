export default function Input({ type = 'text', ...props }) {
    return <input {...props} className='transition duration-300 border-slate-300 shadow-md rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400' type={type} />
}
