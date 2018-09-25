import React, { Component } from 'react'
import quiz from '../../assets/images/quiz.png';

export class LandingImage extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={quiz} className="quizImage" alt="quiz logo" />
                </div>
            </div>
        )
    }
}

export default LandingImage;
