import React from 'react'
import keystore from 'keystore-idb'

class KeyStore extends React.Component {

  state = {
    ks: null,
    publicKey: null,
    text: 'hey there',
    signature: null
  }

  async componentDidMount() {
    const ks = await keystore.init({ type: "rsa" })
    const publicKey = await ks.publicReadKey()
    const signature = await ks.sign(this.state.text)
    this.setState({ ks, publicKey, signature })
  }

  handleChange = async (evt) => {
    evt.preventDefault()
    const text = evt.target.value
    const signature = await this.state.ks.sign(text)
    this.setState({ text, signature })
  }

  render() {
    return(
      <div style={{
        width: '100%',
        margin: '0 16px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          border: '1px solid',
          padding: '16px',
          width: '60%',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          fontSize: 16
        }}>
          <h5>Public Key</h5>
          { this.state.publicKey }

          <h5>Text</h5>
          <input type='text' onChange={this.handleChange} value={this.state.text}></input>

          <h5>Signature</h5>
          { this.state.signature }
        </div>
      </div>
    )
  }
}

export default KeyStore
