import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
	'h1': {
			borderBottom: 'none'
	}
});

const typography = new Typography(githubTheme)
export default typography