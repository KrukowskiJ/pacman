import React, { Component, createRef } from 'react';

import './style.css';
import { ReactComponent as PacmanSVG} from './pacman.svg';

class Pacman extends Component{

    state = {
        direction: 'right',
        position: {
            top:0,
            left:0
        }

    }

    constructor(props) {
        super(props);
        this.pacmanRef = React.createRef();
    }

    componentDidMount() {
        this.pacmanRef.current.focus();
    }


    handleKeyDown = (event) => {
        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;
        const { step } = this.props;


        switch (event.key) {
            case 'ArrowUp':
                this.setState({
                    position: {
                        top:currentTop - step,
                        left:currentLeft
                    },
                    direction: 'up'
                });
                break;
            case 'ArrowDown':
                this.setState({
                    position: {
                        top:currentTop + step,
                        left:currentLeft
                    },
                    direction: 'down'
                });
                break;
            case 'ArrowRight':
                this.setState({
                    position: {
                        top:currentTop,
                        left:currentLeft + step
                    },
                    direction: 'right',
                });
                break;
            case 'ArrowLeft':
                this.setState({
                    position: {
                        top:currentTop,
                        left:currentLeft - step
                    },
                    direction: 'left'
                });
                break;
            default:
          
        }

    }

    render(){
        const{ direction , position} = this.state;
        return(
            <div 
            ref = {this.pacmanRef}           
            className={`pacman , pacman-${direction}`}
            tabIndex = "0"
            onKeyDown = {this.handleKeyDown}
            style = {position}>

                 <PacmanSVG/>

            </div>
        );
    }
}

Pacman.defaultProps = {
    step: 50, //50px move
    size: 50,    // pacman size 50x50px
    //TODO: move to config
    border: 10 * 2,
    topScoreBoardHeight: 50
}

export default Pacman;