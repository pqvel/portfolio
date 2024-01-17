import Nav from "../nav/Nav";
import CertificateImg1 from "../../assets/certificates/1.jpg";
import CertificateImg2 from "../../assets/certificates/1.jpg";
import CertificateImg3 from "../../assets/certificates/1.jpg";

const CertificatesPage = () => {
  const certificates = [CertificateImg1, CertificateImg2, CertificateImg3];
  return (
    <>
      <Nav />
      <div className="py-5">
        <div className="container grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
          {certificates.map((certificate) => (
            <img
              className="h-auto w-auto"
              src={certificate}
              width={300}
              height={300}
              key={certificate}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CertificatesPage;
