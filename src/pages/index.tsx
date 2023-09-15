

import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'

let theme = createTheme(
)

theme = responsiveFontSizes(theme)

export default function Home() {

  if (typeof window !== 'undefined') {
    window.location.pathname = ("/admin/app/")
  }

  return (
    <>
      <h1>PedeFast is running</h1>
    </>
  )
}
