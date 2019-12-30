/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import Button from '../../../components/Button/button.js'
import { setSessionPassword } from '../utils/utils.js';

const styles = {
  wrapper: {
    padding: '40px',
    height: '100vh',
    backgroundColor: '#212121',
    backgroundColor: 'var(--bg)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#212121',
    backgroundColor: 'var(--bg)',
    color: '#ff0',
    color: 'var(--primary)',
    border: '1px solid #ff0',
    width: '100%',
    marginRight: '8px',
    padding: '.5rem .75rem'
  },
  button: {
    cursor: 'pointer',
    backgroundColor: '#212121',
    backgroundColor: 'var(--bg)',
    color: '#ff0',
    color: 'var(--primary)',
    border: '1px solid #ff0',
    padding: '.25rem 1.25rem'
  }
};

const PasswordProtect = () => {
  const [password, setPassword] = useState('');
  const [isButtonHovered, buttonHover] = useState(false);
  const [isThemeHovered, themeHover] = useState(false);
  const [isSiteHovered, siteHover] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
    <div className="password" style={styles.wrapper}>
      <h1 style={{ color: '#fff' }}>Welcome</h1>
      <h4 style={{ color: '#fff' }}>Enter Password</h4>

      <form onSubmit={onSubmit} style={{ display: 'flex'}}>
        <input
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          style={styles.input}
        />

        <button
          type="submit"
          style={{
            ...styles.button
          }}
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          Enter
        </button>
      </form>

    </div>
  );
};

export default PasswordProtect;
