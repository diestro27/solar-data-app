// 'use strict';

// const e = React.createElement;

// class SolarDataApp extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return e(App);
//   }
// }

// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
}

const container = document.querySelector('#solar-data-container');;
if (container) {
  ReactDOM.render(e(LikeButton), container);
}