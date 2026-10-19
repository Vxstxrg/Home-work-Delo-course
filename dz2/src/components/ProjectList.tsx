import type { ProjectItemProps } from '../components/ProjectItem';
import ProjectItem from '../components/ProjectItem';


type ProjectListProps = {
	project: ProjectItemProps[]
}

function ProjectList({ project }: ProjectListProps) {
	return (
		<div className="Project-list">
			{project.map((item) => <ProjectItem key={item.image} image={item.image} title={item.title} subtitle={item.subtitle} />)}
		</div>
	)
}
export default ProjectList;