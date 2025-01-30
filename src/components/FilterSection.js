import React, { useState } from "react";
import "../css/FilterSection.css"
const FilterSection = () => {
  const [categories, setCategories] = useState({
    abdominal: false,
    pelvic: false,
    obstetric: false,
    thyroid: false,
  });

  const [subCategories, setSubCategories] = useState({
    abdominalUltrasound: false,
    liverUltrasound: false,
    gallbladderUltrasound: false,
    bladderUltrasound: false,
    spleenUltrasound: false,
  });

  const [sortBy, setSortBy] = useState("default");

  const handleCategoryChange = (e) => {
    setCategories({ ...categories, [e.target.name]: e.target.checked });
  };

  const handleSubCategoryChange = (e) => {
    setSubCategories({ ...subCategories, [e.target.name]: e.target.checked });
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  return (
    <div className="filter-section p-3">
      {/* Categories */}
      <div className="mb-4">
        <h6 className="filter-heading">Categories</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="abdominal"
            checked={categories.abdominal}
            onChange={handleCategoryChange}
          />
          <label className="form-check-label filter-categories-label">Abdominal</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="pelvic"
            checked={categories.pelvic}
            onChange={handleCategoryChange}
          />
          <label className="form-check-label filter-categories-label">Pelvic</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="obstetric"
            checked={categories.obstetric}
            onChange={handleCategoryChange}
          />
          <label className="form-check-label filter-categories-label">Obstetric</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="thyroid"
            checked={categories.thyroid}
            onChange={handleCategoryChange}
          />
          <label className="form-check-label filter-categories-label">Thyroid</label>
        </div>
      </div>

      {/* Sub-Categories */}
      <div className="mb-4">
        <h6 className="filter-heading">Sub-Categories</h6>
        {Object.keys(subCategories).map((key) => (
          <div className="form-check" key={key}>
            <input
              className="form-check-input"
              type="checkbox"
              name={key}
              checked={subCategories[key]}
              onChange={handleSubCategoryChange}
            />
            <label className="form-check-label filter-categories-label">
              {key.replace(/([A-Z])/g, " $1")}
            </label>
          </div>
        ))}
      </div>

      {/* Sort By */}
      <div>
        <h6 className="filter-heading">Sort By</h6>
        <div className="three-btn" role="group" aria-label="Sort Options">
          <button
            type="button"
            className={`btn ${
              sortBy === "default" ? "btn-warning" : "btn-outline-secondary"
            }`}
            onClick={() => handleSortChange("default")}
          >
            Default
          </button>
          <button
            type="button"
            className={`btn ${
              sortBy === "newest" ? "btn-warning" : "btn-outline-secondary"
            }`}
            onClick={() => handleSortChange("newest")}
          >
            Newest
          </button>
          <button
            type="button"
            className={`btn ${
              sortBy === "latest" ? "btn-warning" : "btn-outline-secondary"
            }`}
            onClick={() => handleSortChange("latest")}
          >
            Latest
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
