import React from "react";

type Props = {};

export default function NotFound({}: Props) {
    return (
        <div
            style={{
                backgroundColor: "var(--background-primary)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    display: "block",
                    lineHeight: "48px",
                }}
            >
                <h1
                    style={{
                        display: "inline-block",
                        margin: "0 20px 0 0",
                        paddingRight: "23px",
                        fontSize: "24px",
                        fontWeight: "500",
                        verticalAlign: "top",
                        borderRight: "1px solid var(--background-accent)",
                        color: "var(--text-primary)",
                    }}
                >
                    404
                </h1>
                <div
                    style={{
                        display: "inline-block",
                    }}
                >
                    <h2
                        style={{
                            display: "block",
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "28px",
                            color: "var(--text-primary)",
                        }}
                    >
                        This page could not be found.
                    </h2>
                </div>
            </div>
        </div>
    );
}
