import React from 'react'

export default props => {
  const ranks = [
    `Пара, х${props.numbers[1]+1}`,
    `Две пары, х${props.numbers[2]+1}`,
    `Сет, х${props.numbers[3]+1}`,
    `Стрит, х${props.numbers[4]+1}`,
    `Флеш, х${props.numbers[5]+1}`,
    `Фул Хаус. х${props.numbers[6]+1}`,
    `Карэ. х${props.numbers[7]+1}`,
    `Стрит Флеш, х${props.numbers[8]+1}`,
    `Роял Флеш, х${props.numbers[9]+1}`,
  ]
  return (
    <ul className="WinTable">
      {ranks.map((rank, index) => (
        <li
          className={`rank${(((props.winner-1)===index && !props.animationIsGoing) ? '-win' : '')}`}
          key={rank}
        >{rank}</li>
      )).reverse()}
    </ul>
  )
}



