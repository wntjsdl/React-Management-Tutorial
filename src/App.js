import React, {Component} from 'react';
// import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { getThemeProps } from '@material-ui/styles';

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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              { customers.map(c => { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); }) }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

// function App() {
//   // const { classes } = this.props;
//   return (
//     // <Paper className = { this.props.root }>
//     //   <Table className = { this.table }>
//     <Paper>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>번호</TableCell>
//             <TableCell>이미지</TableCell>
//             <TableCell>이름</TableCell>
//             <TableCell>생년월일</TableCell>
//             <TableCell>성별</TableCell>
//             <TableCell>직업</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//             { customers.map(c => { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); }) }
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }

export default withStyles(styles)(App);