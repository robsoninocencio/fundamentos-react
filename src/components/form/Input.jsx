import React, { useState } from "react";

export default (props) => {
  const [nome, setNome] = useState("");
  return (
    <>
      <p>{nome}</p>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
    </>
  );
};
