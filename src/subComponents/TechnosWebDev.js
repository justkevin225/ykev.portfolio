import React, { Component } from 'react';
import ProgressBar from './ProgressbarComponent';
class Technos extends Component {
    state = {
        datas: [
            { id: 1, value: "HTML 5 / CSS 3 / JS", xp: 1.7 },
            { id: 2, value: "REACT JS", xp: 0.8 },
            { id: 3, value: "BOOTSTRAP", xp: 1.0 },
        ]
    }

    render() {
        let { datas } = this.state;
        return (
            <div>
                <ProgressBar
                    datas={datas}
                    title="Languages & Framework"
                />
            </div>
        );
    }
}

export default Technos;