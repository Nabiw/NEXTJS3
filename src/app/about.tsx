import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            About Me
          </h2>
          <p className="about-subtitle">
            
          </p>
        </div>

        <div className="about-grid">
          <div>
            <div className="about-story">
              <h3>My Story</h3>
              <p>
                saya punya passion atau bakat di bidang olahraga khusunya sepak bola.
              </p>
              <p>
                Disini saya akan menceritakan sedikit pengalaman saya selama saya berada di dunia sepak bola.
              </p>
              <p>
                Jadi, saya sudah berada di dunia sepak bola selama Kurang lebih 17 tahun,dan saya bisa dibilang sudah memiliki banyak pengalaman di dunia sepak bola,dan saya juga sudah mengikuti beberapa klub seperti SSB KALISOERAK,RICKY NELSON ACADEMY,SSB LAWANG,SSB RAJAWALI,Dan juga NZR.dan saya juga sudah mengikuti bebrapa tournament besar
                Contohnya: PIALA SOERATIN,DANON CUP,LIGA TOP SKOR,Dan SIADI CUP, Liga FANTASY, Dan RAMADHAN CUP di sepakbola saya suka dengan kerja sama timnya,saya juga dengan kebersamaan teman teman yang tak akan pernah saya lupakan,karena di sepak bola bukan hanya sekedar merebut bola dan mencetak gol.Karena sepak bola adalah kebersamaan, bukan hanya tentang siapa yang mencetak gol, tapi bagaimana kita berjuang dan saling percaya sebagai satu tim.dan juga Sepak Bola adalah VERSI CINTA TERBAIK YANG PERNAH ADA .
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h4>PENGALAMAN</h4>
              <p>pernah mengikuti tournament PIALA SOERATIN,DANNON CUP,LIGA TOP SKOR,SIADI CUP,LIGA FANTASY,LIGA LAWANG SOCCER EDUCATION,Dan RAMADHAN CUP</p>
            </div>

            <div className="stat-card">
              <h4>Prestasi</h4>
              <p>Juara 1 dalam LIGA LAWANG SOCCER EDUCATION sebanyak 4 kali berturut-turut  </p>
            </div>

            <div className="stat-card">
              <h4>Prestasi</h4>
              <p>Juara 3 Siadi cup</p>
            </div>

            <div className="stat-card">
              <h4>Prestasi</h4>
              <p>Juara 1 RAMADHAN CUP</p>
            </div>
          </div>
        </div>

        <div className="about-status">
          <div className="status-box">
            <span className="status-text">Bisa Disewa untuk membantu tim anda</span>
            <span className="status-value"></span>
            <div className="status-indicator"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
