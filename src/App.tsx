import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'

import { Home } from './pages/home'
import { Post } from './pages/post'
import { DefaultLayout } from './layouts/defaultLayout'
import { darkTheme } from './styles/themes/darkTheme'

export function App() {
  return (
    <MantineProvider theme={darkTheme} withNormalizeCSS withGlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/post" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}
