import { useState } from 'react';
import { searcVideos } from './API/api';
import './App.scss';
import Card from './components/main/Card';
import usePagination from "./hooks/usePagination";


function App() {
  const [query, setQuery] = useState('history');
  const [list, setList] = useState([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    searcVideos(query, setList);
    setTimeout(()=>(document.querySelector('.pagination') as HTMLElement).style.display='flex',500);
};
  let {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 5,
    count: list.length,
  });


  return (

    <div className="app">
      <div className="search" >
        <input placeholder="Search Video" value={query} onChange={(e: any) => setQuery(e.target.value)}
        />
        <button onClick={handleClick}>Search YouTube</button>
      </div>
     
      <div className='videos'>
      {list.length !==0 ?
      list
      .slice(firstContentIndex, lastContentIndex)
      .map((video, index) => (
        <Card item={video} key={`card-${index}`} />
      )): <p className='noResult'>No Result</p>
      }
       <div className="pagination">
           
         <a href='#'>  <button
             onClick={prevPage}
             
             className={`page ${page === 1 && "disabled"}`}
           >
             &larr;
           </button></a>
           {/* @ts-ignore */}
           {[...Array(totalPages).keys()].map((el) => (
             <a href='#'>   <button
               onClick={() => setPage(el + 1)}
               key={el}
               className={`page ${page === el + 1 ? "active" : ""}`}
             >
               {el + 1}
             </button></a>
           ))}
            <a href='#'>  <button
             onClick={nextPage}
             className={`page ${page === totalPages && "disabled"}`}
           >
             &rarr;
           </button></a>
           </div>
         </div>
    </div>
  );
}

export default App;



