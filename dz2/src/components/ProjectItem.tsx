export type ProjectItemProps = {
	image: string;
	title: string;
	subtitle: string;
}

function ProjectItem({ image, title, subtitle }: ProjectItemProps) {
	return (
		<div className="Project-item">
			<img className="Project-item__image" src={image} alt="" />
			<div className="Rectangle-4"></div>
			<span className="Project-item__title">{title}</span>
			<span className="Project-item__subtitle">{subtitle}</span>
		</div>
	)
}
export default ProjectItem;