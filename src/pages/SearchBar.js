import { FaSearch } from "react-icons/fa"; // install with: npm install react-icons

function SearchBar() {
  return (
    <div style={styles.container}>
      <FaSearch style={styles.icon} />
      <input
        type="text"
        placeholder="Search..."
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    border: "1px solid #2e2e2e",
    borderRadius: "25px",
    padding: "6px 12px",
    width: "300px",
    height: "40px",
  },
  icon: {
    color: "white",
    marginRight: "8px",
    fontSize: "16px",
  },
  input: {
    background: "transparent",
    border: "none",
    outline: "none",
    color: "white",
    fontSize: "16px",
    width: "100%",
  },
};

export default SearchBar;
