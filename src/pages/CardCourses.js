function CardCourses(props) {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                backgroundColor: "#fff7d1",
                padding: "20px",
            }}
        >
            {props.persons.map((p, i) => (
                <div
                    key={i}
                    style={{
                        width: "15%", // 2 per row
                        backgroundColor: "white",
                        borderRadius: "15px",
                        padding: "15px",
                        textAlign: "center",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <img
                        style={{ borderRadius: "70px", marginTop: "10px" }}
                        src={p.img}
                        alt={p.name}
                        width="120"
                        height="120"
                    />
                    <div style={{ fontSize: "1.2rem", fontWeight: "600", marginTop: "10px", color: "#333" }}>
                        {p.name}
                    </div>
                    <div style={{ fontSize: "1rem", color: "#666", marginTop: "4px" }}>
                        Age: {p.age}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#888", marginTop: "4px" }}>
                        📞 {p.mobile}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardCourses;
