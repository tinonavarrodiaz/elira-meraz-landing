import { socialNentworsksItems } from '../utilitis/social'

export const Social = () => {
  return (
    <ul className="social">
  {
    socialNentworsksItems.map((item: any) => (
      <li>
        <a href={item.url}>
          <img src={item.img} alt="" />
        </a>
      </li>
    ))
  }
</ul>
  )
}
