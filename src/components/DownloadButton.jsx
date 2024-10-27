import { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const DownloadButton = () => {
  // for showing popup modal
  const [show, setShow] = useState(false);
  const handleClose = (e) => {
    e.preventDefault()
    setShow(false)
  };
  const handleShow = (e) => {
    e.preventDefault()
    setShow(true)
  };

  // passcode - file map
  const passcodeFileMap = {
    "52RLnMB3": "Andrea Bevilacqua.png",
    "oE4gWAtj": "Dimitar Filtchev.png",
    "Bkt6bfkC": "Dr. Alessandro Cucchi.png",
    "0bie6GAF": "Dr. Ariel Shusterman.png",
    "BGByZjnA": "Dr. Ashwini Bhalerao.png",
    "gc1e5HKK": "Dr. Christian Monti.png",
    "AAuDSo7l": "Dr. Domenico Massironi.png",
    "vm50VoSP": "Dr. Gerardo Pellegrino.png",
    "Mg3oWsMw": "Dr. Guido Picciocchi.png",
    "j8jO94xu": "Dr. Henriette Lerner.png",
    "5ZRnxcld": "Dr. Jasmine Piran.png",
    "tt5CEYuo": "Dr. Jerome Lipowicz.png",
    "dYIvGjrx": "Dr. Luca Lepidi.png",
    "gFkMeJzv": "Dr. Mahmoud Ezzat.png",
    "P45eIxJi": "Dr. Marco Tallarico.png",
    "bI9eiGlk": "Dr. Marcus Engelschalk.png",
    "HJMBqPcP": "Dr. Mario Imburgia.png",
    "l1pbEyeD": "Dr. Maxime Jaisson.png",
    "GG85prwX": "Dr. Milos Ljubicic.png",
    "X5tODxZo": "Dr. Piero Venezia.png",
    "6LWuU1Tu": "Dr. Roberto Fornara.png",
    "ZUxngLG7": "Dr. Roberto Sorrentino.png",
    "YzFcV86H": "Janos Vag.png",
    "Kha0jfUN": "Mdt. Antonello Croce.png",
    "Z8k4KvRM": "Miguel Stanley.png",
    "mM3UPtAV": "Prof. Antonin Tichy.png",
    "HVQZLGX2": "Prof. Ashraf Ayoub.png",
    "bYLiCWGZ": "Prof. Burak Yilmaz.png",
    "uqLXYhjZ": "Prof. Etyenne Schnurr.jpg",
    "6OZ215NJ": "Prof. Guillermo Pradies.png",
    "TThJt1VZ": "Prof. Murali Srinivasan.png",
    "o8yadltr": "Prof. Pasquale Piombino.png",
    "H4844Ep1": "Prof. Reinhilde Jacobs.png",
    "Y4ugyfsc": "Prof. Sergio Uribe.png",
    "ssxKR5Qz": "Prof. Simona Tecco.png",
    "PN2YR2cx": "Prof. Theodore Eliades.png",
    "hV4BFFFo": "Prof. Vygandas Rutkunas.png",
    "1t9haANx": "Prof. Ziad Salameh.png",
    "WVxMOgAr": "Rodrigo Salazar.png",
  };

  //   logic for starting download based on passcode
  const [passcode, setPasscode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //   handle input change
  const handlePasscodeChange = (e) => {
    e.preventDefault()
    setPasscode(e.target.value);
  };

  //   handle download
  const handleDownload = () => {
    const filename = passcodeFileMap[passcode];
    if (filename) {
      // valid passcode - initiate download
      const fileUrl = `/DDS Diploma/${filename}`;

      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setShow(false);
    } else {
      // invalid passcode - display error message
      setErrorMessage("Speaker not found, please verify passcode.");
    }
  };

  return (
    <>
      <Button onClick={handleShow} style={{ backgroundColor: '#3DBDD9', borderColor: '#3DBDD9', color: 'white' }} size="lg">Access Your Speaker Diploma</Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Download Your Diploma or Join Our Exclusive Community!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            On behalf of the entire Digital Dentistry Society, I want to extend
            our deepest gratitude for your invaluable contribution to the 2024
            State of the Art Conference in Florence, Italy.
          </p>
          <p>
            Your presentation and insights have played a pivotal role in
            elevating the conversation around digital dentistry, inspiring
            attendees with your expertise and innovative perspectives. The
            knowledge and passion you brought to the event have truly made an
            impact on our community, and we are confident that your contribution
            will continue to resonate as we push the boundaries of this rapidly
            evolving field.
          </p>

          <p>
            We are honored to have had you as part of this year&apos;s
            conference and look forward to future collaborations as we work
            together to shape the future of digital dentistry.
          </p>

          <p>
            Thank you once again for sharing your time, expertise, and vision
            with us.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Row className="w-100">
            {/* First Row: Input and Download Button */}
            <Col xs={12} className="mb-3">
              <Form inline className="d-flex justify-content-between">
                <Form.Control
                  type="text"
                  placeholder="Enter passcode"
                  className="me-3"
                  value={passcode}
                  onChange={handlePasscodeChange}
                />
                <Button variant="primary" onClick={handleDownload}>
                  Download
                </Button>
              </Form>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </Col>

            {/* Second Row: Become a Member and Close Buttons */}
            <Col xs={12} className="d-flex justify-content-end ">
              <a href="https://members.digital-dentistry.org/become-a-member?_gl=1*en96c0*_ga*Mzk3Mzc4MTIwLjE3Mjc3NDUwMjI.*_ga_EZ4LNJ5LJP*MTcyOTg5MTE0Ni40LjAuMTcyOTg5MTE0Ni4wLjAuMA.." target="_blank" onClick={(e) => e.preventDefault()}>
                <Button variant="success" className="me-3" >
                  Become a Member
                </Button>
              </a>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DownloadButton;
