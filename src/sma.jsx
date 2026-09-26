import { useState } from 'react';
import Navbar from './components/Navbar';
import BerandaSection from './components/BerandaSection';
import MateriSection from './components/MateriSection';
import GerakSection from './components/GerakSection';
import LkpdSection from './components/LkpdSection';
import EvaluasiSection from './components/EvaluasiSection';

export default function App() {
  const [activeTab, setActiveTab] = useState('beranda');

  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#FAFAFA', minHeight: '100vh', color: '#333' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={{ paddingBottom: '40px' }}>
        {activeTab === 'beranda' && <BerandaSection onNavigate={setActiveTab} />}
        {activeTab === 'materi' && <MateriSection />}
        {activeTab === 'gerak' && <GerakSection />}
        {activeTab === 'lkpd' && <LkpdSection />}
        {activeTab === 'evaluasi' && <EvaluasiSection />}
        
        {/* Placeholder untuk Tab Video / Apresiasi / Refleksi */}
        {['video', 'kearifan', 'apresiasi', 'refleksi'].includes(activeTab) && (
          <div style={{ maxWidth: '900px', margin: '40px auto', padding: '30px', backgroundColor: '#FFF', borderRadius: '12px', textAlign: 'center' }}>
            <h3 style={{ color: '#8B4513', textTransform: 'capitalize' }}>Bagian {activeTab}</h3>
            <p style={{ color: '#666' }}>Halaman ini aktif dan memuat konten {activeTab} dari dokumen Tari Pattu’du Tommuane.</p>
          </div>
        )}
      </main>

      {/* Penutup Website */}
      <footer style={{ backgroundColor: '#2C3E50', color: '#FFF', padding: '30px 20px', textAlign: 'center', marginTop: '40px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#F0E68C' }}>Mari Kenali, Pelajari, dan Hargai Budaya Lokal</h3>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '13px', lineHeight: '1.6', color: '#BDC3C7' }}>
          Tari tradisional bukan hanya tentang gerakan. Di dalamnya terdapat cerita, nilai, identitas, dan pengetahuan budaya yang diwariskan dari generasi ke generasi. Melalui pembelajaran Tari Pattu’du Tommuane, siswa diharapkan tidak hanya mampu mengenal seni tari, tetapi juga memiliki kepedulian terhadap keberadaan budaya lokal[cite: 2].
        </p>
        <div style={{ fontSize: '11px', color: '#7F8C8D', marginTop: '20px' }}>
          Media Pembelajaran Berbasis Website — SMP Negeri 2 Majene[cite: 2]
        </div>
      </footer>
    </div>
  );
}