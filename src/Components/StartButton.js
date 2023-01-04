import React from 'react'
import '../StartButton.css'
import { Link } from "react-router-dom";

function StartButton() {
  return (
    <Link to='/question' style={{ textDecoration: 'none' }}>
      <button class="mybutton noSelect" type="button">
        <div class="mybuttoninner">
          <div class="mybuttoninner2">
            <ul>
              <li>Start</li>
              <div class="mybuttoninnerline2">
                <div class="mybuttoninnerline"></div>
              </div>
              <li>Stop</li>
            </ul>
          </div>
        </div>
      </button>
    </Link>

  )
}

export default StartButton