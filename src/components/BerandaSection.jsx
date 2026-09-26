import { TUJUAN_PEMBELAJARAN } from '../data/dataTariPattudu';

export default function BerandaSection({ onNavigate }) {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
     <header style={{ 
  textAlign: 'center', 
  marginBottom: '30px', 
  backgroundColor: '#FFF', 
  padding: '30px', 
  borderRadius: '12px', 
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)' 
}}>
  {/* Tambahkan lineHeight: '1.2' di sini */}
  <h1 style={{ color: '#8B4513', marginBottom: '10px', lineHeight: '1.2', fontSize: '32px' }}>
    Selamat Datang di Media Pembelajaran
  </h1>
  <h2 style={{ color: '#333', fontSize: '22px', marginTop: '10px' }}>
    Tari Pattu’du Tommuane
  </h2>
  <p style={{ color: '#555', fontSize: '14px' }}>
    Seni Tari Berbasis Kearifan Lokal — Kelas IX.D SMP Negeri 2 Majene
  </p>
  <hr style={{ margin: '20px 0', borderColor: '#F0E68C' }} />
  <p style={{ lineHeight: '1.7', color: '#444' }}>
    Melalui media ini, siswa akan mengenal salah satu tari tradisional yang berkaitan dengan kebudayaan masyarakat Mandar, memahami unsur-unsur tari, serta mengenal nilai dan kearifan lokal yang dapat dipelajari melalui Tari Pattu’du Tommuane.
  </p>
  <button 
    onClick={() => onNavigate('materi')} 
    style={{ marginTop: '15px', padding: '10px 24px', backgroundColor: '#8B4513', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
  >
    Mulai Belajar Materi →
  </button>
</header>

      {/* Tujuan Pembelajaran */}
      <section style={{ backgroundColor: '#FFF', padding: '25px', borderRadius: '12px', borderLeft: '5px solid #8B4513' }}>
        <h3 style={{ color: '#8B4513', marginTop: 0 }}>🎯 Tujuan Pembelajaran</h3>
        <ul style={{ lineHeight: '1.8', color: '#333' }}>
          {TUJUAN_PEMBELAJARAN.map((tujuan, idx) => (
            <li key={idx}>{tujuan}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}