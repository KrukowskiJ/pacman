import React, {Component} from 'react';

import Pacman from '../Pacman';
import Ghost from '../Ghost';
import './style.css';

class Board extends Component{
    render() {
        return(
            <div className="board">
               {/* <Food /> */}
                <Pacman />
               <Ghost color="red" /> 
               <Ghost color="pink" /> 
               <Ghost color="blue" /> 
               <Ghost color="yellow" /> 
           
              

            </div>
        )
    }

}

export default Board;