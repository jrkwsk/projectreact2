import React from 'react'; 
// to się nazywa import ES modules
import './App.css';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';
import './index.css';

// named export z klamrą, ważne by były te same nazwy
// import {App} from...

const initialStateItems =  [
  {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxPNh7mNK-M6_OmZ4NqdULVFJJOYGC3dL7ItS3wpj5tJauBsm&s',
      name: 'Dan Abramov',
      description: 'Working on @reactjs. The demo guy.',
      twitterLink: 'https://twitter.com/dan_abramov',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxPNh7mNK-M6_OmZ4NqdULVFJJOYGC3dL7ItS3wpj5tJauBsm&s',
      name: 'Ryan Florence',
      description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
      twitterLink: 'https://twitter.com/ryanflorence',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxPNh7mNK-M6_OmZ4NqdULVFJJOYGC3dL7ItS3wpj5tJauBsm&s',
      name: 'Michael Jackson',
      description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
      twitterLink: 'https://twitter.com/mjackson',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxPNh7mNK-M6_OmZ4NqdULVFJJOYGC3dL7ItS3wpj5tJauBsm&s',
      name: 'Kent C. Dodds',
      description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
      twitterLink: 'https://twitter.com/kentcdodds',
  },
];



class App extends React.Component {
state = {
 items: [...initialStateItems,]
//  przeniesienie zawartosci tablicy
}




addItem = (e) => {
  e.preventDefault();

  const newItem = {
    name: e.target[0].value,
    twitterLink: e.target[1].value,
    image: e.target[2].value,
    description: e.target[3].value,
// uwaga na kolejność
  }
 this.setState(prevState => ({
   items: [...prevState.items, newItem],
// tutaj mamy poprzednią tablicę i jeszcze jeden element 
 }));

 e.target.reset();
//  zwykła metoda niereactowa usuwa zawartość inputów po zasubmitowaniu
}



  render() {
  return (
    <div>
      <ListWrapper 
        items={this.state.items}
      />
      <Form submitFn={this.addItem} />
    </div>
  )
}
}



export default App;
// tylko jeden expoert default
