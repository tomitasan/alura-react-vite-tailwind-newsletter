import Input from "../input/input"

/* eslint-disable react/prop-types */
const Form = ({ onsubmit }) => {

    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()

        const name = event.target[0].value
        const email = event.target[1].value

        onsubmit({ name, email })
    }

    return <form onSubmit={safeSubmit} className="h-full w-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
        <Input type="text" required placeholder="Insira seu nome..." />
        <Input type="email" required placeholder="Insira seu e-mail..." />
        <button type="submit" className="py-1 px-5 w-full max-w-sm bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 dark:text-gray-200 uppercase outline-none hover:shadow-md hover:animate-pulse hover:shadow-gray-500 hover:dark:shadow-black">Seguir</button>
    </form>
}

export default Form