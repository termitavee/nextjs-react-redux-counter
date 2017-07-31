import React from 'react';
import { render } from 'react-dom';
import { initStore} from '../components/store';
import withRedux from 'next-redux-wrapper'
import Counter from '../components/contador';

class Calculo extends React.Component {
    render() {
        return (
            <div>

                <Counter start={0} variation={1} />

            </div>
        )
    }
}

export default withRedux(initStore)(Calculo);
//export default Calculo;
