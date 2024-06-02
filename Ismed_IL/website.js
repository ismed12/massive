import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

function ProfileWebsite() {
  return (
    <div style={{ backgroundColor: '#6ec1e4' }}>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#6ec1e4' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="assets/logo.jpg" style={{ height: '45px' }} alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Beranda</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                  style={{ color: 'white' }}>
                  Direktori
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">Direktori Penyakit</a>
                  </li>
                  <li><a className="dropdown-item" href="#">Direktori Obat</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Konsultasi Online</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                  style={{ color: 'white' }}>
                  Informasi
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Dokter dan Jadwal</a></li>
                  <li><a className="dropdown-item" href="#">Profil Yayasan</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <button type="button" className="btn btn-primary"
            style={{ color: 'black', backgroundColor: '#ffffff', borderRadius: '20px' }}>
            Informasi
          </button>
        </div>
      </nav>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh', position: 'relative' }}>
        <div className="container my-5">
          <div style={{ borderLeft: '4px solid rgb(255, 255, 255)', paddingLeft: '20px' }}>
            <h1 style={{ fontWeight: 'bold', color: 'white' }}>Profil Website</h1>
          </div>
        </div>
        <img src="assets/bgg.png" alt="Background Image" style={{ position: 'absolute', top: '0', right: '0', height: '194px', zIndex: '0', opacity: '0.2' }} />
      </div>

      <div className="container-fluid" style={{ backgroundColor: '#eef7ff', padding: '40px' }}>
        <div className="container text-center" style={{ backgroundColor: 'white', padding: '35px' }}>
          <div style={{ height: '3px', backgroundColor: '#6ec1e4', width: '30px', margin: '0 auto 10px auto' }}></div>
          <div style={{ height: '3px', backgroundColor: '#6ec1e4', width: '50px', margin: '10px auto 20px auto' }}></div>
          <div className="row align-items-center">
            <div className="col" style={{ marginTop: '20px' }}>
              <img src="assets/logo2.jpg" alt="Logo" style={{ width: '400px', height: '200px' }} />
            </div>
            <div className="col" style={{ marginTop: '20px' }}>
              <h3>Tentang Mentalku.com</h3>
              <p style={{ textAlign: 'justify' }}>
                Salah satu website pelayanan Kesehatan Mental yang akan membuat
                pengguna menikmati layanan kesehatan mental secara online dan akan
                mempengaruhi pengidap untuk segera konsultasi kepada para ahli
                agar mengetahui diagnosa penyakitnya secara mudah dan tentunya
                tanpa dipungut biaya apapun atau gratis. Website ini juga
                memberikan edukasi seputar kesehatan mental dari pengertian,
                gejala, jenis, dan cara menangani sebelum terlambat, sehingga
                orang akan lebih teredukasi dan berhati-hati sedari awal.
              </p>
            </div>
          </div>
        </div>

        <div className="container text-center" style={{ backgroundColor: 'white', padding: '35px' }}>
          <div className="row align-items-center">
            <div className="col" style={{ marginTop: '20px' }}>
              <h3>Visi & Misi</h3>
              <div style={{ height: '3px', backgroundColor: '#6ec1e4', width: '30px', margin: '20px auto 10px auto' }}></div>
              <div style={{ height: '3px', backgroundColor: '#6ec1e4', width: '50px', margin: '10px auto 30px auto' }}></div>
              <h4 style={{ textAlign: 'left', color: '#6ec1e4' }}>VISI</h4>
              <p style={{ textAlign: 'justify' }}>
                Salah satu website pelayanan Kesehatan Mental yang akan membuat
                pengguna menikmati layanan kesehatan mental secara online dan akan
                mempengaruhi pengidap untuk segera konsultasi kepada para ahli
                agar mengetahui diagnosa penyakitnya secara mudah dan tentunya
                tanpa dipungut biaya apapun atau gratis. Website ini juga
                memberikan edukasi seputar kesehatan mental dari pengertian,
                gejala, jenis, dan cara menangani sebelum terlambat, sehingga
                orang akan lebih teredukasi dan berhati-hati sedari awal.
              </p>
              <h4 style={{ textAlign: 'left', color: '#6ec1e4' }}>MISI</h4>
              <p style={{ textAlign: 'left' }}>
                1. Memberikan akses mudah dan gratis bagi individu dari berbagai latar belakang untuk berkonsultasi tentang
                permasalahan yang mereka hadapi.
              </p>
              <p style={{ textAlign: 'left' }}>
                2. Menyediakan platform yang aman dan terpercaya untuk berbagi pengalaman, pengetahuan, dan saran kepada
                mereka yang membutuhkan.
              </p>
              <p style={{ textAlign: 'left' }}>
                3. Mempromosikan kesehatan mental dan kesejahteraan secara luas dengan menyediakan konseling dan panduan
                yang mendalam.
              </p>
              <p style={{ textAlign: 'left' }}>
                4. Menghubungkan para konselor profesional dengan individu yang membutuhkan bantuan, memfasilitasi
                pertukaran informasi yang bermanfaat dan berdampak positif.
              </p>
              <p style={{ textAlign: 'left' }}>
                5. Berkomitmen untuk menjaga keragaman dan inklusi, menghormati dan memahami keberagaman budaya, latar
                belakang, dan kebutuhan individu yang mencari bantuan.
              </p>
              <p style={{ textAlign: 'left' }}>
                6. Terus mengembangkan dan meningkatkan layanan kami berdasarkan umpan balik dari pengguna, untuk memastikan
                kepuasan dan kebermanfaatan yang maksimal.
              </p>
            </div>
          </div>
        </div>

      </div>

      <footer className="text-center text-lg-start text-muted" style={{ marginTop: '2cm' }}>
        <section style={{ color: 'white' }}>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3 align-items-center">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <a className="navbar-brand" href="#">
                  <img src="assets/logo.jpg" style={{ height: '180px' }} alt="Logo" />
                </a>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><FontAwesomeIcon icon={faPhone} className="me-2" /> (0232) 8990 5556, 890 5557</p>
                <p><FontAwesomeIcon icon={faEnvelope} className="me-2" /> mentalku@gmail.com</p>
              </div>
            </div>
            <div style={{ height: '4px', backgroundColor: '#ffffff', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginBottom: '20px', marginTop: '20px' }}></div>
            <div className="container pt-4 text-center">
              <section className="mb-4">
                <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
                  style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faInstagram} /></a>
                <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
                  style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
                  style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faYoutube} /></a>
                <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"
                  style={{ color: '#ffffff' }}><FontAwesomeIcon icon={faTwitter} /></a>
              </section>
            </div>
            <div className="text-center p-3">
              <span style={{ color: 'white' }}>copyright 2024 @mentalku.id</span>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default ProfileWebsite;
