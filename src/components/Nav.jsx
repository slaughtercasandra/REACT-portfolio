export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };
  
    return (
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-left',
          }}
        >
    
          <div style={linkStyle}>
            <a href="#">Login</a>
          </div>
          <div style={linkStyle}>
            <a href="#">About</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Contact</a>
          </div>
        </section>
      </nav>
    );
  }
  