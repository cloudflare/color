import React from 'react';

import { DebugConsumer } from '../pages/_app';

export default (WrappedComponent, variantCount) => {
  return class extends React.Component {
    state = {
      variant: this.props.variant || WrappedComponent.defaultProps.variant || 1
    };

    handleVariantSelect = event => {
      this.setState({
        variant: parseInt(event.target.value, 10)
      });
    };

    // componentDidMount() {
    //   this.interval = setInterval(() => {
    //     this.setState({
    //       variant: Math.ceil(Math.random() * variantCount)
    //     })
    //   }, 100)
    // }

    // componentWillUnmount() {
    //   clearInterval(this.interval)
    // }

    render() {
      return (
        <DebugConsumer>
          {value => [
            value && (
              <select
                onChange={this.handleVariantSelect}
                value={this.state.variant}
                style={{
                  display: this.props.display || 'block',
                  // position: 'absolute'
                }}
              >
                {[...Array(variantCount).keys()].map(variant => (
                  <option key={variant + 1} value={variant + 1}>
                    Variant {variant + 1}
                  </option>
                ))}
              </select>
            ),

            <WrappedComponent {...this.props} variant={this.state.variant} />
          ]}
        </DebugConsumer>
      );
    }
    // render() {
    //   return (
    //     <DebugConsumer>
    //       {value => value ? <WrappedComponent {...this.props} variant={this.state.variant} /> : <WrappedComponent {...this.props} />}
    //     </DebugConsumer>
    //   );
    // }
  };
};
