import type { StatusItemProps } from '../components/StatusItem';
import StatusItem from '../components/StatusItem';


type StatusListProps = {
	status: StatusItemProps[]
}

function StatusList({ status }: StatusListProps) {
	return (
		<div className="Status-list">
			{status.map((item) => <StatusItem key={item.Header} Header={item.Header} title={item.title} subtitle={item.subtitle} />)}
		</div>
	)
}
export default StatusList;