import React from 'react';

const Modal = props => {

  return (
    <>
      <div className={`modal fade + ${props.hidden}`} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h5 className="modal-title" id="exampleModalLongTitle">Game Over</h5>
            </div>
            <div className="d-flex justify-content-center mt-2">
              {`High Score: ${props.score * 100}`}
            </div>
            <div className="modal-body">
              Would you like to play again?
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button type="button" onClick={() => props.restartGame()} className="btn btn-primary">Gotta Whack em all!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
