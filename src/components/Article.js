import React, { Component, PropTypes } from 'react'

class Article extends Component {
    static propTypes = {

    }

    constructor(...args) {
        super(...args)
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { text, title } = this.props.article
        const body = this.state.isOpen ? <section>{text}</section> : null
        return (
            <div>
                <a href = "#" onClick = {this.handelClick}>{title}</a>
                {body}
            </div>
        )
    }

    handelClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article