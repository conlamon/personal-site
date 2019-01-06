import React, {Component} from 'react';

import './css/default.css';
import './css/layout.css';
import './css/media-queries.css';
import './css/magnific-popup.css';

export default class Footer extends Component {

    render() {
        const networks = this.props.data.social.map(
            network => <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        ) || "";
        return (
            <footer>

                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {networks}
                        </ul>

                        <ul className="copyright">
                            <li>&copy; Copyright 2019 Connor Lamon</li>
                            <li>Layout by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                        </ul>

                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i
                        className="icon-up-open"></i></a></div>
                </div>
            </footer>
        )
    };
};