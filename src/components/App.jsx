import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCollection } from "./store/slice";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>this is it</h2>
      <button>set</button>
    </div>
  );
};

export default App;
