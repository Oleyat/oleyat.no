function Unlist({ onClick }: Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>) {
    return (
    <>

        <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded transition duration-150' onClick={onClick}>
            Unlist
        </button>
    </>
    )}

function Publish({ onClick }: Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>) {
    return (
    <>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded transition duration-150' onClick={onClick}>
            Publish
        </button>
    </>
    )
}


function Delete({ onClick }: Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>) {
    return (
    <>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded transition duration-150' onClick={onClick}  >
            Delete
        </button>
    </>
    )
}


export { Publish, Delete, Unlist }