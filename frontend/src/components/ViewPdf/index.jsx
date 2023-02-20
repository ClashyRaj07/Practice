import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./viewPdf.css";

const ViewPdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  useEffect(()=>{
      const file=async ()=>await fetch('https://drive.google.com/file/d/1gg3TTVclZZYP1NnlQ8FwYW-IAIP_jX8b/view?usp=drivesdk').then(res=>console.log(res));
  },[])
  return (
    <div className="page">
      <nav>
        <button onClick={goToPrevPage} className="previous">
          Prev
        </button>
        <button onClick={goToNextPage} className="next">
          Next
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </nav>

      <Document file="https://drive.google.com/file/d/1gg3TTVclZZYP1NnlQ8FwYW-IAIP_jX8b/view?usp=drivesdk" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default ViewPdf;