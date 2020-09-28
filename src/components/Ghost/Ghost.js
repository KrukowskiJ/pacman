import React, {Component} from 'react';

import { ReactComponent as GhostSVG} from './ghost.svg';
import './style.css';

class Ghost extends Component{

    state = {
        direction: 'left',
        position: {
            top: 50*8,
            left: 50*3
            
        }
    }



    render() {
        const { color } = this.props;
        console.log('color:', color);
        return(
            <div style = {this.state.position} className="ghost">
            <GhostSVG className={`ghost-${color}`}/>
            </div>
        )
    }

}

Ghost.defaultProps = {
    color: 'red',
    step: 50, //50px move
    size: 50,    // pacman size 50x50px
    //TODO: move to config
    border: 10 * 2,
    topScoreBoardHeight: 50
}
export default Ghost;