import React from 'react'

const FAKE_REQ = {
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
}

class Webauthn extends React.Component {

  handleClick = async () => {
    await navigator.credentials.create({ publicKey: FAKE_REQ });
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
