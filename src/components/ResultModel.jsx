import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModel = forwardRef(function ResultModel(
  {  targetTime, timeRemaining, restTime },
  ref
) {
  const dialog = useRef();
  const userLost = timeRemaining <= 0;
  const formmatedRemmaingTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <>
      <dialog className="result-modal" ref={dialog} onClose={restTime}>
        {userLost && <h2>you are lost.. </h2>}
        {!userLost && <h2>score : {score} </h2>}

        <p>
          the target time is <strong>{targetTime}</strong>seconds
        </p>
        <p>
          you stoped the timer with{" "}
          <strong> {formmatedRemmaingTime} seconds left </strong>
        </p>
        <form method="dialog" onSubmit={restTime}>
          <button>close</button>
        </form>
      </dialog>
    </> ,document.getElementById("modal")
  );
});
export default ResultModel;
