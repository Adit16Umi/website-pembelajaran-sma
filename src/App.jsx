import { useState } from 'react';

// Data Materi Pembelajaran SMA
const DATA_MATERI = [
  {
    id: 1,
    mapel: 'Matematika',
    kategori: 'IPA',
    judul: 'Persamaan Kuadrat',
    ringkasan: 'Mempelajari cara mencari akar-akar persamaan kuadrat dengan rumus ABC dan pemfaktoran.'
  },
  {
    id: 2,
    mapel: 'Fisika',
    kategori: 'IPA',
    judul: 'Hukum Newton',
    ringkasan: 'Memahami konsep Hukum I, II, dan III Newton tentang gerak dan gaya.'
  },
  {
    id: 3,
    mapel: 'Sosiologi',
    kategori: 'IPS',
    judul: 'Interaksi Sosial',
    ringkasan: 'Menganalisis syarat, bentuk, dan faktor-faktor pendorong terjadinya interaksi sosial.'
  }
];

function App() {
  const [filterKategori, setFilterKategori] = useState('Semua');

  // Filter materi berdasarkan jurusan
  const materiFiltered = filterKategori === 'Semua' 
    ? DATA_MATERI 
    : DATA_MATERI.filter(m => m.kategori === filterKategori);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>E-Learning SMA Digital</h1>
        <p>Akses materi pembelajaran SMA IPA & IPS dengan mudah</p>
      </header>

      {/* Filter Category */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        {['Semua', 'IPA', 'IPS'].map((kat) => (
          <button
            key={kat}
            onClick={() => setFilterKategori(kat)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: filterKategori === kat ? '#007bff' : '#e0e0e0',
              color: filterKategori === kat ? '#fff' : '#000',
              cursor: 'pointer'
            }}
          >
            {kat}
          </button>
        ))}
      </div>

      {/* Daftar Materi */}
      <div style={{ display: 'grid', gap: '15px' }}>
        {materiFiltered.map((item) => (
          <div 
            key={item.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
            }}
          >
            <span style={{ fontSize: '12px', background: '#e0f0ff', color: '#007bff', padding: '4px 8px', borderRadius: '4px' }}>
              {item.mapel} ({item.kategori})
            </span>
            <h3 style={{ margin: '10px 0 5px 0' }}>{item.judul}</h3>
            <p style={{ color: '#555', fontSize: '14px' }}>{item.ringkasan}</p>
            <button 
              onClick={() => alert(`Membuka materi: ${item.judul}`)}
              style={{ marginTop: '10px', padding: '6px 12px', cursor: 'pointer' }}
            >
              Baca Selengkapnya
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;