import React, {Component} from 'react'


class AddFolderSideBar extends Component {
    handleBack = () =>{
        this.props.history.push('/');
    }
    render() {
        return (
            <button className="back"
                    onClick={this.handleBack}
                    >Back</button>
        )
    }

}
export default AddFolderSideBar;