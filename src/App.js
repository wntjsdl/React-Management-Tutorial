import React, {Component} from 'react';
// import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Customer/>
//       </div>
//     );
//   }
// }

const customers = [
  {
  'id': '1',
  'name': '홍길동',
  'image': 'https://placeimg.com/64/64/1',
  'birthday': '900000',
  'gender': '남자',
  'job': '취준생생생'
  },
  {
  'id': '2',
  'name': '강주선',
  'image': 'https://placeimg.com/64/64/2',
  'birthday': '940305',
  'gender': '남자',
  'job': '취준생생'
  },
  {
  'id': '3',
  'name': '박철수',
  'image': 'https://placeimg.com/64/64/3',
  'birthday': '911210',
  'gender': '남자',
  'job': '취준생생생'
  }
]

function App() {
  return (
    <div>
      { customers.map(c => {
        return(
          <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
          />
        );
      })
      }
    </div>
  );
}

export default App;