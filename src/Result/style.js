export const Style = {
  container: {
    display: 'flex',
    width: '100%',
    padding: '30px',
    flexDirection: 'column',
    flex: 1,
    gap: '16px',
    background: 'linear-gradient(135deg, #1f5f2a, forestgreen)',
    borderRadius: '16px',
    boxShadow: '0 8px 22px rgba(0,0,0,0.3)'
  },

  contentMain: {
    display: 'flex',
    gap: '12px'
  },

  para: {
    display: 'block',
    width: '100%',
    padding: '10px 16px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.12)',
    color: '#eaf5df',
    fontFamily: 'cursive',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.25)',
    transition: 'background 0.25s ease, transform 0.25s ease',
    cursor: 'pointer'
  }
};
