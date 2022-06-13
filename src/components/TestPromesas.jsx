import React, { useState, useEffect } from "react";

export default function TestPromesas() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const pagara = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: "sbvsvbsv54g223", monto: 150 },
          { id: "sfdbbbsv5453623", monto: 50 },
        ]);
        rej("NO PAGO!");
      }, 2000);
    });

    pagara
      .then((result) => {
        setResult(result);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Hubo un error en el pago!"}</div>
      <div>
        {result &&
          result.map((item) => (
            <>
              <p>Id de pago: {item.id}</p>
              <p>Monto: {item.monto}</p>
            </>
          ))}
      </div>
    </>
  );
}
