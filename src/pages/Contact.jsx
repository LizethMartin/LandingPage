import line from '../assets/line.png'
import send from '../assets/btn_send.png'
import git from '../assets/btn_gitGeneral.png'
import linkeind from '../assets/btn_linkeind.png'
import instagram from '../assets/btn_instagram.png'
import whatsapp from '../assets/btn_wa.png'
import { useState } from 'react'

export const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    //Validación formulario
    const handleSubmit = (e) => {
        //Limpiar nuestro formulario
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
    }

    return (
        <div className='bg-[#F2F2F2] text-center my-10 w-full fontMontserrat'>

            <p className='text-[#9B293A] text-5xl font-semibold uppercase '>CONTACT ME</p>

            <div className='flex justify-center py-4'>
                <img src={line} alt="" />
            </div>

            <form onSubmit={handleSubmit} className=" 'flex justify-center  py-10 px-5 sm:mx-10 md:mx-20 lg:mx-64">
                <div className="mb-5">
                    <input
                        id="name"
                        type="text"
                        placeholder="Full name"
                        className="border-2 w-full p-2 mt-2 rounded-md border-[#9B293A] placeholder-[#707070] fontMontserrat font-semibold"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-5 grid lg:grid-cols-2 gap-6">
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 rounded-md border-[#9B293A] placeholder-[#707070] fontMontserrat font-semibold"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        id="phone"
                        type="number"
                        placeholder="Phone"
                        className="border-2 w-full p-2 mt-2 rounded-md border-[#9B293A] placeholder-[#707070] fontMontserrat font-semibold"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <textarea
                        id="message"
                        type="text"
                        placeholder="Message"
                        rows="15"
                        className="border-2 w-full p-2 mt-2 rounded-md border-[#9B293A] placeholder-[#707070] fontMontserrat font-semibold"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className='flex justify-center py-5 mb-5'>
                    <button >
                        <img src={send} alt="" />
                    </button>
                </div>
            </form>

            <div className='fixed right-0 top-8 bg-[#D8971E] w-[5%]  rounded-l-md'>
                <a className='flex justify-center  mt-6' href="https://github.com/LizethMartin" target="_blank">
                    <img src={git} alt="" />
                </a>
                <a className='flex justify-center my-2' href="https://www.linkedin.com/in/lizeth-mart%C3%ADnez-739b331b3/" target="_blank">
                    <img src={linkeind} alt="" />
                </a>
                <a className='flex justify-center my-2' href="https://www.instagram.com/lizethalejandramartinez8/" target="_blank">
                    <img src={instagram} alt="" />
                </a>
                <a className='flex justify-center mb-6' href="https://wa.me/573193676720?text=Hola%20Lizeth!%20😊" target="_blank">
                    <img src={whatsapp} alt="" />
                </a>
            </div>
        </div>
    )
}
