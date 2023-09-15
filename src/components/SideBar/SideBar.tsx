import styles from "./SideBar.module.scss"
import { sideBarOptions } from "./SideBarOptions"
import { IoIosArrowDropleft } from "react-icons/io"
import { useEffect, useState } from "react"
import { setSideBarWidth } from "./SideBarOptions"

import { getItem } from "../../utils/localStorage"

export default function SideBar({ defaultComponent }: any) {

	const [togleBar, setTogleBar] = useState(false)
	const [renderedComponent, setRenderedComponent] = useState(defaultComponent)
	let full_name = getItem("full_name")

	function handleClickTogle() {

		setSideBarWidth(!togleBar)
		setTogleBar(!togleBar)
	}

	useEffect(() => {
		document.documentElement.style.setProperty('--sidebar-width', "50px");
		document.documentElement.style.setProperty('--display-options', "none")
		document.documentElement.style.setProperty('--set-togle-rotation', "180deg")
		document.documentElement.style.setProperty('--justify-options', "center")
	}, [])

	function onClickSideBarOption(component: any) {
		setRenderedComponent(component)
	}

	return (
		<div className={styles.screenContainer} >
			<div className={styles.sidebarContainer}>
				<div className={styles.header}>
					<p>Olá, {full_name}!</p>
					<div className={styles.togle} onClick={handleClickTogle}>
						<IoIosArrowDropleft size={40} className={styles.togleIcon} />
					</div>
				</div>
				<main>
					<ul className="options">
						{sideBarOptions.map((sidebaroption) => {
							return (
								<li key={sidebaroption.title} onClick={() => { onClickSideBarOption(sidebaroption.component) }}>
									<div title={sidebaroption.title} className={styles.optionIcons}>{sidebaroption.icon}</div>
									<p>{sidebaroption.title}</p>
								</li>
							)
						})}
					</ul>
				</main>
			</div>
			<div className={styles.componentContainer}>
				{renderedComponent}
			</div>
		</div>
	)
}


