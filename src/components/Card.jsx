function Card({ children }) {
    return <div className='shadow-md text-black rounded-lg overflow-hidden'>{children}</div>
}

function Title({ children }) {
    return (
        <div className='p-4 border-b bg-slate-100'>
            <h1 className='text-xl'>{children}</h1>
        </div>
    )
}

function Body({ children }) {
    return <div className='leading-relaxed p-4'>{children}</div>
}

function Footer({ children }) {
    return <div className='p-4 bg-slate-100'>{children}</div>
}

Card.Title = Title
Card.Body = Body
Card.Footer = Footer

export default Card
