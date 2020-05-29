// this modal makes teams that are on the gameview page
import React from "react"
import {Pane, Dialog,
  Button,
} from 'evergreen-ui'

import Component from '@reach/component-component'

const MakeModal = () => {
  return(<>
<Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <Pane paddingY='4px'>
      <Dialog
        isShown={state.isShown}
        onCloseComplete={() => setState({ isShown: false })}
        preventBodyScrolling
      >
        Scroll-locked body
      </Dialog>

      <Button onClick={() => setState({ isShown: true })}>Show Dialog</Button>
    </Pane>
  )}
</Component>
  </>)
}

export default MakeModal;