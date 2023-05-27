export default function PlaceContentCenter({ children }) {
    return (
        <div className='bg-white'>
            <div className='bg-slate-500/20 text-violet-50 min-h-screen flex justify-center items-center antialiased tracking-tighter'>
                <div className='max-w-lg w-full '>{children}</div>
            </div>
        </div>
    )
}
