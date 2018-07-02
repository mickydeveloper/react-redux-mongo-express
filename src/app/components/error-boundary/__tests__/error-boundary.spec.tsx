import * as React from 'react';
import { shallow } from 'enzyme';
import { ErrorBoundary } from './../error-boundary';

describe( "testing <ErrorBoundary>", () => {
    it("error boundary match the snapshot", () => {
        const result = shallow(<ErrorBoundary/>);
        expect(result).toMatchSnapshot();
    });

    it("rendered the error message on errorcatched", () => {
        const result = shallow(<ErrorBoundary/>);
        result.setState({ hasError: true });
        expect(result.find('h1').at(0).text()).toBe('Something went wrong.');
    });
})
