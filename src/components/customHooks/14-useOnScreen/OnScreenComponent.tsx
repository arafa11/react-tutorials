import { useRef } from 'react'
import useOnScreen from './useOnScreen'

export default function OnScreenComponentComponent() {
  const headerTwoRef = useRef()
  const visible = useOnScreen(headerTwoRef, '-100px')

  return (
    <div>
      <h1>Header</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt,
        nam id itaque error dicta? Numquam earum iusto optio officia, molestias
        debitis illum facilis nemo asperiores eaque voluptates modi?
      </div>
      <h1 ref={headerTwoRef}>Header 2 {visible && '(Visible)'}</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde incidunt,
        nam id itaque error dicta? Numquam earum iusto optio officia, molestias
        debitis illum facilis nemo asperiores eaque voluptates modi? Dicta
        mollitia fugit doloremque vitae, dolores sequi fuga quas vel incidunt
        animi architecto dignissimos amet in quam praesentium corrupti voluptate
        dolorem impedit numquam aut cupiditate nulla! Nisi dolore dicta, cumque
        illum tempora enim dolores eum quis itaque nostrum architecto vel cum
        officiis aperiam qui exercitationem voluptatibus.
      </div>
    </div>
  )
}
