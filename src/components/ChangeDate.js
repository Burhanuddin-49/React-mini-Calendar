import React from "react";

const ChangeDate = ({ state, setter }) => {
  function previousDate() {
    state.setDate(state.getDate() - 1);
    setter(new Date(state));
  }

  function nextDate() {
    state.setDate(state.getDate() + 1);
    setter(new Date(state));
  }

  function resetDate() {
    setter(new Date());
  }

  return (
    <div className="buttons">
      <button onClick={previousDate} className="prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button onClick={resetDate} className="reset">
        TODAY
      </button>
      <button onClick={nextDate} className="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="32px"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChangeDate;
