/**
 * Created by christopher on 7/7/15.
 */
import React from 'react';
import Router from 'react-router';
import {AppBar, AppCanvas, IconButton, Menu, Styles} from 'material-ui';
import FullWidthSection from './FullWidthSection';

let RouteHandler = Router.RouteHandler;
let ThemeManager = new Styles.ThemeManager();
let { Colors, Typography } = Styles;

class Master extends React.Component {

    constructor() {
        super();
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        }
    }

    getStyles() {
        let darkWhite = Colors.darkWhite;
        return {
            footer: {
                backgroundColor: Colors.grey900,
                textAlign: 'center'
            },
            a: {
                color: darkWhite
            },
            p: {
                margin: '0 auto',
                padding: '0',
                color: Colors.lightWhite,
                maxWidth: '335px'
            },
            iconButton: {
                color: darkWhite
            }
        };
    }

    render() {
        let styles = this.getStyles();
        let title = 'Title';

        return (
            <AppCanvas>

                <AppBar
                    title={title}
                    zDepth={0}/>

                <RouteHandler />

                <FullWidthSection style={styles.footer}>
                    <p style={styles.p}>
                        Hand crafted with love by the engineers at <a style={styles.a} href="http://call-em-all.com">Call-Em-All</a> and our
                        awesome <a style={styles.a} href="https://github.com/callemall/material-ui/graphs/contributors">contributors</a>.
                    </p>
                </FullWidthSection>

            </AppCanvas>
        );
    }
}

Master.contextTypes = {
    router: React.PropTypes.func
};

Master.childContextTypes = {
    muiTheme: React.PropTypes.object
};

module.exports = Master;
