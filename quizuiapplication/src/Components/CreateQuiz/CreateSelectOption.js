import React from 'react';


export default class CreateSelectOption extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            technologies: this.props.techData
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.techData.length > 0) {
            this.setState({
                technologies: newProps.techData
            })
        }
    }

    render() {

        return this.state.technologies.map((item) =>
            <option key={item.id} value={item.name} >{item.name}</option>
        );
    }


}