import Section from '../components/Section';
import ProjectCard from '../components/home/ProjectCard';


const projects = [
    {name: 'Object detection', description: 'Are you really a "person"? Turn on your webcam and find out!', path: '/object-detection', image: 'tf-object-detection-logo.png'},
];

const Home = () => {
    return (
        <div id="Home">
            
            {/* intro section */}
            <Section
                class="bg-gray-600 text-white"
            >
                <>
                    <h1 className="text-center mb-10">Practice site for...</h1>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div id="react-wrapper" className="flex flex-col items-center mb-5 md:mb-0">
                            <h1 className="text-react-color text-bold mb-5">React</h1>
                            <p className="text-center">A JavaScript library for building user interfaces</p>
                        </div>
                        <div className="flex flex-col items-center mb-5 md:mb-0">
                            <h1 className="text-tensorflow-color text-bold mb-5">Tensorflow</h1>
                            <p className="text-center">An end-to-end open source platform for machine learning</p>
                        </div>
                    </div>
                </>
            </Section>
            
            {/* topics section */}
            <Section>
                <>
                    <h1 className="text-center mb-14">Mini projects:</h1>
                    <div className="flex justify-center">
                        
                        <a className="project-card mx-8 my-4 rounded overflow-hidden cursor-pointer transition group shadow hover:shadow-lg"
                            href="https://ahtle.github.io/tensorflow-image-classification/#/image-classification"
                        >
                            <div className="img-wrapper flex items-center border-b border-gray-200 bg-blue-50">
                                <img src={`${process.env.PUBLIC_URL}/images/tf-image-classification-logo.png`} alt="Image classification"/>
                            </div>
                            <div className='card-body p-4 group-hover:bg-yellow-600 transition'>
                                <p className="text-bold text-blue-900 text-lg mb-2 group-hover:text-white">Image classification</p>
                                <p className="text-gray-400 group-hover:text-white transition">Upload images and I'll tell you what it is!</p>
                            </div>
                        </a>

                        {projects.map(p => {
                            return (
                                <ProjectCard 
                                    key={p.name}
                                    name={p.name}
                                    description={p.description}
                                    image={p.image}
                                    path={p.path}
                                />
                            )
                        })}


                    </div>
                </>
            </Section>

        </div>
    )
}

export default Home;