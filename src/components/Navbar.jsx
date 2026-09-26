export default function Navbar({ activeTab, setActiveTab }) {
  const menus = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'materi', label: 'Materi' },
    { id: 'video', label: 'Video Tari' },
    { id: 'gerak', label: 'Gerak Tari' },
    { id: 'kearifan', label: 'Kearifan Lokal' },
    { id: 'apresiasi', label: 'Apresiasi' },
    { id: 'lkpd', label: 'LKPD' },
    { id: 'evaluasi', label: 'Evaluasi' },
    { id: 'refleksi', label: 'Refleksi' },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <span style={styles.brandTitle}>Tari Pattu’du Tommuane</span>
        <span style={styles.brandSub}>Kelas IX.D SMPN 2 Majene</span>
      </div>
      <div style={styles.menuList}>
        {menus.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveTab(m.id)}
            style={{
              ...styles.menuBtn,
              backgroundColor: activeTab === m.id ? '#8B4513' : 'transparent',
              color: activeTab === m.id ? '#FFF' : '#333',
              fontWeight: activeTab === m.id ? 'bold' : 'normal',
            }}
          >
            {m.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifySpace: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#FFF8DC',
    borderBottom: '2px solid #8B4513',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    flexWrap: 'wrap',
    gap: '10px'
  },
  brand: { display: 'flex', flexDirection: 'column' },
  brandTitle: { fontSize: '18px', fontWeight: 'bold', color: '#8B4513' },
  brandSub: { fontSize: '12px', color: '#666' },
  menuList: { display: 'flex', gap: '6px', flexWrap: 'wrap' },
  menuBtn: {
    padding: '8px 14px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '13px',
    transition: 'all 0.2s'
  }
};