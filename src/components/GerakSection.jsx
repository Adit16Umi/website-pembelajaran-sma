import { GERAK_DATA } from '../data/dataTariPattudu';

export default function GerakSection() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#8B4513', borderBottom: '2px solid #8B4513', paddingBottom: '10px' }}>🩰 Materi 6 — Mengenal Gerak Tari</h2>
      <p style={{ color: '#555', marginBottom: '20px' }}>
        Bagian ini dibuat visual pada website dengan foto dan video setiap gerak. Nama dan uraian gerak diisi berdasarkan hasil observasi atau sumber penelitian.
      </p>

      <div style={{ display: 'grid', gap: '25px' }}>
        {GERAK_DATA.map((g) => (
          <div key={g.id} style={{ backgroundColor: '#FFF', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <img src={g.image} alt={g.nama} style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
              <div style={{ marginTop: '10px', fontSize: '12px', color: '#888', textAlign: 'center' }}>[ Foto Gerakan ]</div>
            </div>
            <div>
              <h3 style={{ color: '#8B4513', margin: '0 0 10px 0' }}>{g.nama}</h3>
              <p style={{ fontSize: '14px', color: '#444' }}><strong>Deskripsi:</strong> {g.deskripsi}</p>
              <div style={{ backgroundColor: '#FAFAFA', padding: '10px', borderRadius: '6px', fontSize: '13px', display: 'grid', gap: '4px' }}>
                <div><strong>Arah Gerak:</strong> {g.arah}</div>
                <div><strong>Level:</strong> {g.level}</div>
                <div><strong>Tenaga:</strong> {g.tenaga}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}