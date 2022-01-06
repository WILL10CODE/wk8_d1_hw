import React, { Component } from 'react'

export default class About extends Component {
    constructor() {
        super();
        this.state = {
            about:"page"
        }
    }

    loopThroughItems (listOfItems) {
        return listOfItems.map(myItem => <li className="list-group-item">{myItem}</li>)
    }

    render() {
        return (
            <div>
                <h2>About Page!</h2>
                {this.loopThroughItems(this.props.items)}
                
            </div>
        )
    }
}
