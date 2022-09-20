import line from '../assets/line.png'
import heroionic from '../assets/HeroesIonic.png'
import heroeIonicDescription from '../assets/HeroesIonicDescription.png'
import btnGit from '../assets/btn_git.png'
import btnLink from '../assets/btn_link.png'
import weather from '../assets/clima.png'
import weatherDescription from '../assets/climaDescription.png'
import toDo from '../assets/TDL.png'
import toDoDescription from '../assets/TodoLDescription.png'
import superheroe from '../assets/superheroes.png'
import superheroeDescription from '../assets/superheroesDescription.png'
import cars from '../assets/carsrental.png'
import carsDescription from '../assets/carsrentalDescription.png'
import cacharrero from '../assets/cacharrero.png'
import cacharreroDescription from '../assets/cacharreroDescription.png'
// import  from ''
// import  from ''

export const Brifecase = () => {

    const getDescription = (description) => {
        switch (description) {

            case 1:
                const card = document.querySelector('#heroePhoto');
                card.classList.remove('classvisible');
                card.classList.add('classinvisible');
                const cardD = document.querySelector('#heroeDescription');
                cardD.classList.remove('classinvisible');
                cardD.classList.add('classvisible');
                break;

            case 2:
                const card2 = document.querySelector('#weatherPhoto');
                card2.classList.remove('classvisible');
                card2.classList.add('classinvisible');
                const card2D = document.querySelector('#weatherDescription');
                card2D.classList.remove('classinvisible');
                card2D.classList.add('classvisible');
                break;

            case 3:
                const card3 = document.querySelector('#toDoPhoto');
                card3.classList.remove('classvisible');
                card3.classList.add('classinvisible');
                const card3D = document.querySelector('#toDoDescription');
                card3D.classList.remove('classinvisible');
                card3D.classList.add('classvisible');
                break;

            case 4:
                const card4 = document.querySelector('#superheroesPhoto');
                card4.classList.remove('classvisible');
                card4.classList.add('classinvisible');
                const card4D = document.querySelector('#superheroesDescription');
                card4D.classList.remove('classinvisible');
                card4D.classList.add('classvisible');
                break;

            case 5:
                const card5 = document.querySelector('#carsPhoto');
                card5.classList.remove('classvisible');
                card5.classList.add('classinvisible');
                const card5D = document.querySelector('#carsDescription');
                card5D.classList.remove('classinvisible');
                card5D.classList.add('classvisible');
                break;

            case 6:
                const card6 = document.querySelector('#cacharreroPhoto');
                card6.classList.remove('classvisible');
                card6.classList.add('classinvisible');
                const card6D = document.querySelector('#cacharreroDescription');
                card6D.classList.remove('classinvisible');
                card6D.classList.add('classvisible');
                break;
            default:
                break;
        }

    }

    const getPhoto = (photo) => {
        switch (photo) {

            case 1:
                const card = document.querySelector('#heroeDescription');
                card.classList.remove('classvisible');
                card.classList.add('classinvisible');
                const cardD = document.querySelector('#heroePhoto');
                cardD.classList.remove('classinvisible');
                cardD.classList.add('classvisible');
                break;

            case 2:
                const card2 = document.querySelector('#weatherDescription');
                card2.classList.remove('classvisible');
                card2.classList.add('classinvisible');
                const card2D = document.querySelector('#weatherPhoto');
                card2D.classList.remove('classinvisible');
                card2D.classList.add('classvisible');
                break;

            case 3:
                const card3 = document.querySelector('#toDoDescription');
                card3.classList.remove('classvisible');
                card3.classList.add('classinvisible');
                const card3D = document.querySelector('#toDoPhoto');
                card3D.classList.remove('classinvisible');
                card3D.classList.add('classvisible');
                break;

            case 4:
                const card4 = document.querySelector('#superheroesDescription');
                card4.classList.remove('classvisible');
                card4.classList.add('classinvisible');
                const card4D = document.querySelector('#superheroesPhoto');
                card4D.classList.remove('classinvisible');
                card4D.classList.add('classvisible');
                break;

            case 5:
                const card5 = document.querySelector('#carsDescription');
                card5.classList.remove('classvisible');
                card5.classList.add('classinvisible');
                const card5D = document.querySelector('#carsPhoto');
                card5D.classList.remove('classinvisible');
                card5D.classList.add('classvisible');
                break;

            case 6:
                const card6 = document.querySelector('#cacharreroDescription');
                card6.classList.remove('classvisible');
                card6.classList.add('classinvisible');
                const card6D = document.querySelector('#cacharreroPhoto');
                card6D.classList.remove('classinvisible');
                card6D.classList.add('classvisible');
                break;


            default:
                break;
        }

    }

    return (
        <div id='Brifecase' className='bg-[#F2F2F2] text-center my-10 w-full fontMontserrat'>

            <p className='text-[#9B293A] text-5xl font-semibold uppercase'>Brifecase</p>
            <div className='flex justify-center py-4'>
                <img src={line} alt="" />
            </div>
            <p className='py-5  text-base lg:text-lg px-2 '>
                Below you will see some frontend projects created in my professional development,
                <br />with a brief description, their implementation (if applicable), and
                <br />the repository on GitHub.
            </p>

            <div className="lg:grid lg:grid-cols-3 gap-1  py-6 content-center mx-10 lg:mx-28 justify-center">

                <div className='flex justify-center text-center'  >
                    <div id="heroePhoto" className='flex justify-center py-5 w-full content-center classvisible cursor-pointer  hover:scale-110' onClick={() => getDescription(1)}>
                        <img src={heroionic} alt="" />
                    </div>
                    <div id="heroeDescription" className='flex justify-center py-5 w-full content-center classinvisible cursor-pointer' onClick={() => getPhoto(1)}>
                        <img src={heroeIonicDescription} alt="" />
                        <div className="grid grid-cols-2 gap-2 py-6 content-center mx-28 justify-center">
                            <a href="https://github.com/LizethMartin/Superheroes.git" target="_blank">
                                <img src={btnGit} alt="" />
                            </a>
                            <a href="https://superheroes-c8a25.web.app/home" target="_blank">
                                <img src={btnLink} alt="" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className='text-center content-center'>
                    <div id="weatherPhoto" className='flex justify-center py-5 w-full content-center cursor-pointer hover:scale-110' onClick={() => getDescription(2)}>
                        <img src={weather} alt="" />
                    </div>
                    <div id="weatherDescription" className='flex justify-center py-5 w-full content-center classinvisible cursor-pointer' onClick={() => getPhoto(2)}>
                        <img src={weatherDescription} alt="" />
                        <div className="grid grid-cols-2 gap-2 py-6 content-center mx-28 justify-center">
                            <a href="https://github.com/LizethMartin/Weather-LizethMartinez.git" target="_blank">
                                <img src={btnGit} alt="" />
                            </a>
                            <a href="https://weather-lizeth.web.app/" target="_blank">
                                <img src={btnLink} alt="" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className='text-center content-center'>
                    <div id="toDoPhoto" className='flex justify-center py-5 w-full content-center cursor-pointer hover:scale-110' onClick={() => getDescription(3)}>
                        <img src={toDo} alt="" />
                    </div>
                    <div id="toDoDescription" className='flex justify-center py-5 w-full content-center classinvisible cursor-pointer' onClick={() => getPhoto(3)}>
                        <img src={toDoDescription} alt="" />
                        <div className="grid grid-cols-2 gap-2 py-6 content-center mx-28 justify-center">
                            <a href="https://github.com/LizethMartin/App-to-do-list---Lizeth-Mart-nez.git" target="_blank">
                                <img src={btnGit} alt="" />
                            </a>
                            <a href="https://todolist-lizeth.web.app/" target="_blank">
                                <img src={btnLink} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='text-center content-center'>
                    <div id="superheroesPhoto" className='flex justify-center py-5 w-full content-center cursor-pointer hover:scale-110' onClick={() => getDescription(4)}>
                        <img src={superheroe} alt="" />
                    </div>
                    <div id="superheroesDescription" className='flex justify-center py-5 w-full content-center classinvisible cursor-pointer' onClick={() => getPhoto(4)}>
                        <img src={superheroeDescription} alt="" />
                        <div className="grid grid-cols-2 gap-2 py-6 content-center mx-28 justify-center">
                            <a href="https://github.com/LizethMartin/Superheroes-LizethMartinez.git" target="_blank">
                                <img src={btnGit} alt="" />
                            </a>
                            <a href="https://heroes-lizeth.web.app/inicio" target="_blank">
                                <img src={btnLink} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='text-center content-center'>
                    <div id="carsPhoto" className='flex justify-center py-5 w-full content-center cursor-pointer hover:scale-110' onClick={() => getDescription(5)}>
                        <img src={cars} alt="" />
                    </div>
                    <div id="carsDescription" className='flex justify-center py-5 w-full content-center classinvisible cursor-pointer' onClick={() => getPhoto(5)}>
                        <img src={carsDescription} alt="" />
                        <div className="grid grid-cols-2 gap-2 py-6 content-center mx-28 justify-center">
                            <a href="https://github.com/LizethMartin/CarsRental.git" target="_blank">
                                <img src={btnGit} alt="" />
                            </a>
                            <a href="https://carsrental-bc4a2.web.app/" target="_blank">
                                <img src={btnLink} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='text-center content-center'>
                    <div id="cacharreroPhoto" className='flex justify-center py-5 w-full content-center cursor-pointer hover:scale-110' onClick={() => getDescription(6)}>
                        <img src={cacharrero} alt="" />
                    </div>
                    <div id="cacharreroDescription" className='flex justify-center py-5 w-full content-center classinvisible cursor-pointer' onClick={() => getPhoto(6)}>
                        <img src={cacharreroDescription} alt="" />
                        <div className="grid grid-cols-2 gap-2 py-6 content-center mx-28 justify-center">
                            <a href="https://github.com/lizethMartinez19/Cacharrero.git" target="_blank">
                                <img src={btnGit} alt="" />
                            </a>
                            <a href="https://cacharrero-demo.web.app/" target="_blank">
                                <img src={btnLink} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
