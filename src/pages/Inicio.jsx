import ilustration from '../assets/Ilustration.png'
import logo from '../assets/logoAM.png'

const Inicio = () => {
    return (
        <>
            {/* <div className='lg:absolute bottom-40 left-[42vw]'>
                <img src={logo} alt="" />
            </div> */}
            <div className="grid lg:grid-cols-2  grid-cols-1">
                <div>
                    <img className='w-full' src={ilustration} alt="" />
                </div>
                <div className='bg-[#9B293A] p-8 lg:p-2'>
                    <div className=' lg:absolute lg:inset-x-0 lg:bottom-20 '>
                        <p className='font-bold text-white text-right text-5xl lg:text-7xl lg:px-10 fontMontserrat'>LIZETH <br /> MARTINEZ</p>
                        <p className='font-light text-white text-right text-3xl lg:px-10 fontMontserrat'>MULTIMEDIA ENGINEER</p>
                        <p className='font-light text-white text-right text-2xl lg:px-10 py-10 fontRoboto'>Multimedia Engineer, with knowledge in the
                            <br /> integration of visual media that contribute to
                            <br /> transforming the way of communication and
                            <br /> entertainment 📱🎥.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inicio
