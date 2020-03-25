import React, {Component} from 'react'

class NoteSideBar extends Component {
    render(){
        console.log(this.props.folder)
        return(
            <div>{this.props.folder.name}</div>
        )
    }
}
export default NoteSideBar