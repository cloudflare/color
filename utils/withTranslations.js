import React from 'react';
import ReactDOMServer from 'react-dom/server';

const languages = ['ar', 'iw', 'ja', 'ru', 'es'];

const API_KEY = 'AIzaSyCkfVdHAzdDHy3Gp_qT8SNobY7YZH81pCk';

export default WrappedComponent => {
  return class extends React.Component {
    state = {
      language: null,
      children: this.props.children
    };

    handleMouseEnter = () => {
      this.interval = setInterval(() => {
        let newLanguage;

        if (this.state.language === null) {
          newLanguage = languages[0];
        } else {
          let currIndex = languages.indexOf(this.state.language);

          if (currIndex === languages.length - 1) {
            newLanguage = languages[0];
          } else {
            newLanguage = languages[currIndex + 1];
          }
        }

        this.setState({
          language: newLanguage
        });

        fetch(
          `https://content-translation.googleapis.com/language/translate/v2?key=${API_KEY}&alt=json`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              target: newLanguage,
              q: this.props.children,
              source: 'en'
            })
          }
        )
          .then(res => res.json())
          .then(json => {
            this.setState({
              children: json.data.translations[0].translatedText
            });
          })
          .catch(err => console.log(err));
      }, 1000);
    };

    handleMouseLeave = () => {
      this.setState({
        children: this.props.children
      });

      clearInterval(this.interval);
    };

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      const { children, ...props } = this.props;

      return (
        <WrappedComponent
          {...props}
          children={this.state.children}
          css={{
            ...props.css,
            cursor: 'wait'
          }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      );
    }
  };
};
