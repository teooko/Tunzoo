
const HitCircle = () => {
    return (
        <div
            style={{
                fontSize: 30,
                borderRadius: "100px",
                width: "80px",
                height: "80px",
                position: "absolute",
                backgroundColor: "white",
                boxShadow: "0 0 15px #7849E0",
                display: "flex",
                alignItems: "center", // Vertically center children
                justifyContent: "center", // Horizontally center children
            }}
        >
            <div
                style={{
                    fontSize: 30,
                    borderRadius: "100px",
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#7849E0",
                    display: "flex",
                    alignItems: "center", // Vertically center children
                    justifyContent: "center", // Horizontally center children
                }}
            >
                <div
                    style={{
                        fontSize: 30,
                        borderRadius: "100px",
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#B07FE0",
                        boxShadow: "0 0 15px #6D38E0",
                        display: "flex",
                        alignItems: "center", // Vertically center children
                        justifyContent: "center", // Horizontally center children
                    }}
                >
                    <div style={{
                        fontSize: 30,
                        color: "#7849E0",
                        textShadow: "0 0 15px #7849E0",
                    }}>
                        K
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HitCircle;