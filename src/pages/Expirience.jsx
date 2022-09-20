import lineAM from '../assets/lineAMRed.png'
import software from '../assets/Software.png'
import analyst from '../assets/Analyst.png'
import design from '../assets/Designer.png'
import intern from '../assets/Intern.png'
import multimediaGrade from '../assets/MultimediaEnginiering.png'
import diploma from '../assets/Diploma.png'
import tic from '../assets/TIC.png'
import web from '../assets/Web.png'

const Expirience = () => {
    return (
        <div id='Expirience' className='bg-[#F2F2F2] text-center my-10 w-full fontMontserrat'>
            <p className='text-[#9B293A] text-5xl font-semibold '>WORK EXPIRIENCE</p>
            <div className='flex justify-center py-4'>
                <img src={lineAM} alt="" />
            </div>

            <div className="lg:grid lg:grid-cols-2 gap-10 py-6 content-center mx-8">
                <div className='text-center lg:text-right'>
                    <div className='flex justify-end py-5 w-full content-end'>
                        <img src={software} alt="" />
                    </div>
                </div>

                <div className='text-center lg:text-left content-start'>
                    <p>
                        <br /><br /><span className='font-bold text-[#9B293A] text-lg '>Software Colombia</span>
                        <br />Aug. 2022 to present
                        <span className='font-medium'>
                            <br />I studied, created and developed some features of the
                            <br />software with technologies in order to encourage and
                            <br />improve the user interface and the user experience.</span>
                    </p>
                </div>

                <div className='text-center lg:text-right content-end'>
                    <p>
                        <br /><br /><span className='font-bold text-[#9B293A] text-lg leading-5'>Corporación Unificada Nacional
                            <br /> de Educación Superior - CUN</span>
                        <br />Jan. 2022 - Aug. 2022
                        <span className='font-medium'>
                            <br />I researched, improved and developed some
                            <br />features of the software with technologies that
                            <br />helped improve the customer experience.</span>
                    </p>
                </div>

                <div className='text-center lg:text-left'>
                    <div className='flex justify-start py-5 w-full'>
                        <img src={analyst} alt="" />
                    </div>
                </div>

                <div className='text-center lg:text-right content-end'>
                    <div className='flex justify-end py-5 w-full'>
                        <img src={design} alt="" />
                    </div>
                </div>

                <div className='text-center lg:text-left'>
                    <p>
                        <br /><br /><span className='font-bold text-[#9B293A] text-lg leading-5'>Corporación Unificada Nacional
                            <br /> de Educación Superior - CUN</span>
                        <br />Oct. 2021 - Jan. 2022
                        <span className='font-medium'>
                            <br />I illustrated, improved and developed some web
                            <br />platforms in order to encourage and improve the
                            <br />user experience in the different publication
                            <br />media and said platforms.</span>
                    </p>
                </div>

                <div className='text-center lg:text-right content-end'>
                    <p>
                        <br /><br /><span className='font-bold text-[#9B293A] text-lg leading-5'>Corporación Unificada Nacional
                            <br /> de Educación Superior - CUN</span>
                        <br />Oct. 2021 - Jan. 2022
                        <span className='font-medium'>
                            <br />I studied and improved some features in software
                            <br /> programs with technologies that
                            <br />helped improve the customer experience.</span>
                    </p>
                </div>

                <div className='text-center lg:text-left'>
                    <div className='flex justify-start py-5 w-full'>
                        <img src={intern} alt="" />
                    </div>
                </div>
            </div>

            <p className='text-[#9B293A] text-5xl font-semibold pt-10'>EDUCATION</p>
            <div className='flex justify-center py-4'>
                <img src={lineAM} alt="" />
            </div>
            <div className="lg:grid lg:grid-cols-2 gap-4 pt-6 pb-10 mb-10 content-center mx-8">
                <div className='text-center lg:text-right'>
                    <div className='flex justify-end py-5 w-full content-end'>
                        <img src={multimediaGrade} alt="" />
                    </div>
                </div>

                <div className='text-center lg:text-right content-start'>
                    <div className='flex justify-start py-5 w-full content-start'>
                        <img src={diploma} alt="" />
                    </div>
                </div>

                <div className='text-center lg:text-right'>
                    <div className='flex justify-end py-5 w-full content-end'>
                        <img src={tic} alt="" />
                    </div>
                </div>

                <div className='text-center lg:text-left content-start'>
                    <div className='flex justify-start py-5 w-full content-start'>
                        <img src={web} alt="" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Expirience