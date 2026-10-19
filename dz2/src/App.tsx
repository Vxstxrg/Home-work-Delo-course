
import StatusList from '../src/components/StatusList'
import './App.css'
import type { StatusItemProps } from '../src/components/StatusItem';
import ProjectList from './components/ProjectList';
import type { ProjectItemProps } from './components/ProjectItem';
const statusItems: StatusItemProps[] = [
	{ Header: '26', title: 'лет', subtitle: 'на рынке' },
	{ Header: '26', title: 'лет', subtitle: 'на рынке' },
	{ Header: '26', title: 'лет', subtitle: 'на рынке' },
	{ Header: '26', title: 'лет', subtitle: 'на рынке' },
]
const projectItems: ProjectItemProps[] = [
	{ image: '../src/assets/project.png', title: 'Проект 1', subtitle: 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.' },
	{ image: '../src/assets/project.png', title: 'Проект 2', subtitle: 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.' },
	{ image: '../src/assets/project.png', title: 'Проект 3', subtitle: 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.' },
]


function App() {




	return (

		<>
			<div className="App">
				<div className="Header">
					<img className="Header__image" src="../src/assets/first-screen.png" alt="" />
					<h1 className="Header__title">РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ</h1>
					<span className="Header__subtitle">стадионы, газопроводы, мосты, дамбы</span>
					<div className="Rectangle">
						<StatusList status={statusItems} />
					</div>

				</div>

				<div className="content">
					<h1 className="content__title">НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h1>

					<ProjectList project={projectItems} />

				</div>
				<div className="footer">
					<div className="footer__section footer__section_first">

						<div className="footer__text-container">
							<h1 className="footer__title">САМЫЕ УМНЫЕ ПРОЕКТЫ</h1>
							<span className="footer__subtitle">РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!</span>
						</div>

						<button className="footer__button">ВАШ ЗАПРОС</button>

					</div>

					<div className="footer__section footer__section_second">
						<h3 className="footer__copyright">© 2019 Строительная компания</h3>
						<h3 className="footer__contact">Разработано лучшей студей</h3>
					</div>
				</div>


			</div>
		</>
	)
}

export default App
