import { shallow } from 'enzyme';
import MainHeader from '../MainHeader';

describe("<MainHeader />", () => {
    it("renders MainHeader without crashing", () => {
        const component = shallow(<MainHeader />);
        expect(component).toMatchSnapshot();
    });
    
    it("render images", () => {
        const component = shallow(<MainHeader />);
        const reactPath = `${process.env.PUBLIC_URL}/images/logo192.png`;
        const tfPath = `${process.env.PUBLIC_URL}/images/tf-logo.png`;
        expect(component.find('img[data-testId="react-logo"]').prop("src")).toEqual(reactPath);
        expect(component.find('img[data-testId="tf-logo"]').prop("src")).toEqual(tfPath);
    });
});