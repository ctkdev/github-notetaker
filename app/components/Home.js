import React from 'react';
//import Router from 'react-router';
import { Mixins, RaisedButton, Styles } from 'material-ui';
import FullWidthSection from './FullWidthSection';
let { StylePropable, StyleResizable } = Mixins;
let { Colors, Spacing, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager().getCurrentTheme();

let Home = React.createClass({
    mixins: [StylePropable, StyleResizable],

    render() {
        let style = {
            paddingTop: Spacing.desktopKeylineIncrement
        };

        return (
            <div style={style}>
                {this._getHomePageHero()}
            </div>
        );
    },

    _getHomePageHero() {
        let styles = {
            root: {
                backgroundColor: Colors.cyan500,
                overflow: 'hidden'
            },
            svgLogo: {
                marginLeft: (window.innerWidth * 0.5) - 130 + 'px',
                width: '420px'
            },
            tagline: {
                margin: '16px auto 0 auto',
                textAlign: 'center',
                maxWidth: '575px'
            },
            label: {
                color: ThemeManager.palette.primary1Color
            },
            githubStyle: {
                margin: '16px 32px 0px 8px'
            },
            demoStyle: {
                margin: '16px 32px 0px 32px'
            },
            h1: {
                color: Colors.darkWhite,
                fontWeight: Typography.fontWeightLight
            },
            h2: {
                //.mui-font-style-title
                fontSize: '20px',
                lineHeight: '28px',
                paddingTop: '19px',
                marginBottom: '13px',
                letterSpacing: '0'
            },
            nowrap: {
                whiteSpace: 'nowrap'
            },
            taglineWhenLarge: {
                marginTop: '32px'
            },
            h1WhenLarge: {
                fontSize: '56px'
            },
            h2WhenLarge: {
                //.mui-font-style-headline;
                fontSize: '24px',
                lineHeight: '32px',
                paddingTop: '16px',
                marginBottom: '12px'
            }
        };

        styles.h2 = this.mergeStyles(styles.h1, styles.h2);

        if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
            styles.tagline = this.mergeStyles(styles.tagline, styles.taglineWhenLarge);
            styles.h1 = this.mergeStyles(styles.h1, styles.h1WhenLarge);
            styles.h2 = this.mergeStyles(styles.h2, styles.h2WhenLarge);
        }

        return (
            <FullWidthSection style={styles.root}>
                <img style={styles.svgLogo} src="images/material-ui-logo.svg" />
                <div style={styles.tagline}>
                    <h1 style={styles.h1}>material ui</h1>
                    <h2 style={styles.h2}>
                        A Set of React Components <span style={styles.nowrap}>
              that Implement</span> <span style={styles.nowrap}>
              Google&apos;s Material Design</span>
                    </h2>
                </div>
            </FullWidthSection>
        );
    }
});


module.exports = Home;