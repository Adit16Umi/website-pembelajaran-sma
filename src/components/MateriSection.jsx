import { MATERI_LIST } from '../data/dataTariPattudu';

export default function MateriSection() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
      <h2 style={{ color: '#8B4513', borderBottom: '2px solid #8B4513', paddingBottom: '10px' }}>📚 Modul Materi Pembelajaran</h2>
      
      {MATERI_LIST.map((mat) => (
        <div key={mat.id} style={{ backgroundColor: '#FFF', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h3 style={{ color: '#2C3E50', marginTop: 0 }}>{mat.title}</h3>

          {/* Pengertian & Subtitle */}
          {mat.content && mat.content.map((c, i) => (
            <div key={i} style={{ marginBottom: '15px' }}>
              <h4 style={{ color: '#8B4513', margin: '10px 0 5px 0' }}>{c.subtitle}</h4>
              <p style={{ lineHeight: '1.7', color: '#444', margin: 0 }}>{c.text}</p>
            </div>
          ))}

          {/* Tahukah Kamu (Fun Fact) */}
          {mat.funFact && (
            <div style={{ backgroundColor: '#FFF8DC', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #DAA520', marginTop: '15px' }}>
              <strong style={{ color: '#8B4513' }}>💡 Tahukah Kamu?</strong>
              <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#333' }}>{mat.funFact}</p>
            </div>
          )}

          {/* Flow Inti Materi */}
          {mat.flow && (
            <div style={{ marginTop: '15px', backgroundColor: '#F9F9F9', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
              <strong style={{ color: '#555', display: 'block', marginBottom: '10px' }}>Inti Materi:</strong>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                {mat.flow.map((item, idx) => (
                  <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ backgroundColor: '#8B4513', color: '#fff', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>
                      {item}
                    </span>
                    {idx < mat.flow.length - 1 && <span style={{ color: '#888', fontWeight: 'bold' }}>→</span>}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* List Items (Karakteristik & Unsur Tari) */}
          {mat.items && (
            <div style={{ display: 'grid', gap: '10px', marginTop: '15px' }}>
              {mat.items.map((item, idx) => (
                <div key={idx} style={{ padding: '12px', border: '1px solid #EEE', borderRadius: '6px', backgroundColor: '#FAFAFA' }}>
                  <strong style={{ color: '#8B4513' }}>{item.name}: </strong>
                  <span style={{ color: '#444' }}>{item.desc}</span>
                </div>
              ))}
            </div>
          )}

          {/* Aktivitas Mengamati */}
          {mat.activity && (
            <div style={{ backgroundColor: '#E6F3FF', padding: '15px', borderRadius: '8px', marginTop: '15px', borderLeft: '4px solid #007BFF' }}>
              <strong style={{ color: '#0056B3' }}>📝 Aktivitas Mengamati:</strong>
              <p style={{ margin: '5px 0 0 0', color: '#333' }}>{mat.activity}</p>
            </div>
          )}

          {/* Nilai-Nilai Budaya */}
          {mat.values && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px', marginTop: '15px' }}>
              {mat.values.map((v, i) => (
                <div key={i} style={{ padding: '12px', backgroundColor: '#FFF8DC', borderRadius: '8px' }}>
                  <strong style={{ color: '#8B4513', display: 'block', marginBottom: '4px' }}>{v.title}</strong>
                  <span style={{ fontSize: '13px', color: '#555' }}>{v.desc}</span>
                </div>
              ))}
            </div>
          )}

          {/* Catatan Akademik / Media */}
          {(mat.note || mat.academicNote) && (
            <p style={{ fontStyle: 'italic', fontSize: '12px', color: '#777', marginTop: '15px', borderTop: '1px dashed #DDD', paddingTop: '10px' }}>
              📌 {mat.note || mat.academicNote}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}