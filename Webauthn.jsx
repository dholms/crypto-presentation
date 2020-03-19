import React from 'react'

class Webauthn extends React.Component {

  getReq = () => ({
    // These are fake params for the purpose of the demo!
    challenge: Uint8Array.from([0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7]),
    rp: {
      id: window.location.hostname,
      name: 'Fission'
    },
    pubKeyCredParams: [{
      alg: -8,
      type: "public-key"
    }],
    attestation: 'indirect',
    user: {
      id: Uint8Array.from([0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3]),
      name: 'fission',
      displayName: 'fission'
    }
  })

  handleClick = async () => {

    await navigator.credentials.create({ publicKey: this.getReq() });
  }

  render() {
    return(
      <button onClick={this.handleClick} style={{
        padding: '8px 16px',
        fontSize: 24
      }}>
        Example
      </button>
    )
  }
}

export default Webauthn
