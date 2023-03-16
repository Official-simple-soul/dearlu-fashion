import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'



const data = [
  {name: 'APC', vote: 40, color: 'red'},
  {name: 'PDP', vote: 30, color: 'green'},
  {name: 'LP', vote: 70, color: 'purple'},
  {name: 'NNPC', vote: 80, color: 'yellow'},
]

const about =()=> {
  const barHeight = 30;
  const maxVotes = Math.max(...data.map(item => item.vote));
  
  return (
    <div className="flex pt-[100px] h-[80vh]">
      <div className="flex flex-col-reverse">
        <div className="h-1/4 text-left">0</div>
        <div className="h-1/4 text-left">50</div>
        <div className="h-1/4 text-left">100</div>
        {/* <div className="h-1/4 text-left">{maxVotes}</div> */}
      </div>
      {data.map((item, index) => (
        <div
          key={item.name}
          className="flex flex-col items-center py-2 px-4 h-[100%]"
        >
          <div className="w-1/3 text-right pr-4">{item.name}</div>
          <div className="w-2/3 bg-gray-200 h-[100%]">
            <div
              style={{
                width: ``,
                height: `${item.vote / maxVotes * 100}%`,
                backgroundColor: item.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default about
