import React from 'react';

class TruncatedText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            truncatedText: ''
        };
    }

    componentDidMount() {
        const { text, maxLength } = this.props;
        this.truncateText(text, maxLength);
    }

    truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            const truncatedText = text.substring(0, maxLength) + '...';
            this.setState({ truncatedText: truncatedText });
        } else {
            this.setState({ truncatedText: text });
        }
    };

    render() {
        const { truncatedText } = this.state;
        return <p>{truncatedText}</p>;
    }
}

export default TruncatedText;
