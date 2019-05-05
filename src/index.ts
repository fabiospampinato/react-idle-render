
/* IMPORT */

import './types';
import * as React from 'react';

/* REACT IDLE RENDER */

class Idle extends React.Component<{ timeout?: number }, {}> {

  /* VARIABLES */

  _idleId: number = 0;

  /* LIFECYCLE */

  componentWillMount () {

    this.requestIdle ();

  }

  componentWillUnmount () {

    if ( !this._idleId ) return;

    cancelIdleCallback ( this._idleId );

  }

  shouldComponentUpdate () {

    this.requestIdle ();

    return false;

  }

  /* IDLE */

  requestIdle = () => {

    if ( this._idleId ) return;

    this._idleId = requestIdleCallback ( () => this.setIdle (), { timeout: this.props.timeout || 1000 } );

  }

  setIdle = () => {

    delete this._idleId;

    this.forceUpdate ();

  }

  /* RENDER */

  render () {

    return React.createElement ( this.props.children as any ); //TSC

  }

}

/* EXPORT */

export default Idle;
