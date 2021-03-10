import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainFooter = () => {
    return (
        <footer id="MainFooter" className="absolute bottom-0 left-0 right-0 bg-black text-white">
            <div className="container mx-auto p-2 flex justify-center">
                <a href="https://github.com/ahtle/tensorflow-practice" target="_blank"><FontAwesomeIcon icon={faGithub} className="h-8 w-8"/></a>
            </div>
        </footer>
    )
};

export default MainFooter;