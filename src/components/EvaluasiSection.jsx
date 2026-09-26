import { useState } from 'react';
import { SOAL_PILGAN } from '../data/dataTariPattudu';

export default function EvaluasiSection() {
  const [userAnswers, setUserAnswers] = useState({});
  const [reflektifText, setReflektifText] = useState('');
  const [score, setScore] = useState(null);

  const handleSelect = (soalId, optionId) => {
    setUserAnswers({ ...userAnswers, [soalId]: optionId });
  };

  const handleHitungNilai = () => {
    let benar = 0;
    SOAL_PILGAN.forEach((s) => {
      if (userAnswers[s.id] === s.kunci) benar++;
    });
    setScore(Math.round((benar / SOAL_PILGAN.length) * 100));
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#8B4513', borderBottom: '2px solid #8B4513', paddingBottom: '10px' }}>📝 Evaluasi Pembelajaran</h2>

      {/* Pilihan Ganda */}
      <div style={{ backgroundColor: '#FFF', padding: '25px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <h3 style={{ color: '#8B4513' }}>Pilihan Ganda</h3>

        {SOAL_PILGAN.map((s, index) => (
          <div key={s.id} style={{ marginBottom: '20px', borderBottom: '1px solid #EEE', paddingBottom: '15px' }}>
            <p style={{ fontWeight: 'bold', color: '#333' }}>{index + 1}. {s.soal}</p>
            <div style={{ display: 'grid', gap: '8px' }}>
              {s.pilihan.map((p) => (
                <label key={p.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '8px', borderRadius: '6px', backgroundColor: userAnswers[s.id] === p.id ? '#FFF8DC' : '#FAFAFA' }}>
                  <input type="radio" name={`soal-${s.id}`} checked={userAnswers[s.id] === p.id} onChange={() => handleSelect(s.id, p.id)} />
                  <span><strong>{p.id}.</strong> {p.text}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <button onClick={handleHitungNilai} style={{ padding: '10px 20px', backgroundColor: '#8B4513', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          Periksa Jawaban Pilihan Ganda
        </button>

        {score !== null && (
          <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#E6F4EA', color: '#137333', borderRadius: '8px', fontWeight: 'bold' }}>
            Skor Pilihan Ganda Kamu: {score} / 100
          </div>
        )}
      </div>

      {/* Evaluasi Reflektif */}
      <div style={{ backgroundColor: '#FFF', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <h3 style={{ color: '#8B4513' }}>Evaluasi Reflektif</h3>
        <p style={{ fontSize: '14px', color: '#555' }}>
          Tuliskan dalam 3–5 kalimat: <em>“Menurut saya, Tari Pattu’du Tommuane penting dipelajari di sekolah karena ….”</em>
        </p>
        <textarea 
          value={reflektifText} 
          onChange={(e) => setReflektifText(e.target.value)} 
          style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '6px', border: '1px solid #CCC', fontFamily: 'inherit' }}
          placeholder="Tuliskan pendapatmu di sini..."
        />
      </div>
    </div>
  );
}