import React from 'react'; 
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';


const ListWrapper = (props) => (
    <ul className="listWrapper__wrapper">
        {props.items.map(item => (
        <ListItem key={item.name} {...item} />
        // klucz jest potrzebny przy bardziej skomplikowanych aplikacjach, pamiętaj o typeofm
        // trzy kropki służą do iterownia, patrz: składnia rozwinięcia (ang. spread syntax)  
        ))}
    </ul>
);

export default ListWrapper; 

//listWrapper to komponent publiczny, może być używany w różnych miejscach, komponent prywatny to ListItem, używany tylko w rodzicu