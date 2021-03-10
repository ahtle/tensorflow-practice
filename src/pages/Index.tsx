import Section from '../components/home/Section';

const Home = () => {
    return (
        <div id="Home">
            
            {/* intro section */}
            <Section
                class="bg-gray-600 text-white"
            >
                <>
                    <h1 className="text-center">Practice site for...</h1>
                    <div className="grid md:grid-cols-2 gap-4 pt-10">
                        <div id="react-wrapper" className="flex flex-col items-center mb-5 md:mb-0">
                            <h1 className="text-react-color text-bold mb-5">React</h1>
                            <p className="text-center">A JavaScript library for building user interfaces</p>
                        </div>
                        <div className="flex flex-col items-center mb-5 md:mb-0">
                            <h1 className="text-tensorflow-color text-bold mb-5">Tensorflow</h1>
                            <p className="text-center">an end-to-end open source platform for machine learning</p>
                        </div>
                    </div>
                </>
            </Section>
            
            {/* topics section */}
            <Section>
                <>
                    <h1 className="text-center">Mini projects:</h1>
                </>
            </Section>

        </div>
    )
}

export default Home;