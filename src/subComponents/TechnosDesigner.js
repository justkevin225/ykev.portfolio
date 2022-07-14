import React, { Component } from 'react';
import ProgressBar from './ProgressbarComponent';
class Technos extends Component {
    state = {
        datas: [
            { id: 1, value: "FIGMA", xp: 0.7 },
            { id: 2, value: "ADOBE XD", xp: 0.9 },
            { id: 3, value: "ADOBE ILLUSTRATOR", xp: 1.7 },
        ]
    }

    render() {
        let { datas } = this.state;
        return (
            <div>
                <ProgressBar
                    datas={datas}
                    title="Outils"
                />
            </div>
        );
    }
}

export default Technos;