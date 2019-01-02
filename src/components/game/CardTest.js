import React from 'react'
import {connect} from 'react-redux'

class CardTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      specialCard: false,
      flipCard: false
    }
  }

  render() {
    return (
      <>
        <h1>Card Flip with Text</h1>
        <div className="deck" onClick={this.toggle}>
          <div className="card b"></div>
          <div id="flipcard" className="flip-container">
            <div className="card g b"></div>
            <div className="flipper">
              <div className="front">
                <div className="card b"></div>
                  {/* <!-- front content --> */}
              </div>
              <div className="back">
                <div className="card k">
                  <h4></h4>
                  <div className="">
                    <p>
                      One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.

                      The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me? " he thought. It wasn't a dream. His room, a proper human room, was now looming around him.
                    </p>
                  </div>
                  {/* <!-- back content --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  game: state.game
});


export default connect(mapStateToProps)(
  (CardTest)
);
