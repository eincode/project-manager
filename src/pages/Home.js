import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div style={styles.app}>
        <div style={styles.header}>
          <div style={styles.title}>Project Manager</div>
          <div style={styles.subtitle}>Manage all your projects in one place</div>
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.headingContainer}>
            <div style={styles.heading}>Your projects</div>
            <div style={styles.additionalButton}>+ Add a new project</div>
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
  },

  header: {
    padding: '50px 70px',
    color: 'white'
  },

  title: {
    fontWeight: '600',
    fontSize: '30px',
  },

  subtitle: {
    fontSize: '15px',
    fontWeight: '400'
  },

  contentContainer: {
    width: '80%',
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: '40px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    marginBottom: '50px',
  },

  headingContainer: {
    borderLeft: '5px solid #34E5FF',
    marginBottom: '30px',
    paddingLeft: '20px',
    paddingTop: '5px',
    paddingBottom: '5px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  heading: {
    flex: 1,
    fontWeight: '500'
  },

  additionalButton: {
    padding: '13px',
    backgroundColor: '#F25757',
    borderRadius: '24px',
    color: 'white',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer'
  },
}

export default Home
