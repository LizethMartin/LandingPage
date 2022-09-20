import photo from '../assets/photo.png'
import line from '../assets/line.png'
import download from '../assets/btn_download.png'
import pdf from '../pdf/CVLizethMartinez.pdf'

const About = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(pdf).then(response => {
            response.blob().then(blob => {
                //Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CVLizethMartinez.pdf';
                alink.click();
            })
        })
    }

    return (

        <div id='About' className='bg-[#F2F2F2] text-center my-10 w-full'>
            <p className='text-[#9B293A] text-5xl font-semibold fontMontserrat'>ABOUT ME</p>
            <div className='flex justify-center py-4'>
                <img src={line} alt="" />
            </div>
            <div className="lg:grid lg:grid-cols-3 gap-4 py-6 content-center">
                <div >
                    <p className='text-center pb-8 lg:text-right fontMontserrat'>
                        <br /><br /><span className='font-bold text-[#9B293A] text-lg '>FULL NAME</span>
                        <br />Lizeth Alejandra Martínez
                        <br /><br /><span className='font-bold text-[#9B293A] text-lg '>BIRTHDAY</span>
                        <br />19 Jan 1999
                        <br /><br /><span className='font-bold text-[#9B293A] text-lg '>BIRTHPLACE</span>
                        <br />Sogamoso, Boyacá
                        <br /><br /><span className='font-bold text-[#9B293A] text-lg '>HOBBIES</span>
                        <br />Kickboxing
                    </p>
                </div>
                <div className='flex justify-center'>
                    <img src={photo} alt="" />
                </div>
                <div>
                    <p className='text-center lg:text-left fontMontserrat'>
                        <br /><br /><span className='font-bold text-[#9B293A] text-lg '>ADDRESS</span>
                        <br />Tunja, Boyacá
                        <br /><br /><span className='font-bold text-[#9B293A] text-lg '>#HOME</span>
                        <br />7479468
                        <br /><br /><span className='font-bold text-[#9B293A] text-lg '>EMAIL</span>
                        <br />lizzi2412@gmail.com
                        <br /><br /><span className='font-bold text-[#9B293A] text-lg '>WEB</span>
                        <br />www.lamc.co
                    </p>
                </div>
            </div>
            <p className='py-5  text-base lg:text-lg px-2 fontMontserrat'>Multimedia Engineer with one year of experience in the development of high quality
                <br /> web applications in PWA format; working with technologies like Angular, Ionic,
                <br />TypeScript, NodeJs, Firebase and knowledge in React, SQL,  Java, and Python. I have
                <br />skills in the development of innovative products  in terms of design and interactivity;
                <br />always looking for opportunities for technological and scientific advancement, in order
                <br />to create products that meet strong standards in the UX and UI area.
            </p>
            <div className='flex justify-center py-5'>
                <button onClick={onButtonClick}>
                    <img src={download} alt="" />
                </button>
            </div>
            <p className='text-[#9B293A] text-5xl font-semibold pt-10 fontMontserrat'>MY SKILLS</p>
            <div className='flex justify-center py-4 '>
                <img src={line} alt="" />
            </div>
            <div className="lg:grid lg:grid-cols-2 gap-4 pt-6 pb-10 mb-10 content-center lg:mx-56">
                <div className="mx-10">
                    <div className=" bg-white rounded-md border-solid border-2 border-[#9B293A] dark:bg-white mx-10 my-4">
                        <div className="bg-[#9B293A] text-xs  font-medium  text-white text-center p-2 leading-none rounded-sm w-[95%]"   > JAVASCRIPT</div>
                    </div>
                    <div className=" bg-white rounded-md border-solid border-2 border-[#9B293A] dark:bg-white mx-10 my-4">
                        <div className="bg-[#9B293A] text-xs font-medium  text-white text-center p-2 leading-none rounded-sm w-[93%]"  > ANGULARJS</div>
                    </div>
                    <div className=" bg-white rounded-md border-solid border-2 border-[#9B293A] dark:bg-white mx-10 my-4">
                        <div className="bg-[#9B293A] text-xs font-medium  text-white text-center p-2 leading-none rounded-sm w-[90%]"  > GITHUB</div>
                    </div>
                </div>
                <div className="mb-10 mx-10">
                    <div className=" bg-white rounded-md border-solid border-2 border-[#9B293A] dark:bg-white mx-10 my-4">
                        <div className="bg-[#9B293A] text-xs font-medium  text-white text-center p-2 leading-none rounded-sm w-[91%]"  > PYTHON</div>
                    </div>
                    <div className=" bg-white rounded-md border-solid border-2 border-[#9B293A] dark:bg-white mx-10 my-4">
                        <div className="bg-[#9B293A] text-xs font-medium  text-white text-center p-2 leading-none rounded-sm w-[94%]"  > FIREBASE</div>
                    </div>
                    <div className=" bg-white rounded-md border-solid border-2 border-[#9B293A] dark:bg-white mx-10 my-4">
                        <div className="bg-[#9B293A] text-xs font-medium  text-white text-center p-2 leading-none rounded-sm w-[92%]"  > REACTJS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About