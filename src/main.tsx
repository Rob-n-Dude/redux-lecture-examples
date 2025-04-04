import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { VanillaRedux } from './VanillaRedux'
import { ReactRedux} from './ReactRedux'
import { ReactReduxThunk } from './ReactReduxThunk'
import { ReduxToolkit } from './ReduxToolkit'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <VanillaRedux />
      {/* <ReactRedux /> */}
      {/* <ReactReduxThunk /> */}
      {/* <ReduxToolkit />  */}
  </StrictMode>,
)
