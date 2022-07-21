/* eslint-disable no-shadow */
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../styles/Pdf.scss";

const url = "../../src/assets/ciel.pdf";

const preventRightClick = (e) => {
  e.preventDefault();
};

export default function Test() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // To Prevent right click on screen

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  useEffect(() => {
    document.addEventListener("contextmenu", preventRightClick);

    return () => {
      document.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);

  return (
    <div className="pdf-container">
      <Document
        className="PDFDocument"
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page className="PDFPage PDFPageOne" pageNumber={pageNumber} />
      </Document>
      <div>
        <div>
          Page {pageNumber || (numPages ? 1 : "--")} sur {numPages || "--"}
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="Pre"
          >
            Prec
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Suiv
          </button>
        </div>
      </div>
    </div>
  );
}
