import { Component } from "react";
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
    state = {hasError : false}

    static getDerivedDtateFromError() {
        return { hasError: true}
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info)
    }
    render() {
        if (this.state.hasError) {
            return (
                <h2>Listing has an error. <Link to="/"> Click Here</Link> to return to home page
                </h2>
            )
        }
        // if there are any errors in state, component's children will be rendered (Details)
        return this.props.children;
    }
}

export default ErrorBoundary;