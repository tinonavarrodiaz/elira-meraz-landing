import { socialNentworsksItems } from '../utilitis/social'

export const Social = () => {
  return (
    <ul className="social">
  {
    socialNentworsksItems.map((item: any, i:number) => (
      <li key={i}>
        <a href={item.url} target='_blank'>
          <img src={item.img} alt="" />
        </a>
      </li>
    ))
  }
</ul>
  )
}
