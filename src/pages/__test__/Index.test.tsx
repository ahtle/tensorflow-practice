import { mount } from 'enzyme';
import HomePage from '../Index';
import { MemoryRouter } from 'react-router-dom';

it("renders HomePage without crashing", () => {
    const component = mount(<MemoryRouter><HomePage /></MemoryRouter>);
    expect(component).toMatchSnapshot();
});