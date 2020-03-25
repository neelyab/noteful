import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class NoteSideBar extends Component {
    render(){
        console.log(this.props.folder)
        return(
            <div>
                <h2>{this.props.folder.name}</h2>
                <button className="add-folder"
                // onClick={this.props.history.push('/')}
                >Back</button>
            </div>
        )
    }
}
export default withRouter(NoteSideBar)