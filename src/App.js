import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const delay=1;
  const [val,setVal]=useState(120);
  const [arr,setArr]=useState([])
  const [isSorted,setIsSorted]=useState(false);
  useEffect(() => {
    resetArray();
  }, [])
  const resetArray = () => {
    const arr = [];
    for(let i = 0; i < val; i++)
    {
        arr[i] = randomIntFromInterval(1, 550);
    }
    // console.log(arr);
    setArr(arr);
}
  // const setRange=()=>{
  //   const num=prompt("Set Range")
  //   setVal(num);
  // }
  const createColor = (one, two, delay, color) => {
    const arrayBars = document.getElementsByClassName('array-bar');
    setTimeout(() => {
        arrayBars[two].style.backgroundColor = color;
        arrayBars[one].style.backgroundColor = color;
    }, 0.5 * delay); 
}
const createAnimation = (one, two, delay) => {
  const arrayBars = document.getElementsByClassName('array-bar');
  setTimeout(() => {
      const barOneHeight = arrayBars[one].style.height;
      const barTwoHeight = arrayBars[two].style.height;
      arrayBars[two].style.height = `${barOneHeight}`;
      arrayBars[one].style.height = `${barTwoHeight}`;
  }, 0.5 * delay);
}
const createSingleColor = (index, delay, color) => {
  const arrayBars = document.getElementsByClassName('array-bar');
  setTimeout(() => {
      arrayBars[index].style.backgroundColor = color;
  }, 0.5 * delay); 
}
  const bubbleSort = (arr, n) => {
    let i, j, temp, swapped, delay = 1;
    for(i = 0; i < n - 1; i++) 
    {
        swapped = false;
        for(j = 0; j < n - i - 1; j++) 
        {
            createColor(j, j + 1, delay++, 'darkred');
            if(arr[j] > arr[j + 1]) 
            {
                // swap arr[j] and arr[j+1] 
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                createAnimation(j, j + 1, delay++);
            }
            createColor(j, j + 1, delay++, '#005CC8');
        }
        createSingleColor(n - i - 1, delay++, 'green');

        // If no two elements were  
        // swapped by inner loop, then break 
        if(swapped === false) break;
        
        
    }
    for(let k = 0; k < n ; k++) {
      createSingleColor(k, delay++, 'white');
  }
    // setIsSorted(true);
    // console.log("inside func"+arr)
    // setArr(arr);
    // for(let k = 0; k < n - i - 1; k++) {
    //     createSingleColor(k, delay++, 'green');
    // }
}
const handlerRange = (e) => {
  setVal(e.target.value);
  
} 
  const handleSort = (arr) => {
    bubbleSort(arr,arr.length);
  }
  return (
    <>
    <nav className="navbar bg-dark navbar-expand-lg ">
    <a className="navbar-brand" href="#">Sorting Visualiser</a>
    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" onClick={()=>resetArray()} href="#">Set Range <span className="sr-only">(current)</span></a>
        </li>
        <div style={{color:'white'}}>
        <li className="nav-item active slider-container" style={{color:'white'}}>
                60
                <input type="range" 
                        
                       min="60" 
                       max="120" 
                       value={val}
                       onChange={(e) => handlerRange(e)} 
                       className="slider" 
                       id="myRange" 
                />
                120
            </li>
            
        {val}
        </div>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>handleSort(arr)} href="#">Bubble Sort</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Quick Sort</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Heap Sort</a>
        </li>
      </ul>
    </div>
    </nav>
   
      <div className="container-fluid mt-3 pt-3 text-center">
      {arr.map((value, i) => (
                  
                    <div className="array-bar"
                         key={i}
                         style={{
                            backgroundColor: 'white',
                            height: `${value}px`,
                            width: `${100 / arr.length}px`,
                            display: 'inline-block',
                            margin: '0 5px'
                         }}>
                    </div>
                ))}
      </div>
    </>
    
  );
}

export default App;
