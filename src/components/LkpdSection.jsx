import { useState } from 'react';

export default function LkpdSection() {
  const [ansAct1, setAnsAct1] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [ansAct2, setAnsAct2] = useState({ gerak: '', musik: '', busana: '', polaLantai: '', nilaiBudaya: '' });

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#8B4513', borderBottom: '2px solid #8B4513', paddingBottom: '10px' }}>📋 LKPD Digital (Lembar Kerja Peserta Didik)</h2>

      {/* Aktivitas 1 */}
      <div style={{ backgroundColor: '#FFF', padding: '25px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <h3 style={{ color: '#8B4513' }}>Aktivitas 1 — Mengenal Tari</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>1. Apa yang dimaksud dengan Tari Pattu’du Tommuane?</label>
            <textarea value={ansAct1.q1} onChange={(e) => setAnsAct1({ ...ansAct1, q1: e.target.value })} style={styles.textarea} placeholder="Tuliskan jawabanmu..." />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>2. Siapa yang membawakan tari tersebut?</label>
            <textarea value={ansAct1.q2} onChange={(e) => setAnsAct1({ ...ansAct1, q2: e.target.value })} style={styles.textarea} placeholder="Tuliskan jawabanmu..." />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>3. Dari kebudayaan masyarakat mana tari tersebut berasal?</label>
            <textarea value={ansAct1.q3} onChange={(e) => setAnsAct1({ ...ansAct1, q3: e.target.value })} style={styles.textarea} placeholder="Tuliskan jawabanmu..." />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>4. Sebutkan unsur-unsur tari yang kamu amati.</label>
            <textarea value={ansAct1.q4} onChange={(e) => setAnsAct1({ ...ansAct1, q4: e.target.value })} style={styles.textarea} placeholder="Tuliskan jawabanmu..." />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>5. Mengapa Tari Pattu’du Tommuane dapat digunakan dalam pembelajaran seni tari?</label>
            <textarea value={ansAct1.q5} onChange={(e) => setAnsAct1({ ...ansAct1, q5: e.target.value })} style={styles.textarea} placeholder="Tuliskan jawabanmu..." />
          </div>
        </div>
      </div>

      {/* Aktivitas 2 */}
      <div style={{ backgroundColor: '#FFF', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <h3 style={{ color: '#8B4513' }}>Aktivitas 2 — Analisis Video</h3>
        <p style={{ fontSize: '14px', color: '#666' }}>Setelah menonton video Tari Pattu’du Tommuane, tuliskan hasil pengamatanmu:</p>

        <div style={{ display: 'grid', gap: '10px' }}>
          {['gerak', 'musik', 'busana', 'polaLantai', 'nilaiBudaya'].map((key) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '120px', fontWeight: 'bold', textTransform: 'capitalize' }}>{key}:</span>
              <input 
                type="text" 
                value={ansAct2[key]} 
                onChange={(e) => setAnsAct2({ ...ansAct2, [key]: e.target.value })} 
                style={styles.input} 
                placeholder={`Pengamatan ${key}...`} 
              />
            </div>
          ))}
        </div>
        <button onClick={() => alert("Jawaban LKPD kamu berhasil tersimpan!")} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#8B4513', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Simpan Jawaban LKPD
        </button>
      </div>
    </div>
  );
}

const styles = {
  textarea: { width: '100%', height: '60px', padding: '8px', borderRadius: '6px', border: '1px solid #CCC', fontFamily: 'inherit' },
  input: { flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #CCC' }
};