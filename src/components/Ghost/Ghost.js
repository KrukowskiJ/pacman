import React, {Component} from 'react';

import { ReactComponent as GhostSVG} from './ghost.svg';
import './style.css';

class Ghost extends Component{

    state = {
        direction: 'left',
        position: {
            top: 50*Math.floor(Math.random()*100)%(window.innerHeight-170)+60,
            left: 50*Math.floor(Math.random()*100)%(window.innerWidth-120)+50
            
        }
    }

    componentDidMount() {
        this.changeDirectionInterval = setInterval(this.changeDirection, 1000);
        this.moveInterval = setInterval(this.move, 1000);
    }
    componentWillUnmount() {  //clean intervals
        clearInterval(this.changeDirectionInterval);
        clearInterval(this.moveInterval);
    }
    changeDirection = () => {
        const arrayOfMoves = [ 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
        const movement = Math.floor(Math.random()*3.99);

        this.setState({ direction: arrayOfMoves[movement] });
    }

    move = () => {
        // TODO : REFACTOR
        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;
        const { direction } = this.state;
        const { step, border,size, topScoreBoardHeight} = this.props;


        switch (direction) {
            case 'ArrowUp':
                this.setState({
                    position: {
                        top: Math.max(currentTop - step, 0 ),
                        left:currentLeft
                    }
                });
                break;
            case 'ArrowDown':
                this.setState({
                    position: {
                        top: Math.min(currentTop + step,window.innerHeight - border  - size - topScoreBoardHeight ),
                        left: currentLeft
                    }
                });
                break;
            case 'ArrowRight':
                this.setState({
                    position: {
                        top:currentTop,
                        left: Math.min(currentLeft + step, window.innerWidth - border - size)
                    }
                });
                break;
            case 'ArrowLeft':
                this.setState({
                    position: {
                        top:currentTop,
                        left: Math.max(currentLeft - step, 0)
                    }
                });
                break;
            default:
          
        }
    }
    render() {
        const { color } = this.props;
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