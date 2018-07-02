import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Login.css'

class Login extends Component {
  render() {
    return (
      <div style={styles.app}>
        <div style={styles.contentContainer}>
          <img src={require('../assets/logo.png')} style={styles.logo}/>
          <div style={styles.headingContainer}>
            <div style={styles.heading}>Login</div>
          </div>
          <div style={styles.formContainer}>
            Email address
            <input style={styles.textInput} placeholder={'someone@example.com'} />
            Password
            <input style={styles.textInput} placeholder={'Password'} type={'password'} />
            <Link to={'/'} style={styles.button}>
              Login
            </Link>
            <div style={styles.registerText}>Register here</div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  app: {
    backgroundColor: '#00A8FF',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Raleway',
    height: '100%',
    width: '100%',
    position: 'fixed'
  },

  contentContainer: {
    position: 'fixed',
    height: '45%',
    top: '27.5%',
    width: '20%',
    backgroundColor: 'white',
    padding: '40px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    alignSelf: 'center',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  logo: {
    width: '100px',
    height: '100px',
    alignSelf: 'center',
  },

  headingContainer: {
    borderLeft: '5px solid #34E5FF',
    marginBottom: '30px',
    paddingLeft: '20px',
    paddingTop: '5px',
    paddingBottom: '5px',
    display: 'flex',
    flexDirection: 'column',
  },

  heading: {
    fontWeight: '500',
    fontSize: '25px',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column'
  },

  textInput: {
    height: '40px',
    flex: 1,
    border: '2px solid #00A8FF',
    borderRadius: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginTop: '10px',
    marginBottom: '15px'
  },

  button: {
    backgroundColor: '#F25757',
    flex: 1,
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: '10px',
    cursor: 'pointer',
    textDecoration: 'none'
  },

  registerText: {
    alignSelf: 'center',
    marginTop: '15px',
    fontSize: '14px'
  }
}

export default Login
