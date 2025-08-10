import React, { useState } from "react";
import AllProductData from "../../../API/AllProductsData.json"; // तुम्हारा JSON data import करो

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    // Matching product names
    const matches = AllProductData.tshirtData.filter((product) =>
      product.description.toLowerCase().includes(value)
    );

    // सिर्फ 5 suggestions तक दिखाओ
    setSuggestions(matches.slice(0, 5));
  };

  const handleSelect = (productName) => {
    setQuery(productName);
    setSuggestions([]);
    showResults(productName);
  };

  const showResults = (searchTerm) => {
    const matches = AllProductData.tshirtData.filter((product) =>
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(matches);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      showResults(query);
      setSuggestions([]);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search products..."
        style={{ width: "100%", padding: "8px" }}
      />

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <ul
          style={{
            border: "1px solid #ccc",
            margin: 0,
            padding: "5px",
            listStyle: "none",
          }}
        >
          {suggestions.map((product) => (
            <li
              key={product.id}
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => handleSelect(product.description)}
            >
              {product.description}
            </li>
          ))}
        </ul>
      )}

      {/* Search Results */}
      <div style={{ marginTop: "20px" }}>
        {results.length > 0 &&
          results.map((product) => (
            <div key={product.id} style={{ marginBottom: "10px" }}>
              <strong>{product.description}</strong> — ₹{product.price}
            </div>
          ))}

        {results.length === 0 && query && (
          <p>No products found for "{query}"</p>
        )}
      </div>
    </div>
  );
}
