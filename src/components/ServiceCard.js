import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ServiceCard.css"; // Add custom styles here if needed
import service1 from "../images/service1.png";
import { AddToBookmark } from "./SvgGrabber";
import "../css/Pagination.css";

const cardData = Array(12).fill({
  title: "Abdominal Ultrasound",
  description: "Long-term success is ensured by the implant.",
  price: "$40-$44",
  rating: 5,
  reviews: 16,
  image: service1,
});

const itemsPerPage = 6; // Number of items per page

const ServiceCard = () => {
  const [currentItems, setCurrentItems] = useState(
    cardData.slice(0, itemsPerPage)
  );
  const [pageCount, setPageCount] = useState(
    Math.ceil(cardData.length / itemsPerPage)
  );
  const [itemOffset, setItemOffset] = useState(0);

  // Handle page click
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cardData.length;
    setItemOffset(newOffset);
    setCurrentItems(cardData.slice(newOffset, newOffset + itemsPerPage));
  };

  return (
    <div>
      <div className="row gx-4 gy-5">
        {currentItems.map((card, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="service-card border-0">
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="service-body">
                <div className="d-flex align-items-center mb-2">
                  <div className="text-warning me-2">
                    {"★".repeat(card.rating)}
                  </div>
                  <span className="text-muted">({card.reviews})</span>
                </div>
                <h5 className="service-title">{card.title}</h5>
                <p className="service-text text-muted">{card.description}</p>
                <p className="service-price">{card.price}</p>
              </div>
              <div className="position-absolute top-0 end-0 m-2">
                <button className=" rounded-circle-service">
                  <AddToBookmark />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
    <div className="pagination-component">
    <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< Previous"
        containerClassName="custom-pagination" // Add your custom container class
        pageClassName="custom-page-item" // Custom class for each page item
        pageLinkClassName="custom-page-link" // Custom class for each page link
        previousClassName="custom-prev-item" // Custom class for 'Previous' button
        previousLinkClassName="custom-prev-link" // Custom class for 'Previous' link
        nextClassName="custom-next-item" // Custom class for 'Next' button
        nextLinkClassName="custom-next-link" // Custom class for 'Next' link
        breakClassName="custom-break-item" // Custom class for break (ellipsis)
        breakLinkClassName="custom-break-link" // Custom class for break link
        activeClassName="custom-active" // Class for active page
      />
    </div>
    </div>
  );
};

export default ServiceCard;
